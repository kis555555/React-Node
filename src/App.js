import React, { Component } from 'react'
import './App.css';
class App extends Component {

  state = {
    id : "",
    name : ""
  }

  submitId = ()=>{
    const serversend_Data ={
      id : "server send id",
      name : "server send name"
    };
    fetch("http://localhost:3001/serversend", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(serversend_Data),
    });
  };

  getServerData = () => {
    fetch('http://localhost:3001/',{
      method : 'get',
      headers : {'Content-Type' : 'application/json'}
    },
    )
    .then(res => {
      console.log(res);
      console.log(typeof(res));
      return res.json();
    })
    .then(res => {
      this.setState({
        id : res.id,
        name : res.name
      });
    });
  }



  render() {
    return (
      <div>
        <button onClick = {this.getServerData}>server get</button>
        <h1>{this.state.id}</h1>
        <h2>{this.state.name}</h2>

        <button onClick = {this.submitId}>Submit</button>

      </div>
    )
  }
}

export default App;