import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './steps.css';

class StepThree extends Component {
  state = {
    dish: [],
    serving: [],
    valid: false,
    additionalDish: []
  }

  servingChanged = (e) => {
    this.setState({ serving: [...this.state.serving, e.target.value]}); 
  }
  dishChanged = (e) => {
    this.setState({ dish: [...this.state.dish, e.target.value]});
  }

  nextStep = (e)=> {
    e.preventDefault()
     const meal = {
       dish: this.state.dish,
       serving: this.state.serving
     }
     this.errCheck();
     this.props.saveValues(meal);
  }
  errCheck = () =>{
    let stringToNum = this.state.serving.map(Number);
    const getVal = stringToNum.reduce((a, b) => a + b, 0);
    if(this.props.persons > getVal){
      this.setState({valid: true});
    } else if (this.state.restaurant === null) {
      this.setState({valid: true});
    } else{
      this.props.nextStep();
    }
  }

  addAdditionalDish() { 
  const options = [];
  for (let i=1; i <11; i += 1) { options.push(i); }
   let array = this.state.additionalDish;
    array.push(
    <form>
      <label>Select a Dish</label>
      <select onChange={this.dishChanged} >
        <option>   </option>
        {this.props.dishSelect.map(restObj=>{return <option value={restObj.name}>
        {restObj.name}</option>})}
      </select>
      <label> Number of Servings</label>
      <select onChange={this.servingChanged}>
        {options.map((i) => {return (<option key={i} value={i}>{i}</option>)})}
      </select>
    </form>
    );
    this.setState({additionalDish: array});
  }

  render() {
    const options = [];
    for (let i=1; i <11; i += 1) { options.push(i);}
    return (
    <Aux>
      <form>
        <label>Select a Dish</label>
        <select onChange={this.dishChanged} >
          <option></option>
          {this.props.dishSelect.map(restObj=>{
            return <option key={restObj.id} value={restObj.name}>
          {restObj.name}</option>})}
       </select>
       <label> Number of Servings</label>
       <select onChange={this.servingChanged}>
       <option> </option>
        {options.map((i) => {return (<option key={i} value={i}>{i}</option>)})}
       </select>
      </form>
      <div>
        { this.state.additionalDish.map(input => { return input}) }
        <button className="add"  onClick={this.addAdditionalDish.bind(this)}>ADD DISH</button>
      </div>
      {this.state.valid && <p>The number of servings must be greater than number of people eating</p>}
      <button onClick={this.props.previousStep}>Back</button>
      <button onClick={this.nextStep} className="nxtBtn" >Next</button>
    </Aux>
    );
  }
}

export default StepThree;