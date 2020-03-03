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
    this.setState({input: this.state.input + val});
  }

  addZeroInput = val => {
    if (this.state.input !== ""){
      this.setState({input: this.state.input + val})
    }
  }

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1){
      this.setState({input: this.state.input + val})
    }
    }

    clearInput = () => {
      this.setState({input: ""});
    }

    addFn = () => {
     this.setState({previousNumber : this.state.input, input: "", operator: "plus"})
    }

    subtractFn = () => {
      this.setState({previousNumber : this.state.input, input: "", operator: "subtract"})
    }

    devideFn = () => {
      this.setState({previousNumber : this.state.input, input: "", operator: "devide"})
    }

    multFn = () => {
      this.setState({previousNumber : this.state.input, input: "", operator: "mult"})
    }

    
    evaluateFn = () => {
      this.state.currentNumber = this.state.input;

      if (this.state.operator == "plus"){
        this.setState({
          input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
        })
      } else if (this.state.operator == "subtract"){
        this.setState({
          input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
        })
      } else if (this.state.operator == "devide"){
        this.setState({
          input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
        })
      }else if (this.state.operator == "mult"){
        this.setState({
          input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
        })
      }
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
    <Button handleClick={this.devideFn}>/</Button>
    </div>

    <div className="row">
    <Button handleClick={this.addInput}>4</Button>
    <Button handleClick={this.addInput}>5</Button>
    <Button handleClick={this.addInput}>6</Button>
    <Button handleClick={this.multFn}>*</Button>
    </div>

    <div className="row">
    <Button handleClick={this.addInput}>1</Button>
    <Button handleClick={this.addInput}>2</Button>
    <Button handleClick={this.addInput}>3</Button>
    <Button handleClick={this.addFn}>+</Button>
    </div>

    <div className="row">
    <Button handleClick={this.addDecimal}>.</Button>
    <Button handleClick={this.addZeroInput}>0</Button>
    <Button handleClick={this.evaluateFn}>=</Button>
    <Button handleClick={this.subtractFn}>-</Button>
    </div>

    <div className="row">
    <ClearButton handleClear={this.clearInput}>clear</ClearButton>
    </div>
  </div>
  </div>
  );
}}

export default App;
