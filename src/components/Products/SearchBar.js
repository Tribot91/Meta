import React, { Component } from "react";
// import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onProductSearch(term);
  }

  render() {
    return (
      <input
        id="product_code"
        placeholder="Ürün ve ya kodu"
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
      />
    );
  }
}

export default SearchBar;
