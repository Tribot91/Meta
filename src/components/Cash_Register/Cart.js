import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";

class Cart extends Component {
  renderCart() {
    return this.props.cart.map(product => {
      return (
        <tr key={product.name}>
          <td>{product.name}</td>
          <td className="centerAndEvenly">
            <div
            // onClick={() => this.props.productAmount(product.amount, "dec")}
            >
              <FontAwesomeIcon className="fa" icon={"minus"} />
            </div>
            {product.amount}
            {/* {this.props.productAmount} */}
            <div
            // onClick={() => this.props.productAmount(product.amount, "inc")}
            >
              <FontAwesomeIcon className="fa" icon={"plus"} />
            </div>
          </td>
          <td className="center-align">{product.price.amount}</td>
          <td className="center-align">
            {product.amount * product.price.amount}
          </td>
          <td className="center-align">
            <FontAwesomeIcon className="fa" icon={"trash"} />
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div className="col l8 s12 h100">
        <span className="flow-text">
          <div className="border shopAndButtons">
            <table className="table striped">
              <thead>
                <tr>
                  <th
                    className="center-align"
                    style={{
                      width: "50%",
                      maxWidth: "70%",
                      wordBreak: "break-all"
                    }}
                  >
                    Ürün
                  </th>
                  <th className="center-align">Miktar</th>
                  <th className="center-align">Fiyat</th>
                  <th className="center-align">Toplam</th>
                  <th className="center-align">Sil</th>
                </tr>
              </thead>

              <tbody>{this.renderCart()}</tbody>
            </table>
            <div className="buttons-list">
              <a className="waves-effect waves-light btn-large shopBtns">
                TEMİZLE
              </a>
              <a
                className="waves-effect waves-light btn-large shopBtns"
                style={{ marginLeft: "30px" }}
              >
                İNDİRİM
              </a>
            </div>
          </div>
        </span>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     productAmount: state.shoppingProductAmount
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ productAmount: shoppingProductAmount }, dispatch);
// }

// mapStateToProps, mapDispatchToProps
export default connect()(Cart);
