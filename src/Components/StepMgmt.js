import React, { Component } from 'react';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';
import Progress from './Steps/progress';
import Aux from '../hoc/Aux';
import data from './Data/data';
import Head from './Header';
import './Steps/steps.css';


class StepMgmt extends Component {

  state = {
    step: 1,
    mealTime: null,
    restaurant: null,
    persons: null,
    meal: {
      dish: [], 
      serving: []
    }
    
  }

  
  storeValues = (values) => {
    Object.assign(this.state, values);
  }

  moveNextStep = () => {
    this.setState({step: this.state.step +1});
  }

  movePreviousStep = () => {
    this.setState({step: this.state.step -1});
  }




  createRestaurantList=()=>{
    const uncleanedList = data.filter(wholeObj =>{
      return wholeObj.availableMeals.includes(this.state.mealTime)
    });
    const duplicateList = uncleanedList.map(wholeObj=> {return wholeObj.restaurant});
    const unduplicatedList = Array.from(new Set(duplicateList));
    return unduplicatedList;
  }

  filterDish=()=>{
    const dish = data.filter(wholeObj=>{   
      return wholeObj.restaurant === this.state.restaurant  
    })  
    return dish;
  }



  showStep = () => {
    switch(this.state.step) {
      case 1:
        return (
          <Aux>
          <StepOne 
            nextStep={this.moveNextStep}
            saveValues={this.storeValues}/>
          </Aux>
        );
      case 2:
      const rest = this.createRestaurantList();
        return (
          <StepTwo 
            saveValues={this.storeValues}
            nextStep={this.moveNextStep}
            previousStep={this.movePreviousStep}
            restSelect={rest}/>
        );
      case 3:
      const dish = this.filterDish();
        return (
          <StepThree 
            saveValues={this.storeValues}
            nextStep={this.moveNextStep}
            persons={this.state.persons}
            previousStep={this.movePreviousStep}
            dishSelect={dish}/>
        );
      case 4:
        return (
          <StepFour 
            time={this.state.mealTime}
            persons={this.state.persons}
            restaurant={this.state.restaurant}
            dish={this.state.dish}
            serving={this.state.serving}
            nextStep={this.moveNextStep}/>
        );
      default:
        return (
          <h1>Thank You</h1>
        );
    }
  }
  
  render() {

    return(
      <Aux>
        <Head />  
        <Progress stepNum={this.state.step}/>
        {this.showStep()}
      </Aux>
    )
  }
  
}

export default StepMgmt;