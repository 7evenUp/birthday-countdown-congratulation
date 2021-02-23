import React from 'react'
import { Formik, Form as FormikForm, Field } from 'formik'

const Form = (props) => {
  return (
    <Formik
      initialValues={{ date: '' }}
      onSubmit={ values => {
        props.callbacks.setDatePassed(true)
        props.callbacks.setDate(values.date)
      }}>
      <FormikForm className="form">
        <label htmlFor="date" className="form-label">Choose birthday's date</label>
        <Field
          id="date"
          name="date"
          type="date"
          className="form-input" />
        <button type="submit" className="form-button">Submit</button>
      </FormikForm>
    </Formik>
  )
}

export default Form
