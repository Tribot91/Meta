import React, { Component } from "react";
import { connect } from "react-redux";

class CashRegisterList extends Component {
  renderProductList() {
    if (this.props.products) {
      return this.props.products.map(product => {
        return (
          // onClick={this.props.addCart(product)}
          <tr key={product.name}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.price.amount}</td>
          </tr>
        );
      });
    }
  }
  renderCustomerList() {
    if (this.props.customers) {
      return this.props.customers.map(customer => {
        return (
          <tr key={customer.name}>
            <td>{customer.name}</td>
            <td>{customer.debt}</td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div
        className="col l4 s12"
        style={{
          marginBottom: "10px",
          height: "98%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <span className="flow-text">
          <div className="border" style={{ minHeight: "350px" }}>
            <div className="row" style={{ margin: "0" }}>
              <div className="col s12">
                <ul className="tabs tabs-fixed-width">
                  <li className="tab col s3">
                    <a className="active" href="#product">
                      ÜRÜN
                    </a>
                  </li>
                  <li className="tab col s3">
                    <a href="#customer">MÜŞTERİ</a>
                  </li>
                  <li className="tab col s3">
                    <a href="#return">İADE</a>
                  </li>
                </ul>
              </div>
              <div id="product" className="col s12">
                <input placeholder="Ürün kodu" />
                <table className="table striped">
                  <thead>
                    <tr>
                      <th>Kod</th>
                      <th
                        style={{
                          width: "50%",
                          maxWidth: "70%",
                          wordBreak: "break-all"
                        }}
                      >
                        İsim
                      </th>
                      <th>Fiyat</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderProductList()}</tbody>
                </table>
              </div>
              <div id="customer" className="col s12">
                <table className="table striped">
                  <thead>
                    <tr>
                      <th>İsim</th>
                      <th>Borç</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCustomerList()}</tbody>
                </table>
              </div>
              <div id="return" className="col s12">
                İade
              </div>
            </div>
          </div>
        </span>
        <div
          className="border"
          style={{ minHeight: "100px", marginTop: "20px", padding: "10px" }}
        >
          <div className="row">
            <div
              className="col w100"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <input placeholder="Ödenen" />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                Borca Eklenecek: 0 AZN
              </div>
            </div>
          </div>
          <div className="row mb0">
            <div className="col w100">
              <a className="waves-effect waves-light btn-large w100">
                ÖDEME YAP
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    customers: state.customers.customerList
  };
};

export default connect(mapStateToProps)(CashRegisterList);
