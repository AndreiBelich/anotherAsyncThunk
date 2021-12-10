import React from 'react'
import { Formik, Form, Field } from 'formik'
import { DatePickerField } from './DatePickerField'
import CustomPicker from './CustomPicker'

const initialValues = {
  name: '',
  date: new Date()
}

const TaskForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, setSubmitting) => {
        console.log('Values after submit: ', values)
      }}
    >
      <Form>
        <Field type='text' name='name' />
        {/*<DatePickerField name='date' />*/}
        <CustomPicker name="date"/>
        <button type='submit'>SUBMIT</button>
      </Form>
    </Formik>
  )
}

export default TaskForm
