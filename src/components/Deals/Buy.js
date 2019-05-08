import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import M from "materialize-css/dist/js/materialize";
import ModalChooseProduct from "./ModalChooseProduct";
import { connect } from "react-redux";
import * as Yup from "yup";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BuyDetails from "./BuyDetails";

class Buy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: "",
      dealNo: "",
      currencies: [...this.props.currencies],
      excelMode: "true",
      cursor: 0,
      fieldCount: this.props.values.fieldCount,
      dealCount: this.props.values.dealsLen,
      products: []
    };
    this.modalInstances = [];
  }
  componentDidUpdate() {
    if (false) {
      // action gonder current values-u save etmek icin yeni row eklenirse
      this.props.values.product = "";
      this.props.values.code = "";
      this.props.values.barcode = "";
      this.props.values.amount = "";
      this.props.values.buyPrice = "";
      this.props.values.cost = "";
      this.props.values.sum = "";
      this.props.values.profitPercentage = "";
      this.props.values.price = "";
    }
  }

  componentDidMount() {
    let buyAutocomplete = document.querySelectorAll(".autocomplete");

    M.Autocomplete.init(buyAutocomplete, {
      data: {
        Apple: null,
        Microsoft: null,
        Google: "https://placehold.it/250x250"
      }
    });

    let selectMoney = document.querySelectorAll("select");
    M.FormSelect.init(selectMoney, {});
    var customer = document.querySelectorAll(".modal");
    this.modalInstances = M.Modal.init(customer, {});
    document.getElementsByClassName("td-excel-mode")[0].childNodes[0].focus();
  }

  renderRow(deal, dealIndex) {
    return Object.keys(deal).map((dealField, fieldIndex) => {
      let tableItemIndex = dealIndex * this.state.fieldCount + fieldIndex;
      return (
        <td
          className={
            this.state.excelMode && this.state.cursor === tableItemIndex
              ? "td-excel-mode dealsRow"
              : "dealsRow"
          }
          onClick={event => {
            this.tdClick(event, tableItemIndex);
          }}
          key={fieldIndex}
        >
          <Field
            className={
              "excel-input" + (this.state.excelMode ? " excel-mode" : "")
            }
            autoComplete="off"
            name={tableItemIndex}
            id={tableItemIndex}
            type={"text"} //{dealField === "product" ? "text" : "number"}
            onKeyDown={event => this.excelMode(event)}
            readOnly={this.state.excelMode}
            style={{ border: "none", textAlign: "center", margin: 0 }}
          />
        </td>
      );
    });
  }

  // Keeps cursor between table's ranges
  clamp = num => {
    return Math.min(
      Math.max(this.state.cursor + num, 0),
      this.state.dealCount * this.state.fieldCount - 1
    );
  };

  excelMode(event) {
    if (event.key === "Enter" && "Escape") {
      this.setState({
        excelMode: !this.state.excelMode
      });
    } else if (
      event.type === "keydown" &&
      (event.key !== "Escape" &&
        event.key !== "Tab" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowUp" &&
        event.key !== "ArrowRight" &&
        event.key !== "ArrowDown")
    ) {
      this.setState({
        excelMode: false
      });
    }
    if (event.key === "Tab") {
      this.setState({
        excelMode: true,
        cursor: this.clamp(1)
      });
    }
    if (event.key === "ArrowLeft" && this.state.excelMode) {
      this.setState({
        cursor: this.clamp(-1)
      });
      document.getElementById(String(this.clamp(-1))).focus();
    }
    if (event.key === "ArrowUp" && this.state.excelMode) {
      this.setState({
        cursor: this.clamp(-this.state.fieldCount)
      });
      document
        .getElementById(String(this.clamp(-this.state.fieldCount)))
        .focus();
    }
    if (event.key === "ArrowRight" && this.state.excelMode) {
      this.setState({
        cursor: this.clamp(1)
      });
      document.getElementById(String(this.clamp(1))).focus();
    }
    if (event.key === "ArrowDown" && this.state.excelMode) {
      this.setState({
        cursor: this.clamp(this.state.fieldCount)
      });
      document
        .getElementById(String(this.clamp(this.state.fieldCount)))
        .focus();
    }
  }

  tdClick(event, index) {
    this.setState({
      excelMode: "true",
      cursor: index
    });
  }

  render() {
    return (
      <div>
        <div className="row" style={{ margin: "10px 0 0" }}>
          <div className="col" style={{ paddingLeft: 0 }}>
            <a
              className="waves-effect waves-light btn modal-trigger"
              href="#modal-choose-product"
            >
              ÜRÜN SEÇ
            </a>
            <a
              className="waves-effect waves-light btn"
              style={{
                marginLeft: "20px",
                background: "#F44336"
              }}
            >
              Kaldır
            </a>
            <ModalChooseProduct
              modalType="modal-choose-product"
              closeModal={selectedProducts =>
                this.setState({
                  products: [...this.state.products, ...selectedProducts]
                })
              }
            />
          </div>
        </div>
        <div className="row">
          <Form id="buy-deal">
            <div className="col s9" style={{ paddingLeft: 0 }}>
              <table>
                <thead>
                  <tr>
                    <th className="center-align">Ürün</th>
                    <th className="center-align">Kod</th>
                    <th className="center-align">Barkod</th>
                    <th className="center-align">Miktar</th>
                    <th className="center-align">Alış Fiyatı</th>
                    <th className="center-align">Maliyyet</th>
                    <th className="center-align">Tutar</th>
                    <th className="center-align">Kar</th>
                    <th className="center-align">Satış Fiyatı</th>
                  </tr>
                </thead>

                <tbody>
                  {this.props.values.deals.map((deal, index) => {
                    return <tr key={index}>{this.renderRow(deal, index)}</tr>;
                  })}
                  <tr>
                    {this.renderRow(
                      this.props.values.emptyDeal,
                      this.props.values.deals.length
                    )}
                  </tr>
                </tbody>
              </table>
            </div>

            <BuyDetails currencies={this.state.currencies} />
          </Form>
        </div>
      </div>
    );
  }
}

let FormikBuy = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({
    customer,
    dealNo,
    currency,
    rate,
    deals,
    spendings,
    transportation,
    discount,
    paid
  }) => {
    let fieldCount = Object.keys(deals[0]).length;
    let emptyDeal = {
      product: "",
      code: "",
      barcode: "",
      amount: "",
      buyPrice: "",
      cost: "",
      sum: "",
      profitPercentage: "",
      price: ""
    };

    return {
      customer: customer || "",
      dealNo: dealNo || "",
      currency: currency || "",
      rate: rate || "",
      fieldCount,
      emptyDeal,
      // Kullanici listeden ve ya manüel yazicak urunlerin ismini ve olusturucak
      deals,
      dealsLen: deals.length + 1, // +1 for creating empty deal
      ...deals.reduce(
        (accum, deal, index) =>
          Object.assign(accum, {
            [`${fieldCount * index + 0}`]: deal.product,
            [`${fieldCount * index + 1}`]: deal.code,
            [`${fieldCount * index + 2}`]: deal.barcode,
            [`${fieldCount * index + 3}`]: deal.amount,
            [`${fieldCount * index + 4}`]: deal.buyPrice,
            [`${fieldCount * index + 5}`]: deal.cost,
            [`${fieldCount * index + 6}`]: deal.sum,
            [`${fieldCount * index + 7}`]: deal.profitPercentage,
            [`${fieldCount * index + 8}`]: deal.price
          }),
        {}
      ),
      [`${fieldCount * deals.length + 0}`]: emptyDeal.product,
      [`${fieldCount * deals.length + 1}`]: emptyDeal.code,
      [`${fieldCount * deals.length + 2}`]: emptyDeal.barcode,
      [`${fieldCount * deals.length + 3}`]: emptyDeal.amount,
      [`${fieldCount * deals.length + 4}`]: emptyDeal.buyPrice,
      [`${fieldCount * deals.length + 5}`]: emptyDeal.cost,
      [`${fieldCount * deals.length + 6}`]: emptyDeal.sum,
      [`${fieldCount * deals.length + 7}`]: emptyDeal.profitPercentage,
      [`${fieldCount * deals.length + 8}`]: emptyDeal.price
    };
  },
  validationSchema: Yup.object().shape({
    rate: Yup.number().min(0, "Miktar en az 0 olabilir")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // setTimeout(() => {
    //   if (values.name === "takenName") {
    //     setErrors({ name: "That name is already taken" });
    //   } else {
    //     resetForm();
    //     values.closeModal();
    //   }
    //   setSubmitting(false);
    // }, 2000);
  }
})(Buy);

const mapStateToProps = state => {
  return {
    currencies: state.currencies,
    deals: state.dealCrud
  };
};
export default connect(mapStateToProps)(FormikBuy);
