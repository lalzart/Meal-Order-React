import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './steps.css';


class StepOne extends Component {
  state = {
    mealTime: null,
    persons: null,
    valid: false
  }

  personsChanged = (e) => {
    this.setState({persons: e.target.value});  
  }
  mealTimeChanged = (e) => {
    this.setState({mealTime: e.target.value});
  }

  nextStep = (e)=> {
    e.preventDefault()
     const values = {
       mealTime: this.state.mealTime,
       persons: this.state.persons
     }
    this.errCheck()
    this.props.saveValues(values);
  }
  errCheck = () =>{
    if(this.state.mealTime === null || this.state.persons === null){
      this.setState({valid: true});
    } else {
      this.props.nextStep();
    }
  }

  render() {
    return (
    <Aux>
      <div className="stepBox">
        <label>Select a Meal Time</label>
        <select onChange={this.mealTimeChanged} >
          <option></option>
          <option key={1} value="breakfast">Breakfast</option>
          <option key={2} value="lunch">Lunch</option>
          <option key={3} value="dinner">Dinner</option>
       </select>
       <label> Number of People</label>
       <input onChange={this.personsChanged} type="number" min="1" max="10"></input>
      </div>
      {this.state.valid && <p className="warn">***incomplete***</p>}
      <button className="nxtBtn" onClick={this.nextStep}>Next</button>
      
    </Aux>
    );
  }
}

export default StepOne;