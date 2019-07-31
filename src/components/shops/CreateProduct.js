import React, { Component } from "react"
import { connect } from 'react-redux'
import { createProduct,uploadImgToStorage } from '../../store/actions/shopAction'
class CreateProduct extends Component {
  constructor(props){
    super(props);
    this.state={
        name:"",
        price:"",
        quantity:1,
        shopId:"",
        url:""
        
  }
}
componentDidMount(){
 this.setState({shopId:this.props.location.state.shopId})
}
  onChangeHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  SubmitHandler=event=>{
    event.preventDefault();
    // console.log(this.state)
    this.props.createProduct(this.state)
  }
   onUploadHandler=(event)=>{
    // console.log("FILe",event.target.files[0])
    this.props.uploadImgToStorage(event.target.files[0]).then(res=>{
      this.setState({url:res})
    }).catch(err=>{
      console.log(err)
    })
    
    
     
  }
  render() {
    
    return (
      <div>

        <h1>Create Product</h1>
        <form onSubmit={this.SubmitHandler} className="d-flex flex-column align-items-center">
          <label htmlFor="name">Product Name</label>
          <input placeholder="Product Name" type="text" value={this.state.name} onChange={event=>this.onChangeHandler(event)}  name="name"  />

          <label htmlFor="price">Price</label>
          <input placeholder="Price" type="number" value={this.state.price} onChange={event=>this.onChangeHandler(event)}  name="price"  />

          <label htmlFor="quantity">Quantity</label>
          <input placeholder="Quantity" type="number" value={this.state.quantity} onChange={event=>this.onChangeHandler(event)}  name="quantity"  />

          <label htmlFor="imgupload">Product Image</label>
          <input type="file"  name="imgupload" onChange={(event)=>this.onUploadHandler(event)} />
          {this.state.url !== "" ?<img src={this.state.url}/>:null}
          <input className="btn btn-primary mt-1" type="submit" value="Create" />

        </form>
        

      </div>
    )
  }
}
const mapDispatchToProps=(disatch)=>{
  return{
    createProduct:(product)=>disatch(createProduct(product)),
    uploadImgToStorage:(imgdata)=>disatch(uploadImgToStorage(imgdata))
   
  }
}
export default connect(null,mapDispatchToProps)(CreateProduct)