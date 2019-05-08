import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createProduct } from "../../actions/productAction";

const ModalProductDetails = ({
  categories,
  units,
  modalType,
  currencies,
  values,
  errors,
  touched,
  isSubmitting,
  resetForm
}) => {
  return (
    <div>
      <div id={modalType} className="modal" style={{ width: "65%" }}>
        <div className="modal-content">
          <div className="row">
            <Form id="product-update" className="col s12">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                  Ürün Detayları
                </h6>
                <label>
                  <Field
                    name="favourite"
                    type="checkbox"
                    // className="validate"
                    checked={values.favourite}
                  />
                  <span />
                </label>
              </div>
              <div className="row">
                <div className="col s6" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="name">
                      Ürün Adı*
                    </label>
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      className="validate"
                    />
                    {touched.name &&
                      errors.name && (
                        <div style={{ color: "red" }}>{errors.name}</div>
                      )}
                  </div>
                </div>
                <div className="col s3" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="amount">
                      Miktar
                    </label>
                    <Field
                      id="amount"
                      name="amount"
                      type="number"
                      className="validate"
                    />
                    {touched.amount &&
                      errors.amount && (
                        <div style={{ color: "red" }}>{errors.amount}</div>
                      )}
                  </div>
                </div>
                <div className="col s3" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="units">
                      Birim
                    </label>
                    <Field
                      className="filtered-shops-select validate"
                      type="text"
                      component="select"
                      name="units"
                    >
                      {touched.unit &&
                        errors.unit && (
                          <div style={{ color: "red" }}>{errors.unit}</div>
                        )}
                      <option value={"adet"}>Adet</option>
                      {units.map(unit => {
                        return (
                          <option key={unit} value={unit}>
                            {unit}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col s3" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="categories">
                      Kategori
                    </label>
                    <Field
                      className="filtered-shops-select validate"
                      type="text"
                      component="select"
                      name="category"
                    >
                      {touched.category &&
                        errors.category && (
                          <div style={{ color: "red" }}>{errors.category}</div>
                        )}
                      <option value={""}>Kategorisiz</option>
                      {categories.map(category => {
                        return (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                <div className="col s3" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="code">
                      Ürün Kodu
                    </label>
                    <Field
                      id="code"
                      name="code"
                      type="number"
                      className="validate"
                    />
                    {touched.code &&
                      errors.code && (
                        <div style={{ color: "red" }}>{errors.code}</div>
                      )}
                  </div>
                </div>
                <div
                  className="col s3"
                  style={{
                    marginBottom: 0,
                    display: modalType === "modal-new-product" ? "none" : ""
                  }}
                >
                  <div className="input-field">
                    <label className="active" htmlFor="barcode">
                      Barkod
                    </label>
                    <Field
                      id="barcode"
                      name="barcode"
                      type="number"
                      className="validate"
                    />
                    {touched.barcode &&
                      errors.barcode && (
                        <div style={{ color: "red" }}>{errors.barcode}</div>
                      )}
                  </div>
                </div>

                <div className="col s3" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="newBarcode">
                      Yeni Barkod
                    </label>
                    <Field
                      id="newBarcode"
                      name="newBarcode"
                      type="number"
                      className="validate"
                    />
                    {touched.newBarcode &&
                      errors.newBarcode && (
                        <div style={{ color: "red" }}>{errors.newBarcode}</div>
                      )}
                  </div>
                </div>
              </div>

              <h6 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Fiyat Detayları
              </h6>
              <div className="row">
                <div className="col s2" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="price">
                      Satış Fiyatı
                    </label>
                    <Field
                      id="price"
                      name="price"
                      type="number"
                      className="validate"
                    />
                    {touched.price &&
                      errors.price && (
                        <div style={{ color: "red" }}>{errors.price}</div>
                      )}
                  </div>
                </div>
                <div className="col s1" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <Field
                      className="filtered-shops-select validate"
                      name="priceCurrency"
                      component="select"
                      type="text"
                    >
                      {currencies.map(currency => {
                        return (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                {/* ----------------------------------------------------------------------------------------- */}
                <div className="col s2" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="wholesale">
                      Toptan Fiyatı
                    </label>
                    <Field
                      id="wholesale"
                      name="wholesale"
                      type="number"
                      className="validate"
                    />
                    {touched.wholesale &&
                      errors.wholesale && (
                        <div style={{ color: "red" }}>{errors.wholesale}</div>
                      )}
                  </div>
                </div>
                <div className="col s1" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <Field
                      className="filtered-shops-select validate"
                      name="wholesaleCurrency"
                      component="select"
                      type="text"
                    >
                      {touched.price &&
                        errors.price && (
                          <div style={{ color: "red" }}>{errors.price}</div>
                        )}
                      {currencies.map(currency => {
                        return (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                {/* ----------------------------------------------------------------------------------------- */}
                <div className="col s2" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="purchasePrice">
                      Alış Fiyatı
                    </label>
                    <Field
                      id="purchasePrice"
                      name="purchasePrice"
                      type="number"
                      className="validate"
                    />
                    {touched.purchasePrice &&
                      errors.purchasePrice && (
                        <div style={{ color: "red" }}>
                          {errors.purchasePrice}
                        </div>
                      )}
                  </div>
                </div>
                <div className="col s1" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <Field
                      className="filtered-shops-select validate"
                      name="purchaseCurrency"
                      component="select"
                      type="text"
                    >
                      {currencies.map(currency => {
                        return (
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        );
                      })}
                    </Field>
                  </div>
                </div>
                {/* ----------------------------------------------------------------------------------------- */}
                <div className="col s2" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="discount">
                      İndirim
                    </label>
                    <Field
                      id="discount"
                      name="discount"
                      type="number"
                      className="validate"
                    />
                    {touched.discount &&
                      errors.discount && (
                        <div style={{ color: "red" }}>{errors.discount}</div>
                      )}
                  </div>
                </div>
                <div className="col s1" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <Field
                      className="filtered-shops-select validate"
                      name="discountType"
                      component="select"
                      type="text"
                    >
                      <option value="%">%</option>
                      <option value="AZN">AZN</option>
                    </Field>
                  </div>
                </div>
                {/* ----------------------------------------------------------------------------------------- */}
              </div>
            </Form>
          </div>
        </div>
        <div
          className="modal-footer"
          style={{
            display: modalType === "modal-new-product" ? "flex" : "",
            justifyContent: "space-between"
          }}
        >
          {modalType === "modal-new-product" && (
            <button
              className="waves-effect waves-green btn-flat"
              onClick={() => resetForm()}
            >
              Temizle
            </button>
          )}

          <button
            type="submit"
            form="product-update"
            className="waves-effect waves-green btn-flat"
            disabled={isSubmitting}
          >
            Oluştur
          </button>
        </div>
      </div>
    </div>
  );
};

const FormikModalProductDetails = withFormik({
  enableReinitialize: true,
  mapPropsToValues({ selectedProduct }) {
    // Update Product
    if (selectedProduct) {
      return {
        favourite: selectedProduct.favourite,
        code: selectedProduct.code,
        name: selectedProduct.name,
        category: selectedProduct.category,
        barcode: selectedProduct.barcode,
        newBarcode: "",
        amount: selectedProduct.amount,
        unit: selectedProduct.unit,
        price: selectedProduct.price.amount,
        priceCurrency: selectedProduct.price.currency,
        wholesale: selectedProduct.wholesale.amount,
        wholesaleCurrency: selectedProduct.wholesale.currency,
        purchasePrice: selectedProduct.purchasePrice.amount,
        purchaseCurrency: selectedProduct.purchasePrice.currency,
        discount: selectedProduct.discount.amount,
        discountType: selectedProduct.discount.type
      };
    }
    // New Product
    return {
      favourite: false,
      code: 0, //maybe we should show next auto-generated product code
      name: "",
      category: "",
      barcode: "",
      newBarcode: "",
      amount: 0,
      unit: "Adet",
      price: "",
      priceCurrency: "AZN",
      wholesale: "",
      wholesaleCurrency: "AZN",
      purchasePrice: "",
      purchaseCurrency: "AZN",
      discount: 0,
      discountType: "%"
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Ürün ismi gerekli"),
    category: Yup.string(),
    amount: Yup.number().min(0, "Miktar en az 0 olabilir"),
    unit: Yup.string(),
    code: Yup.string(),
    barcode: Yup.number(),
    newBarcode: Yup.number(),
    price: Yup.number().min(0, "Miktar en az 0 olabilir"),
    wholesale: Yup.number().min(0, "Miktar en az 0 olabilir"),
    purchasePrice: Yup.number().min(0, "Miktar en az 0 olabilir")
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.name === "takenName") {
        setErrors({ name: "That name is already taken" });
      } else {
        resetForm();
        props.closeModal();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  }
})(ModalProductDetails);

export default connect(
  null,
  { createProduct }
)(FormikModalProductDetails);
