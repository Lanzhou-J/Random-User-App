import React, {Component} from 'react';
import Userinput from './userinput';
import Useroutput from './useroutput';
// import { BrowserRouter, Route } from "react-router-dom";

class App extends Component{
  
  state = {user:null, username:""}

  async componentDidMount(){
    console.log("componentDidMount")
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json()
    console.log(data)
    this.setState({user: data, username:data.results[0].name.first})
  }

  handleChange = (input) => {
    this.setState(state=>{
      return {username: input}
    });
  }
  
  render(){
    console.log("here")
    const user = this.state?.user
    if (user == null){
      return(
        <div></div>
      )
    }else{
      const info = user.results[0]
    return(
      <div>
        <h1>Random user app</h1>
        <h3>{info.name.title} {info.name.first} {info.name.last}</h3>
        <h3>Gender : {info.gender}</h3>
        <h3>Email : {info.email}</h3>
        <img src={info.picture.medium} alt="profile"/>
        <Userinput handleInput={this.handleChange}/>
        <Useroutput name = {this.state.username}/>
        <Useroutput />
      </div>
    )
    }
  }
}

export default App;
