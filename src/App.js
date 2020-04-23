import React, { Component } from 'react';
import './App.css';
import Login from './components/login/login';
import Register from './components/register/register';
import Home from './components/home/home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'Signin',
    }
  }

  onInputChange =(event)=> {
    console.log(event.target.value);
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }


  render() {
    return (<div className="App">
      {this.state.route === 'Home' 
      ? <Home />
      : (this.state.route === 'Register' 
        ? <Register onRouteChange={this.onRouteChange} />
        : <Login onInputChange={this.onInputChange} onRouteChange={this.onRouteChange}/>
      )
      }
    </div>
    );
  }
}

export default App;
