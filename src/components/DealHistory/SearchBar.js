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
    this.props.onDealSearch(term);
  }

  render() {
    return (
      <input
        id="deal_code"
        placeholder="İşlem numarası"
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
      />
    );
  }
}

export default SearchBar;
