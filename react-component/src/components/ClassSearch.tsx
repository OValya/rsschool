import React from "react";

export default class ClassSearch extends React.Component<{}, {value:string}> {
  constructor(props: string) {
    super(props);
    const search = localStorage.getItem('search');
    const searchString = search ? search : '';
    this.state = { value: searchString };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {
    localStorage.setItem('search', this.state.value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <div>
        <input
          className="inputSearch"
          type="text"
          placeholder="Enter search"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <button className="btnSearch">Search</button>
      </div>
    );
  }
}