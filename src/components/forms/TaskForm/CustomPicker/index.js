import React from 'react'
import { useField, useFormikContext } from 'formik'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab'
import { DateTimePicker } from '@mui/lab'
import { TextField } from '@mui/material'

const CustomPicker = ({ ...props }) => {
  const [field] = useField(props)
  console.log("Field is ", field);

  const { setFieldValue } = useFormikContext()

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        {...field}
        {...props}
        label='Date&Time picker'
        onChange={val => setFieldValue(field.name, val)}
        renderInput={params => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default CustomPicker
