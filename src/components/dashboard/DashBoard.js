import React, { Component } from 'react';
import ShopList from '../shops/ShopList'
import {compose} from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, actionTypes } from 'react-redux-firebase'
import * as actionType from '../../store/actions/index'
import ShopQuery from './ShopQuery'

class DashBoard extends Component {
    constructor(props){
        super(props)
        this.state={
            collection:"",
            opt:"",
            categories:"",
            searchText:"",
            search:false
        }
    }
    componentDidMount(){
        if(this.props.dashBoardForm !== ""){
            this.setState({
                collection:this.props.dashBoardForm.collection,
                opt:this.props.dashBoardForm.opt,
                categories:this.props.dashBoardForm.categories,
                searchText:this.props.dashBoardForm.searchText,
                search:this.props.dashBoardForm.search
            })
        }  
        
    }
    onSelectHandler=(event)=>{
        // console.log(event.target.value,event.target.name)
        this.setState({[event.target.name]:event.target.value},()=>{
            // console.log(this.state)
        })
    }
    submitHandler=(event)=>{
    event.preventDefault()
    if(this.state.collection !== ""){
        this.setState({search:true},()=>{
            this.props.updateDashBoardForm(this.state)
        })
        // console.log("SUBMIT")
    }
    }
    render() {
        // console.log('object', this.props)
        const { shops } = this.props
        return (
            <div className="container">
                <form className="mt-2" onSubmit={this.submitHandler}>
                    <div className="form-group row">

                        <select name="collection" onChange={(event)=>this.onSelectHandler(event)} className="form-control  col-4">
                            <option value="Default">Default</option>
                            <option value="shops">shops</option>
                            <option value="products">products</option>
                        </select>

                        <select name="opt" onChange={(event)=>this.onSelectHandler(event)} className="form-control  col-4" >
                            <option value="Default">Default</option>
                            <option value="name">name</option>
                            <option value="category">category</option>
                        </select>

                        <select name="categories" onChange={(event)=>this.onSelectHandler(event)} className="form-control  col-4" disabled={this.state.opt==="category"?false:true}>
                       {
                           ["Default","Electricity","PC","Clothes","TV","Books"].map((cat,i)=>{
                            return (
                              <option key={"o"+i} value={cat}>{cat}</option>
                            )
                          })
                       }
                        </select>

                    </div>
                    <div  className="form-group row">
                        <input name="searchText" onChange={(event)=>this.onSelectHandler(event)} className="form-control col-10" type="search" placeholder="Search" aria-label="Search" disabled={this.state.opt==="category"?true:false}/>
                        <button type="submit" className="btn btn-primary col-2">Submit</button>
                    </div>
                
                
                </form>

                {this.state.search&&<ShopQuery 
                fromCollection={this.state.collection} 
                where1={this.state.opt} 
                condition={this.state.opt==="name"?">=":"=="}
                 where2={this.state.opt==="category"?this.state.categories:this.state.searchText} />}
                {/* <ShopQuery fromCollection="shops" where1="category" condition="==" where2="Clothes" /> */}
                
            </div>
        )
    }
}
const mapDispatchToProps=(disatch)=>{
    return{
        updateDashBoardForm:(form)=>disatch(actionType.updateDashBoardForm(form))
        
    }
  }
const mapStateToProps = (state) => {
    return {
        shops: state.firestore.ordered.shops,
        dashBoardForm:state.auth.dashBoardForm
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(DashBoard)
