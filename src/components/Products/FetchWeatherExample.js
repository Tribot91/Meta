import React, { Component } from "react";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
// import {bindActionCreators} from 'redux';
// import {fetchWeather} from '../actions/index';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = { products: "" };

    // this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  renderProductList() {
    if (this.props.products) {
      return this.props.products.map(product => {
        return (
          <tr key={product.name}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.category}</td>
            <td>{product.discount.amount}</td>
            <td>{product.buyPrice.amount}</td>
          </tr>
        );
      });
    }
  }

  // onFormSubmit(event) {
  //   event.preventDefault();

  // this.props.fetchWeather(this.state.term);
  // this.setState({ term: '' });
  // }

  render() {
    return (
      <div className="row">
        <div className="col s9">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <form
              onSubmit={this.onFormSubmit}
              style={{ display: "flex", width: "30%" }}
            >
              <input
                placeholder="Ürün kodu"
                value={this.state.term}
                onChange={this.onInputChange}
                id="product_code"
              />
              <button className="btn waves-effect" type="submit" name="action">
                Ara
              </button>
            </form> */}
          </div>
          <div className="border" style={{ padding: "10px" }}>
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
                  <th>Miktar</th>
                  <th>Kategori</th>
                  <th>İndirim</th>
                  <th>Fiyat</th>
                </tr>
              </thead>
              <tbody>{this.renderProductList()}</tbody>
            </table>
          </div>
        </div>

        <div
          className="col s3"
          style={{ padding: "0 25px", textAlign: "center" }}
        >
          {/* Dropdown Trigger */}
          <a class="dropdown-trigger btn" href="#" data-target="dropdown1">
            Drop Me!
          </a>
          {/* Dropdown Structure */}
          <ul id="dropdown1" class="dropdown-content">
            <li>
              <a href="#!">Bayi 1</a>
            </li>
            <li>
              <a href="#!">Bayi 2</a>
            </li>
          </ul>
          <button
            className="btn waves-effect w100"
            style={{ margin: "0 0 30px" }}
          >
            + ÜRÜN EKLE
          </button>
          Filtreler:
          <SearchBar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(mapStateToProps)(Products);

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchWeather }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Products);
