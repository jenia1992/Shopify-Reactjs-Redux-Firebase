import React, { Component } from "react"
import { connect } from 'react-redux'
import * as actionType from '../../store/actions/index'
class CreateShop extends Component {
  constructor(props){
    super(props);
    this.state={
        name:"",
        about:"",
        category:""

  }
}
// componentDidMount(){
//   this.props.getShopProducts("3J5hseb8LxZh3ALqWE8j")
// }
  onChangeHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
  }
  SubmitHandler=event=>{
    event.preventDefault();
    // console.log(this.state)
    if(this.state.category !=="Default"){
      this.props.createShop(this.state).then(res=>{
        // console.log(res)
        this.props.history.push(res)
      }).catch(err=>{
        console.log(err)
      })
    }
    
  }
  render() {
    let categoriesList=(
      <select className="form-control" name="category" onChange={event=>this.onChangeHandler(event)}>
        {
          ["Default","Electricity","PC","Clothes","TV","Books"].map(cat=>{
            return (
              <option value={cat}>{cat}</option>
            )
          })
        }
      </select>
    )
    return (
      <div className="d-flex justify-content-center text-center font-weight-bold bgGrey mt-5">
        
        <form onSubmit={this.SubmitHandler} className="col-6 mt-5">
          
          <label htmlFor="name">Shop Name</label>
          <input className="form-control " placeholder="Shop Name" type="text" value={this.state.name} onChange={event=>this.onChangeHandler(event)} id="name" name="name"  />

          <label htmlFor="category">Category</label>
          {/* <input placeholder="shop Category" type="text" value={this.state.category} onChange={event=>this.onChangeHandler(event)} id="category" name="category" /> */}
          {categoriesList}
          
          <div className="form-group">
            <label Htmlfor="about">About</label>
            <textarea name="about" className="form-control" maxLength="80" rows="5" id="about" value={this.state.about} onChange={event=>this.onChangeHandler(event)}></textarea>
          </div>

          
          <input className="btn btn-primary mt-1" type="submit" value="Create" />

        </form>
        

      </div>
    )
  }
}
const mapDispatchToProps=(disatch)=>{
  return{
    createShop:(shop)=>disatch(actionType.createShop(shop))
    
  }
}
export default connect(null,mapDispatchToProps)(CreateShop)