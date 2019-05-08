import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createTransaction } from "../../actions/monetaryAction";

const ModalTransactionDetails = ({
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
            <Form id="transaction-update" className="col s12">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                  Para İşlemi Detayları
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
            </Form>
          </div>
        </div>
        <div
          className="modal-footer"
          style={{
            display: modalType === "modal-new-transaction" ? "flex" : "",
            justifyContent: "space-between"
          }}
        >
          {modalType === "modal-new-transaction" && (
            <button
              className="waves-effect waves-green btn-flat"
              onClick={() => resetForm()}
            >
              Temizle
            </button>
          )}

          <button
            type="submit"
            form="transaction-update"
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

const FormikModalTransactionDetails = withFormik({
  enableReinitialize: true,
  mapPropsToValues({ selectedTransaction }) {
    // Update Transaction
    if (selectedTransaction) {
      return {
        favourite: selectedTransaction.favourite
      };
    }
    // New Transaction
    return {
      favourite: false
    };
  },
  validationSchema: Yup.object().shape({
    // name: Yup.string().required("Ürün ismi gerekli"),
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
})(ModalTransactionDetails);

export default connect(
  null,
  { createTransaction }
)(FormikModalTransactionDetails);
