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
         <div className="stepBox">
          <label>Select a Restaurant</label>
          <select onChange={this.restaurantsChanged}>
            <option></option>
            {this.props.restSelect.map(row=>{
              return <option key={row} value={row}>{row}</option>
          })}
          </select>
        </div>
        {this.state.valid && <p className="warn">***incomplete***</p>}
        <button onClick={this.props.previousStep}>Back</button>
        <button className="nxtBtn" onClick={this.nextStep}>Next</button>
      </Aux> 
    );
  }
}

export default StepTwo;

