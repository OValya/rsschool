import React, { Component } from 'react';
import ClassCounter from '../ClassCounter/ClassCounter';
import classes from './ClassCard.module.css'


type Props = {}

type State = {}

export default class ClassCards extends Component<Props, State> {
  constructor(props:Props){
    super(props)
    this.state = {}
  }
  

  render() {
    return (
      <div className={classes.card}>
        <img src="" alt="" />
        <h3>Name</h3>
        <p>In stock</p>
        <div className={classes.priceContainer}>
          <p>Cost</p>
          <p>1000 rub</p>
        </div>
        <ClassCounter/>
        <button>Buy</button>
        <div className={classes.totalPriceContainer}>
          <p>Total price:</p>
          <p> PRICE </p>
        </div>

      </div>
    )
  }
}

