import React, { Component } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize";
import ModalCustomerUpdate from "./ModalCustomerUpdate";
import SelectDealType from "./SelectDealType";
import Datepicker from "../datepicker";
import { fetchCustomers } from "../../actions/customersAction";

class Crm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: { name: "", surname: "", debt: 0 },
      selectedDeal: this.props.deals[0],
      selectedDealType: "",
      dealTypes: ["ALIŞ", "SATIŞ", "SİPARİŞ", "İADE"],
      startDate: 0,
      endDate: new Date(),
      searchField: ""
    };
  }

  componentDidMount() {
    this.setState({
      selectedDealType: this.state.dealTypes[0],
      selectedCustomer: this.props.customers[0]
    });

    var customer = document.querySelectorAll(".modal");
    this.modalInstances = M.Modal.init(customer, {});
    var dealTypeSelect = document.querySelectorAll(".deal-type-select");
    M.FormSelect.init(dealTypeSelect, {});

    this.props.onRequestCustomers();
  }

  renderCustomerList() {
    // const filteredCustomers = this.props.customers.filter(customers => {
    //   return customers.name
    //     .toLowerCase()
    //     .includes(this.props.searchField.toLowerCase());
    // });
    // console.log(this.props.customers);
    const filteredCustomers = this.props.customers;

    if (filteredCustomers) {
      return filteredCustomers.map(customer => {
        return (
          <tr
            key={customer.name}
            className={
              customer === this.state.selectedCustomer ? "activeSelection" : "" //.name hatasi gozukmesin diye obje karsilastir dedim :D bunu sonra duzelt
            }
            onClick={() => {
              return this.setState({ selectedCustomer: customer });
            }}
          >
            <td>{customer.name}</td>
            <td>{customer.surname}</td>
            {/* <td>{customer.debt}</td> */}
          </tr>
        );
      });
    }
  }

  renderDealList() {
    if (this.props.deals) {
      return this.props.deals.map(deal => {
        return (
          <tr
            key={deal.no}
            className={
              deal.no === this.state.selectedDeal.no ? "activeSelection" : ""
            }
            onClick={() => {
              return this.setState({ selectedDeal: deal });
            }}
          >
            <td>{deal.type}</td>
            <td>{deal.no}</td>
            <td>{deal.date}</td>
            <td>{deal.from}</td>
            <td>{deal.note}</td>
            <td>{deal.price}</td>
            <td>{deal.debt}</td>
            {/* buraya diger filtreler eklenecek */}
          </tr>
        );
      });
    }
  }

  render() {
    // console.log(this.state.customers);
    return (
      <div>
        <div className="row" style={{ margin: "0", display: "flex" }}>
          <div
            className="col m9"
            style={{
              paddingLeft: 0
            }}
          >
            <div className="row row-override-crm">
              <div className="col m3" style={{ marginLeft: 0 }}>
                <SelectDealType
                  dealTypes={this.state.dealTypes}
                  onSelectDealType={selectedDealType =>
                    this.setState({ selectedDealType })
                  }
                />
              </div>
              <div className="col m4">
                <div className="row row-override-crm">
                  <div className="col m2">Tarih:</div>
                  <div className="col m5">
                    <Datepicker
                      date={this.state.startDate}
                      text="Başlangıç"
                      onSelectDate={startDate => this.setState({ startDate })}
                    />
                  </div>
                  -
                  <div className="col m5" style={{ marginLeft: 0 }}>
                    <Datepicker
                      date={this.state.endDate}
                      text="Bitiş"
                      onSelectDate={endDate => this.setState({ endDate })}
                    />
                  </div>
                </div>
              </div>
              <div className="col m3">
                <div className="switch">
                  <label>
                    Hepsi
                    <input type="checkbox" />
                    <span className="lever" />
                    Sadece Borçlar
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col m3"
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <div className="row" style={{ marginBottom: 0 }}>
              <div className="col">
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="#modal-new-customer"
                >
                  +
                </a>
                <ModalCustomerUpdate
                  modalType="modal-new-customer"
                  closeModal={() => this.modalInstances[0].close()}
                />
              </div>
              <div className="col">
                <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="#modal-customer-update"
                >
                  MÜŞTERİ DETAYLARI
                </a>
                <ModalCustomerUpdate
                  modalType="modal-customer-update"
                  selectedCustomer={this.state.selectedCustomer}
                  closeModal={() => this.modalInstances[0].close()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "5px" }}>
          <div className="col m9 s12 full-height" style={{ paddingLeft: 0 }}>
            <div
              className="border full-height"
              style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "200px"
              }}
            >
              <table
                className="table striped"
                style={{
                  minHeight: "200px",
                  overflow: "hidden auto"
                }}
              >
                <thead>
                  <tr>
                    <th>Tür</th>
                    <th>No</th>
                    <th>Tarih</th>
                    <th>Kimden</th>
                    <th
                      style={{
                        width: "50%",
                        maxWidth: "70%",
                        wordBreak: "break-all"
                      }}
                    >
                      Not
                    </th>
                    <th>Fiyat</th>
                    <th>Borç</th>
                  </tr>
                </thead>
                <tbody>{this.renderDealList()}</tbody>
              </table>
              <div
                className="w100"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  fontWeight: "bold",
                  paddingRight: "2%"
                }}
              >
                <div>Toplam Borç: 91</div>
              </div>
            </div>
          </div>
          <div
            className="col m3 full-height"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div
              className="border"
              style={{
                minHeight: "200px", // 350px ? niye boyle yaptim hatirlamiyorum
                overflow: "hidden auto"
              }}
            >
              <div className="row">
                <div className="col s12">
                  <div id="customer" className="col s12">
                    <input
                      placeholder="Müşteri"
                      // emin degilim, copy paste yaptim bu kismi !!!!!!!!!
                      onChange={event => {
                        this.setState({ searchField: event.target.value });
                      }}
                    />
                    <table className="table striped">
                      <thead>
                        <tr>
                          <th>İsim</th>
                          <th>Soyad</th>
                          {/* <th>Borç</th> */}
                        </tr>
                      </thead>
                      <tbody>{this.renderCustomerList()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-override-crm" style={{ marginTop: "30px" }}>
              <div className="col m8">
                <input placeholder="Ödenecek Borç" />
              </div>
              <div className="col m4">
                <a className="waves-effect waves-light btn">Öde</a>
              </div>
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
    customers: state.customers.customerList,
    isPending: state.customers.isPending,
    error: state.customers.error

    // searchField: state.
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestCustomers: () => dispatch(fetchCustomers())
    // setCustomerSearch: (event) => dispatch(setCustomerSearch(event.target.value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Crm);
