import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productsAction";
import { Field } from "formik";

class ModalChooseProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [...this.props.products],
      selectedProducts: []
    };
  }

  render() {
    return (
      <div>
        <div id="modal-choose-product" className="modal">
          <div className="modal-content">
            <h4 className="center-align">Ürün Seç</h4>
            <div className="row">
              <div className="col s8" style={{ marginBottom: 0 }}>
                <div className="col s4" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="product">
                      Ürün
                    </label>
                    <Field id="product" name="product" type="text" />
                  </div>
                </div>
                <div className="col s4" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="code">
                      Kod
                    </label>
                    <Field id="code" name="code" type="text" />
                  </div>
                </div>
                <div className="col s4" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="barcode">
                      Barkod
                    </label>
                    <Field id="barcode" name="barcode" type="text" />
                  </div>
                </div>
              </div>
              <div className="col s4" style={{ marginBottom: 0 }}>
                <a className="waves-effect waves-light btn">Temizle</a>
              </div>
            </div>
            <div className="row">
              <div className="col s8" style={{ marginBottom: 0 }}>
                <table>
                  <thead>
                    <tr>
                      <th>İsim</th>
                      <th>Kod</th>
                      <th>Barkod</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map(product => {
                      return (
                        <tr key={product.name}>
                          <td>
                            <div>{product.name}</div>
                          </td>
                          <td>
                            <div>{product.code}</div>
                          </td>
                          <td>
                            <div>{product.barcode}</div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col s4" style={{ marginBottom: 0 }}>
                <table>
                  <thead>
                    <tr>
                      <th>Seçilen Ürünler</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      {this.state.selectedProducts.map(product => {
                        return (
                          <td
                            key={product.name}
                            style={{
                              display: "flex",
                              justifyContent: "space-between"
                            }}
                          >
                            <div>{product.name}</div>
                            <div>x</div>
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
              onClick={() => this.props.closeModal(this.state.selectedProducts)}
            >
              Seç
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.searchProducts
  };
};
export default connect(
  mapStateToProps,
  { fetchProducts }
)(ModalChooseProduct);
