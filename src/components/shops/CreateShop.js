import React, { Component } from "react"
import { connect } from 'react-redux'
import * as actionType from '../../store/actions/index'
class CreateShop extends Component {
  constructor(props){
    super(props);
    this.state={
        name:"",
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
      this.props.createShop(this.state)
    }
    
  }
  render() {
    let categoriesList=(
      <select name="category" onChange={event=>this.onChangeHandler(event)}>
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
      <div>

        <h1>Create Shop</h1>
        <form onSubmit={this.SubmitHandler} className="d-flex flex-column align-items-center">
          <label htmlFor="name">First Name</label>
          <input placeholder="Shop Name" type="text" value={this.state.name} onChange={event=>this.onChangeHandler(event)} id="name" name="name"  />

          <label htmlFor="category">Category</label>
          {/* <input placeholder="shop Category" type="text" value={this.state.category} onChange={event=>this.onChangeHandler(event)} id="category" name="category" /> */}
          {categoriesList}

          
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