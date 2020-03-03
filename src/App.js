import React, {Component} from 'react';
import './App.css';
import Button from './components/Button.js'
import Input from './components/Input.js'
import ClearButton from "./components/ClearButton.js"

class App extends Component {
  state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  }

  addInput = val => {
    this.setState({input: this.state.input + val + " "});
  }
  render(){
  return (
    <div className="App">
    <div className="calculator_container">
    <div className='row'>
    <Input>{this.state.input}</Input>
    </div>
    <div className="row">
    <Button handleClick={this.addInput}>7</Button>
    <Button handleClick={this.addInput}>8</Button>
    <Button handleClick={this.addInput}>9</Button>
    <Button handleClick={this.addInput}>/</Button>
    </div>

    <div className="row">
    <Button handleClick={this.addInput}>4</Button>
    <Button handleClick={this.addInput}>5</Button>
    <Button handleClick={this.addInput}>6</Button>
    <Button handleClick={this.addInput}>*</Button>
    </div>

    <div className="row">
    <Button handleClick={this.addInput}>1</Button>
    <Button handleClick={this.addInput}>2</Button>
    <Button handleClick={this.addInput}>3</Button>
    <Button handleClick={this.addInput}>+</Button>
    </div>

    <div className="row">
    <Button handleClick={this.addInput}>.</Button>
    <Button handleClick={this.addInput}>0</Button>
    <Button handleClick={this.addInput}>=</Button>
    <Button handleClick={this.addInput}>-</Button>
    </div>

    <div className="row">
    <ClearButton>clear</ClearButton>
    </div>
  </div>
  </div>
  );
}}

export default App;
