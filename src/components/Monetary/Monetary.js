import _ from "lodash";
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";
import { connect } from "react-redux";
import { fetchTransactions } from "../../actions/monetaryAction";
import SearchBar from "./SearchBar";
import ModalTransactionDetails from "./ModalTransactionDetails";
// import SelectShop from "./SelectShop";

class Monetary extends Component {
  constructor(props) {
    super(props);

    // Bu state-i redux-in state-ine birlestirmek gerekiyor ilerde
    this.state = {
      selectedTransaction: {},
      userShops: [...this.props.userShops], //user-in gormesine izin verilen magazalarin listesi
      selectedShop: this.props.userShops[0],
      units: [],
      sort: null
    };
    this.modalInstances = [];
  }

  componentDidMount() {
    this.setState({ selectedTransaction: this.props.transactions[0] });

    // var shops = document.querySelectorAll(".shops-select");
    // M.FormSelect.init(shops, {});
    // var filteredshops = document.querySelectorAll(".filtered-shops-select");
    // M.FormSelect.init(filteredshops, {});
    // var categories = document.querySelectorAll(".categories-select");
    // M.FormSelect.init(categories, {});
    var transaction = document.querySelectorAll(".modal");
    this.modalInstances = M.Modal.init(transaction, {});

    this.transactionSearch();
  }

  renderTransactionList() {
    if (this.props.transactions) {
      return this.props.transactions.map(transaction => {
        return (
          <tr
            key={transaction.no}
            onDoubleClick={() => this.modalInstances[0].open()}
            className={
              transaction.no === this.state.selectedTransaction.no
                ? "activeSelection"
                : ""
            }
            onClick={() => {
              return this.setState({ selectedTransaction: transaction });
            }}
          >
            <td>{transaction.no}</td>
            <td>{transaction.type}</td>
            <td>{transaction.date}</td>
            <td>{transaction.to}</td>
            <td>{transaction.note}</td>
            <td>{transaction.price}</td>
            <td>
              {transaction.discount.amount} {transaction.discount.type}
            </td>
            {/* buraya diger filtreler eklenecek */}
          </tr>
        );
      });
    }
  }

  transactionSearch = searchTerm => {
    this.setState({ searchTerm });

    this.props.fetchTransactions(
      this.state.searchTerm
      // this.state.selectedShop,
      // this.state.sort
    );
  };

  render() {
    const transactionSearch = _.debounce(searchTerm => {
      this.transactionSearch(searchTerm);
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
              paddingLeft: 0
            }}
          >
            <div style={{ display: "flex" }}>
              <div>
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="#modal-new-transaction"
                >
                  +
                </a>
                <ModalTransactionDetails
                  modalType="modal-new-transaction"
                  units={this.state.units}
                  currencies={this.state.currencies}
                  closeModal={() => this.modalInstances[0].close()}
                />
              </div>
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal-transaction-update"
                style={{ marginLeft: "20px" }}
              >
                İŞLEM DETAYLARI
              </a>
              <ModalTransactionDetails
                modalType="modal-transaction-update"
                selectedTransaction={this.state.selectedTransaction}
                units={this.state.units}
                currencies={this.state.currencies}
                closeModal={() => this.modalInstances[1].close()}
              />
            </div>
          </div>
          <div className="col m3">
            <SearchBar onTransactionSearch={transactionSearch} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "5px" }}>
          <div className="col m9 s12 full-height" style={{ paddingLeft: 0 }}>
            <div className="border full-height" style={{ padding: "10px" }}>
              <table className="table striped">
                <thead>
                  <tr>
                    <th>İşlem</th>
                    <th>Tür</th>
                    <th>Tarih</th>
                    <th>Müşteri</th>
                    <th>Not</th>
                    <th>Fiyat</th>
                    <th>İndirim</th>
                  </tr>
                </thead>
                <tbody>{this.renderTransactionList()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transactions: state.monetary,
    userShops: state.userShops
  };
};

export default connect(
  mapStateToProps,
  { fetchTransactions }
)(Monetary);
