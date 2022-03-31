import React, { Component } from 'react'
import classes from './MyButton.module.css'

type Props = {
  name: string,
  img: string,
  disabled: boolean
}

type State = {}

export default class MyButton extends Component<Props, State> {
  state = {}

  onClickHandler(){
    console.log('clickButton');
  }

  render() {
    return (
      <button disabled={this.props.disabled} className={classes.btn} onClick={this.onClickHandler}>
        <div
          className={classes.btnImage}
          style={{ backgroundImage: `url(${this.props.img})` }}
        ></div>
        <div className={classes.btnName}>{this.props.name}</div>
      </button>
    );
  }
}