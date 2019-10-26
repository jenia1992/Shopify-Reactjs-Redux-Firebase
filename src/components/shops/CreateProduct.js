import React, { Component } from "react"
import { connect } from 'react-redux'
import * as actionType from '../../store/actions/index'
class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state={
        name:"",
        price:"",
        quantity:1,
        shopId:"",
        url:"",
        file:null
        
  }
}
componentDidMount(){
 this.setState({shopId:this.props.location.state.shopId,category:this.props.location.state.shopCategory})
}
  onChangeHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  SubmitHandler=event=>{
    event.preventDefault();
    if(this.state.file===null) return
    this.props.uploadImgToStorage(this.state.file).then(res=>{
      this.setState({url:res.url,file:res.file},()=>{
        this.props.createProduct(this.state)
        this.props.history.push(`/shop/${this.state.shopId}`)
      })
    })
    
  }
   onUploadHandler=(event)=>{
    // console.log("FILe",event.target.files[0])
    
    this.setState({url:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})
    
    
     
  }
  render() {
    
    return (
      <div  className="d-flex justify-content-center text-center font-weight-bold bgGrey mt-5">

        
        <form onSubmit={this.SubmitHandler} className=" col-6 mt-5">
          <label  htmlFor="name">Product Name</label>
          <input  className="form-control " placeholder="Product Name" type="text" value={this.state.name} onChange={event=>this.onChangeHandler(event)}  name="name"  />

          <label htmlFor="price">Price</label>
          <input  className="form-control " placeholder="Price" type="number" value={this.state.price} onChange={event=>this.onChangeHandler(event)}  name="price"  />

          <label htmlFor="quantity">Quantity</label>
          <input  className="form-control " placeholder="Quantity" type="number" value={this.state.quantity} onChange={event=>this.onChangeHandler(event)}  name="quantity"  />

          <label htmlFor="imgupload">Product Image</label>
          <input  className="form-control " type="file"  name="imgupload" onChange={(event)=>this.onUploadHandler(event)} />
          {this.state.url !== "" ?<img style={{maxHeight:"30vh"}} src={this.state.url}/>:null}
          <input className="btn btn-primary mt-1" type="submit" value="Create" />

        </form>
        

      </div>
    )
  }
}
const mapDispatchToProps=(disatch)=>{
  return{
    createProduct:(product)=>disatch(actionType.createProduct(product)),
    uploadImgToStorage:(imgdata)=>disatch(actionType.uploadImgToStorage(imgdata))
   
  }
}
export default connect(null,mapDispatchToProps)(CreateProduct)