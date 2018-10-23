import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import './steps.css';
class StepFour extends Component {
  

  render() {
    return (
    <Aux>
      <h3>Meal Time: {this.props.time}</h3>
      <h3>People: {this.props.persons}</h3>
      <h3>Restaurant: {this.props.restaurant}</h3>
      <div className="DishHouse">
      <h3>Dish: {this.props.dish.map((item)=>(
        <div>{item}</div>
      ))}</h3>
      <h3>Servings: {this.props.serving.map((item)=>
         (
          <div>{item}</div>
        )
        )}</h3>
      </div>
      <button onClick={this.props.nextStep}>Submit</button>
    </Aux>
    );
  }
}

export default StepFour;