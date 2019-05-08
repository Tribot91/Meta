import _ from "lodash";
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";
import { connect } from "react-redux";
import { fetchDeals } from "../../actions/dealsAction";
import SearchBar from "./SearchBar";
import ModalDealDetails from "./ModalDealDetails";
// import SelectShop from "./SelectShop";

class DealHistory extends Component {
  constructor(props) {
    super(props);

    // Bu state-i redux-in state-ine birlestirmek gerekiyor ilerde
    this.state = {
      selectedDeal: {},
      userShops: [...this.props.userShops], //user-in gormesine izin verilen magazalarin listesi
      selectedShop: this.props.userShops[0],
      units: [],
      sort: null
    };
    this.modalInstances = [];
  }

  componentDidMount() {
    this.setState({ selectedDeal: this.props.deals[0] });

    // var shops = document.querySelectorAll(".shops-select");
    // M.FormSelect.init(shops, {});
    // var filteredshops = document.querySelectorAll(".filtered-shops-select");
    // M.FormSelect.init(filteredshops, {});
    // var categories = document.querySelectorAll(".categories-select");
    // M.FormSelect.init(categories, {});
    var deal = document.querySelectorAll(".modal");
    this.modalInstances = M.Modal.init(deal, {});

    this.dealSearch();
  }

  renderDealList() {
    if (this.props.deals) {
      return this.props.deals.map(deal => {
        return (
          <tr
            key={deal.no}
            onDoubleClick={() => this.modalInstances[0].open()}
            className={
              deal.no === this.state.selectedDeal.no ? "activeSelection" : ""
            }
            onClick={() => {
              return this.setState({ selectedDeal: deal });
            }}
          >
            <td>{deal.no}</td>
            <td>{deal.type}</td>
            <td>{deal.date}</td>
            <td>{deal.to}</td>
            <td>{deal.note}</td>
            <td>{deal.price}</td>
            <td>
              {deal.discount.amount} {deal.discount.type}
            </td>
            {/* buraya diger filtreler eklenecek */}
          </tr>
        );
      });
    }
  }

  dealSearch = searchTerm => {
    this.setState({ searchTerm });

    this.props.fetchDeals(
      this.state.searchTerm
      // this.state.selectedShop,
      // this.state.sort
    );
  };

  render() {
    const dealSearch = _.debounce(searchTerm => {
      this.dealSearch(searchTerm);
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
            <div>
              <a
                className="waves-effect waves-light btn modal-trigger"
                href="#modal-deal-update"
              >
                İŞLEM DETAYLARI
              </a>
              <ModalDealDetails
                selectedDeal={this.state.selectedDeal}
                units={this.state.units}
                // currencies={this.state.currencies}
                closeModal={() => this.modalInstances[0].close()}
              />
            </div>
          </div>
          <div className="col m3">
            <SearchBar onDealSearch={dealSearch} />
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
                <tbody>{this.renderDealList()}</tbody>
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
    deals: state.deals,
    userShops: state.userShops
  };
};

export default connect(
  mapStateToProps,
  { fetchDeals }
)(DealHistory);
