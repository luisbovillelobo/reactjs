import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <App2 name="Karate"/>
      <App2 name="Futbol"/>
      <App3/>
    </div>
    );
  }
}

class App3 extends Component {

    constructor(props) {
      super(props);
      this.state = {time:1};
      this.tick = this.tick.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

  componentDidMount() {
    setInterval(this.tick,1000);
  }
  
  tick() {
    this.setState({time:this.state.time+1});
  }

    handleClick() {
    this.setState({time: 0});
  }

  render() {
    return (
      <div onClick={this.handleClick}>Hola Pedro {this.state.time}</div>
    );
  }
}

export default App;

class App2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {meGusta: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({meGusta: !this.state.meGusta});
  }

  render() {
      if (this.state.meGusta) {
        return <h1 onClick={this.handleClick}>Ya no me gusta {this.props.name} <div style={{height:40,width:40,backgroundColor:"blue", float:"right"}}></div></h1>;
      } else {
        return <h1 onClick={this.handleClick}>Me gusta {this.props.name} <div style={{height:40,width:40,backgroundColor:"grey", float:"right"}}></div></h1>;
      }
  }
}
