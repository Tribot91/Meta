import React, { Component } from "react";
import Cart from "./Cart";
import CashRegisterLists from "./Cash_Register_Lists";
import M from "materialize-css/dist/js/materialize";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CashRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      selectedCustomer: null
    };
  }

  componentDidMount() {
    var elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems, {});
  }

  render() {
    return (
      <div className="row" style={{ margin: "10px 0 0", height: "98%" }}>
        <Cart cart={this.state.cart} />
        {/*  addCart={this.addCart} */}
        <CashRegisterLists />
        {/* <div className="fixed-action-btn">
          <a className="btn-floating btn-large waves-effect waves-light red">
            <FontAwesomeIcon
              className="fa"
              icon="shopping-cart"
              style={{
                fontSize: "30px"
              }}
            />
          </a>
        </div> */}
      </div>
    );
  }
}

export default CashRegister;
