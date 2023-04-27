import React, { Component } from 'react'

export default class Password extends Component {

    state = {type: "Password",btnName : "Show password"}

    change = () =>{
        
        this.setState({type:"text",btnName:"Hide password"})
    }
  render() {
    return (
      <>
      <input type={this.state.type} placeholder='Enter pasword'/>
      <button onClick={this.change}>{this.state.btnName}</button>
      </>
    )
  }
}
