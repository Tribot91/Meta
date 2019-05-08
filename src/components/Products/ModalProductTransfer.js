import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize";
import { fetchShops } from "../../actions/shopsAction";

class ModalProductTransfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Bunlar local state-de kalicak
      targetShop: "",
      transferAmount: 0,
      shops: [...this.props.shops]
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedShop !== prevProps.selectedShop) {
      var filteredshops = document.querySelectorAll(".filtered-shops-select");
      M.FormSelect.init(filteredshops, {});
    }

    // this.props.fetchShops();
  }

  onInputChange(transferAmount) {
    this.setState({ transferAmount });
  }

  render() {
    // console.log("rendered");
    return (
      <div>
        <div id="modal-product-transfer" className="modal">
          <div className="modal-content">
            <h4 className="center-align">Transfer Et</h4>
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <table className="center-align">
                    <thead>
                      <tr>
                        <th
                          style={{
                            width: "30%",
                            maxWidth: "40%",
                            wordBreak: "break-all"
                          }}
                        >
                          Ürün
                        </th>
                        <th className="center-align">
                          Toplam / Gönderilecek Miktarı Seç
                        </th>
                        <th>Bayi Seç</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>{this.props.selectedProduct.name}</td>
                        <td className="center-align">
                          {this.props.selectedProduct.amount} /
                          <input
                            value={this.state.transferAmount}
                            id="amount"
                            type="number"
                            className="validate center-align chooseAmountOnModal"
                            onChange={event => {
                              this.onInputChange(event.target.value);
                            }}
                            min={0}
                            max={this.props.selectedProduct.amount}
                          />
                        </td>
                        <td>
                          <select
                            className="filtered-shops-select"
                            onChange={e => {
                              this.setState({
                                targetShop: e.target.value
                              });
                            }}
                          >
                            {this.state.shops.map(shop => {
                              return (
                                <option
                                  key={shop}
                                  value={shop}
                                  // Make this somehow work in future if you can ( Probably with events )
                                  // className={
                                  //   shop === this.props.selectedShop
                                  //     ? "hide"
                                  //     : ""
                                  // }
                                  disabled={shop === this.props.selectedShop}
                                >
                                  {shop}
                                </option>
                              );
                            })}
                          </select>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Taşı
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shops: state.shops
  };
};
export default connect(
  mapStateToProps,
  { fetchShops }
)(ModalProductTransfer);
