import React, { Component } from 'react';
import classes from './ClassCounter2.module.css';

type Props = { count: number; onChange: (count: number) => void };

type State = { count: number };

export default class ClassCounter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  increment() {
    //this.setState({ count: this.state.count + 1 });
    this.props.onChange(this.props.count + 1);
  }

  decrement() {
    //this.setState({ count: this.state.count - 1 });
    this.props.onChange(this.props.count - 1);
  }

  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    //this.setState({ count: parseInt(event.target.value, 10) });
    this.props.onChange(parseInt(event.target.value, 10));
  }
  render() {
    return (
      <div className={classes.counterContainer}>
        <button className={classes.btn} onClick={this.decrement}>
          {' '}
          -{' '}
        </button>
        <input
          className={classes.inputCount}
          type="text"
          value={this.props.count}
          onChange={this.onChangeHandler}
        />
        <button className={classes.btn} onClick={this.increment}>
          {' '}
          +{' '}
        </button>
      </div>
    );
  }
}
