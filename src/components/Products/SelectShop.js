import React, { Component } from "react";

class SelectShop extends Component {
  render() {
    return (
      <select
        className="shops-select"
        onChange={e => {
          this.props.onSelectShop(e.target.value);
        }}
      >
        {this.props.userShops.map(shop => (
          <option key={shop} value={shop}>
            {shop.toUpperCase()}
          </option>
        ))}
      </select>
    );
  }
}

export default SelectShop;
