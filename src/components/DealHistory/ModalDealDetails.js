import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
// import { createProduct } from "../../actions/productAction";

const ModalDealDetails = ({
  units,
  currencies,
  values,
  errors,
  touched,
  isSubmitting,
  resetForm
}) => {
  return (
    <div>
      <div id="modal-deal-update" className="modal">
        <div className="modal-content">
          <div className="row">
            <Form id="deal-update" className="col s12">
              <h6 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                Ürün Detayları
              </h6>
              <div className="row">
                <div className="col s6" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="no">
                      İşlem Kodu*
                    </label>
                    <Field
                      id="no"
                      name="no"
                      type="number"
                      className="validate"
                    />
                    {/* {touched.name &&
                      errors.name && (
                        <div style={{ color: "red" }}>{errors.name}</div>
                      )} */}
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            form="deal-update"
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

const FormikModalDealDetails = withFormik({
  enableReinitialize: true,
  mapPropsToValues({ selectedDeal }) {
    return {
      no: selectedDeal.no || 0
    };
  },
  validationSchema: Yup.object().shape({
    no: Yup.number().required("İşlem ismi gerekli")
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.no === "takenName") {
        setErrors({ name: "That name is already taken" });
      } else {
        resetForm();
        props.closeModal();
      }
      setSubmitting(false);
    }, 2000);
  }
})(ModalDealDetails);

export default connect(
  null,
  {}
)(FormikModalDealDetails);
