import { count } from 'console';
import React, { Component } from 'react';
import ClassCounter from '../ClassCounter/ClassCounter2';
import MyButton from '../UI_components/MyButton/MyButton';
import classes from './ClassCard.module.css'


type Props = {
  name: string,
  cost: number,
  stock: boolean,
  img: string
}

type State = {count: number}

export default class ClassCards extends Component<Props, State> {
  constructor(props:Props){
    super(props)
    this.state = {
      count: 0
    }
    //this.setState = this.setState.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this)
  }

  handleCountChange(count:number){
    this.setState({count: count});
  }
  
  render() {
    return (
      <div className={classes.card}>
        <img src={this.props.img} alt="" />
        <h3>{this.props.name}</h3>
        <p style={{color: (this.props.stock)?'green':'red'}}>{(this.props.stock)?'In stock':'Out of stock'}</p>
        <div className={classes.priceContainer}>
          <p>Cost:</p>
          <p>{this.props.cost.toString()} rub</p>
        </div>
        <ClassCounter 
          count={this.state.count}
          onChange={this.handleCountChange}/>
        <MyButton disabled={!this.props.stock} name='Add' img='/svg/add-to-cart.svg'/>
        <div className={classes.totalPriceContainer}>
          <p>Total price:</p>
          <p> {(this.state.count * this.props.cost).toString()} </p>
        </div>

      </div>
    )
  }
}

