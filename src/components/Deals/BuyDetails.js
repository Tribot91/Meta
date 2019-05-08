import React, { Component } from "react";
import { Field } from "formik";

class BuyDetails extends Component {
  render() {
    return (
      <div
        className="col s3 full-height"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        }}
      >
        <div>
          <div className="row mb0">
            <div className="col s12" style={{ marginBottom: 0 }}>
              <div className="input-field">
                <label className="active" htmlFor="customer">
                  Müşteri
                </label>
                <Field
                  id="customer"
                  name="customer"
                  type="text"
                  className="autocomplete"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="row mb0">
            <div className="col s12" style={{ marginBottom: 0 }}>
              <div className="input-field">
                <label className="active" htmlFor="dealNo">
                  Fiş No
                </label>
                <Field
                  id="dealNo"
                  name="dealNo"
                  type="text"
                  className="validate"
                />
              </div>
            </div>
          </div>
          <div className="row mb0">
            <div className="col s6" style={{ marginBottom: 0 }}>
              <div className="input-field">
                <label className="active" htmlFor="currency">
                  Para
                </label>
                <Field
                  className="filtered-shops-select validate"
                  name="currency"
                  component="select"
                  type="text"
                >
                  {this.props.currencies.map(currency => {
                    return (
                      // BuyDetails-de currency secince Buy-daki form-da submit sirasinda secili olacak mi bu ? !!!!!!!!!!!!!
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    );
                  })}
                </Field>
              </div>
            </div>

            <div className="col s6" style={{ marginBottom: 0 }}>
              <div className="input-field">
                <label className="active" htmlFor="rate">
                  Kur
                </label>
                <Field
                  id="rate"
                  name="rate"
                  type="number"
                  className="validate"
                />
              </div>
            </div>
          </div>
          <div className="row mb0">
            <div className="col s12" style={{ marginBottom: 0 }}>
              <div className="input-field">
                <label className="active" htmlFor="spendings">
                  Harcamalar
                </label>
                <Field id="spendings" name="spendings" type="text" />
              </div>
            </div>
          </div>
          <div className="row mb0">
            <div className="col s12" style={{ marginBottom: 0 }}>
              <div className="input-field">
                <label className="active" htmlFor="transportation">
                  Taşıma Ücreti
                </label>
                <Field id="transportation" name="transportation" type="text" />
              </div>
            </div>
          </div>
          <div className="row mb0">
            <div className="col s12" style={{ marginBottom: 0 }}>
              <div className="input-field">
                <label className="active" htmlFor="discount">
                  İndirim
                </label>
                <Field id="discount" name="discount" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mb0">
          <div className="col s8" style={{ marginBottom: 0 }}>
            <div className="input-field">
              <label className="active" htmlFor="paid">
                Ödenen
              </label>
              <Field id="paid" name="paid" type="text" />
            </div>
          </div>
          <div className="col s4" style={{ marginBottom: 0 }}>
            <div className="input-field">
              <label className="active" htmlFor="debt">
                Borç
              </label>
              <Field id="debt" name="debt" type="text" /> {/* readonly yap */}
            </div>
          </div>
        </div>
        <div className="row mb0">
          <a className="waves-effect waves-light btn w100">İŞLEMİ BİTİR</a>
        </div>
      </div>
    );
  }
}

export default BuyDetails;
