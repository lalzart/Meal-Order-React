import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
class StepTwo extends Component {
  state = {
    restaurant: null,
    valid: false
  }

  restaurantsChanged = (e) => {
    this.setState({restaurant: e.target.value});
  }

  nextStep = (e)=> {
    e.preventDefault();

     const data = {
       restaurant: this.state.restaurant
     }

    this.errCheck();
    this.props.saveValues(data);
  }

  errCheck = () =>{
    if(this.state.restaurant === null){
      this.setState({valid: true});
    } else {
      this.props.nextStep();
    }
  }


  render() {
    return (
      <Aux>
         <form>
          <label>Select a Restaurants</label>
          <select onChange={this.restaurantsChanged}>
            <option></option>
            {this.props.restSelect.map(row=>{
              return <option value={row}>{row}</option>
          })}
          </select>
        </form>
        {this.state.valid && <p>***incomplete***</p>}
        <button onClick={this.nextStep}>Next</button>
        <button onClick={this.props.previousStep}>Back</button>
      </Aux> 
    );
  }
}

export default StepTwo;

