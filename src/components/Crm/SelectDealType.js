import React, { Component } from "react";

class SelectDealType extends Component {
  render() {
    return (
      <select
        className="deal-type-select"
        onChange={e => {
          this.props.onSelectDealType(e.target.value);
        }}
      >
        {this.props.dealTypes.map(dealType => (
          <option key={dealType} value={dealType}>
            {dealType.toUpperCase()}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectDealType;
