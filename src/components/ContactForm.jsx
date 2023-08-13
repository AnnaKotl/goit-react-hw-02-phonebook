import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { Form, Label, Input, Button, ErrorText } from './styles/ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Invalid name format')
    .required('Name is required'),
  number: Yup.string()
    .matches(/^(\d{3}-\d{2}-\d{2}|\+?3?8?(0\d{9}))$/, 'Invalid number format')
    .required('Number is required'),
});

export const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onSubmit(values.name, values.number);
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && <ErrorText>{formik.errors.name}</ErrorText>}
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.number && formik.errors.number && <ErrorText>{formik.errors.number}</ErrorText>}
      </Label>
      <Button type="submit">Add contact</Button>
      <Toaster position="top-right" />
    </Form>
  );
};
