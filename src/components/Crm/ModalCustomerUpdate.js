import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createCustomer } from "../../actions/customersAction";

const ModalCustomerDetails = ({
  values,
  errors,
  touched,
  isSubmitting,
  resetForm,
  modalType
}) => {
  return (
    <div>
      <div id={`${modalType}`} className="modal">
        <div className="modal-content">
          <div className="row">
            <Form id="Customer-update" className="col s12">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                  Müşteri Detayları
                </h6>
              </div>
              <div className="row">
                <div className="col s6" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="name">
                      Ad*
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
                <div className="col s6" style={{ marginBottom: 0 }}>
                  <div className="input-field">
                    <label className="active" htmlFor="surname">
                      Soyad
                    </label>
                    <Field
                      id="surname"
                      name="surname"
                      type="text"
                      className="validate"
                    />
                    {touched.surname &&
                      errors.surname && (
                        <div style={{ color: "red" }}>{errors.surname}</div>
                      )}
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div
          className="modal-footer"
          style={{
            display: values.modalType === "modal-new-Customer" ? "flex" : "",
            justifyContent: "space-between"
          }}
        >
          {values.modalType === "modal-new-Customer" && (
            <button
              className="waves-effect waves-green btn-flat"
              onClick={() => resetForm()}
            >
              Temizle
            </button>
          )}

          <button
            type="submit"
            form="Customer-update"
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

const FormikModalCustomerDetails = withFormik({
  enableReinitialize: true,
  mapPropsToValues({ selectedCustomer }) {
    // Update Customer
    if (selectedCustomer) {
      return {
        name: selectedCustomer.name,
        surname: selectedCustomer.surname
      };
    }
    // New Customer
    return {
      name: "",
      surname: ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Ürün ismi gerekli"),
    surname: Yup.string()
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    // setTimeout(() => {
    //   if (values.name === "takenName") {
    //     setErrors({ name: "That name is already taken" });
    //   } else {
    //     resetForm();
    //     props.closeModal();
    //   }
    //   setSubmitting(false);
    // }, 2000);

    props.createCustomer({ name: values.name, surname: values.surname });
  }
})(ModalCustomerDetails);

const mapDispatchToProps = dispatch => {
  return {
    createCustomer: newCustomer => dispatch(createCustomer(newCustomer))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FormikModalCustomerDetails);
