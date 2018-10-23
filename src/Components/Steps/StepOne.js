import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
// import Validation from './Validation';

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
      <form>
        <label>Select a Meal Time</label>
        <select onChange={this.mealTimeChanged} >
          <option></option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
       </select>
       <label> Number of People</label>
       <input onChange={this.personsChanged} type="number" min="1" max="10"></input>
      </form>
      {this.state.valid && <p>***incomplete***</p>}
      <button onClick={this.nextStep}>Next</button>
    </Aux>
    );
  }
}

export default StepOne;