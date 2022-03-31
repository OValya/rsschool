import React, { Component } from 'react'
import classes from './ClassCounter.module.css'

type Props = {}

type State = {count: number}

export default class ClassCounter extends Component<Props, State> {
  constructor(props:Props){
    super(props);
    this.state = {count: 0}
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.setState({count: this.state.count + 1})
  }

  decrement(){
    this.setState({count: this.state.count - 1})
  }
 
  render() {
    return (
      <div className={classes.counterContainer}>
        <button className={classes.btn} onClick={this.decrement}> - </button>
        <input type="text" style={{ width: '50px' }} value={this.state.count} />
        <button className={classes.btn} onClick={this.increment}> + </button>
      </div>
    );
  }
}