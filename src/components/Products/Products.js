import _ from "lodash";
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";
import { connect } from "react-redux";
import { ALL_CATEGORIES } from "../types";
import { fetchProducts } from "../../actions/productsAction";
import { fetchUserShops } from "../../actions/userAction";
import SearchBar from "./SearchBar";
import SelectShop from "./SelectShop";
import ModalProductDetails from "./ModalProductDetails";
import ModalProductTransfer from "./ModalProductTransfer";

class Products extends Component {
  constructor(props) {
    super(props);

    // Bu state-i redux-in state-ine birlestirmek gerekiyor ilerde
    this.state = {
      searchTerm: "",
      cursor: 0,
      userShops: [...this.props.userShops], //user-in gormesine izin verilen magazalarin listesi
      categories: [...this.props.categories],
      currencies: [...this.props.currencies],
      selectedProduct: this.props.products[0],
      selectedShop: this.props.userShops[0],
      selectedCategory: "",
      selectedAvailability: "DEPO",
      units: [],
      sort: null
    };
    this.modalInstances = [];
    // this.productSearch = this.productSearch.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectedCategory: this.state.categories[0]
    });
    // this.props.fetchUserShops();

    var shops = document.querySelectorAll(".shops-select");
    M.FormSelect.init(shops, {});
    var filteredshops = document.querySelectorAll(".filtered-shops-select");
    M.FormSelect.init(filteredshops, {});
    var categories = document.querySelectorAll(".categories-select");
    M.FormSelect.init(categories, {});
    var product = document.querySelectorAll(".modal");
    this.modalInstances = M.Modal.init(product, {
      onCloseEnd: () =>
        document.getElementsByClassName("activeSelection")[0].focus()
    });

    this.productSearch(); //normalde constructor-da cagrilmasi gerekiyordu sanirim ama hata veriyor, calisirsa burda da kalabilir
    document.getElementsByClassName("activeSelection")[0].focus();
  }

  componentDidUpdate(prevProps) {
    if (this.state.selectedShop !== prevProps.selectedShop) {
      var product = document.querySelectorAll("#modal-product-transfer");
      M.Modal.init(product, {});
    }
  }

  clamp = num => {
    return Math.min(
      Math.max(this.state.cursor + num, 0),
      this.props.products.length - 1
    );
  };

  keyActions(event) {
    if (event.key === "Enter") {
      // () =>
      this.modalInstances[1].open();
    } else if (event.key === "ArrowUp") {
      this.setState({ cursor: this.clamp(-1) });
    } else if (event.key === "ArrowDown") {
      this.setState({ cursor: this.clamp(1) });
    }
  }

  renderProductList() {
    if (this.props.products) {
      return this.props.products.map((product, index) => {
        return (
          <tr
            key={index}
            onDoubleClick={() => this.modalInstances[1].open()}
            className={index === this.state.cursor ? "activeSelection" : ""}
            tabIndex="0"
            onKeyDown={event => this.keyActions(event)}
            onClick={() => {
              return this.setState({ selectedProduct: product, cursor: index });
            }}
          >
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>
              {product.amount} {product.unit}
            </td>
            <td>
              {product.purchasePrice.amount} {product.purchasePrice.type}
            </td>
            <td>
              {product.discount.amount} {product.discount.type}
            </td>
            {/* buraya diger filtreler eklenecek */}
          </tr>
        );
      });
    }
  }

  productSearch = searchTerm => {
    this.setState({ searchTerm });

    this.props.fetchProducts(
      this.state.searchTerm,
      this.state.selectedShop,
      this.state.selectedCategory,
      this.state.selectedAvailability,
      this.state.sort
    );
  };

  render() {
    const productSearch = _.debounce(searchTerm => {
      this.productSearch(searchTerm);
    }, 500);
    return (
      <div>
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            margin: 0
          }}
        >
          <div
            className="col m9"
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingLeft: 0
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="#modal-new-product"
                >
                  +
                </a>
                <ModalProductDetails
                  modalType="modal-new-product"
                  categories={this.state.categories}
                  units={this.state.units}
                  currencies={this.state.currencies}
                  closeModal={() => this.modalInstances[0].close()}
                />
              </div>
              <div>
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  style={{ marginLeft: "20px" }}
                  href="#modal-product-update"
                >
                  ÜRÜN DETAYLARI
                </a>
                <ModalProductDetails
                  modalType="modal-product-update"
                  selectedProduct={this.state.selectedProduct}
                  categories={this.state.categories}
                  units={this.state.units}
                  currencies={this.state.currencies}
                  closeModal={() => this.modalInstances[0].close()}
                />
              </div>
              <div>
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  style={{ marginLeft: "20px" }}
                  href="#modal-product-transfer"
                >
                  TRANSFER ET
                </a>
                <ModalProductTransfer
                  selectedProduct={this.state.selectedProduct}
                  selectedShop={this.state.selectedShop}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <div className="switch">
                <label>
                  Hepsi
                  <input type="checkbox" />
                  <span className="lever" />
                  Depo
                </label>
              </div>
            </div>
          </div>
          <div className="col m3">
            <SearchBar onProductSearch={productSearch} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "5px" }}>
          <div className="col m9 s12 full-height" style={{ paddingLeft: 0 }}>
            <div className="border full-height" style={{ padding: "10px" }}>
              <table className="table striped">
                <thead>
                  <tr>
                    <th>Kod</th>
                    <th
                      style={{
                        width: "50%",
                        maxWidth: "60%",
                        wordBreak: "break-all"
                      }}
                    >
                      İsim
                    </th>
                    <th>Miktar</th>
                    <th>Fiyat</th>
                    <th>İndirim</th>
                  </tr>
                </thead>
                <tbody>{this.renderProductList()}</tbody>
              </table>
            </div>
          </div>

          <div className="col hide-on-small-only m3">
            <div className="input-field col s12 w100">
              <SelectShop
                onSelectShop={selectedShop => this.setState({ selectedShop })}
                userShops={[...this.state.userShops]}
              />
              <label>Bayi:</label>
            </div>

            <div className="input-field col s12">
              <select
                className="categories-select"
                onChange={e => {
                  this.setState({ selectedCategory: e.target.value });
                }}
              >
                {[ALL_CATEGORIES, ...this.state.categories].map(category => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
              <label>Kategoriler:</label>
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
    userShops: state.userShops,
    categories: state.categories,
    currencies: state.currencies
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts, fetchUserShops }
)(Products);
