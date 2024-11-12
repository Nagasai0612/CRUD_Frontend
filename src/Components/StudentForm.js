// StudentForm Component
import React from "react";
import * as Yup from "yup";
import {
    Formik, Form,
    Field, ErrorMessage
} from "formik";
import {
    FormGroup,
    Button
} from "react-bootstrap";

const StudentForm = (props) => {
    const validationSchema =
        Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            dob: Yup.date()
                .required("Date of Birth is required")
                .max(new Date(), "Date of Birth cannot be in the future"),
        });

    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label>Student Name</label>
                        <Field name="name" type="text" className="form-control" placeholder="Name" />
                        <ErrorMessage name="name" className="d-block invalid-feedback" component="span" />
                    </FormGroup>
                    <FormGroup>
                    <label>Email ID</label>
                        <Field name="email" type="text" className="form-control" placeholder="Email"/>
                        <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
                    </FormGroup>
                    <FormGroup>
                    <label>Date-of-Birth</label>
                        <Field name="dob" type="date" className="form-control" />
                        <ErrorMessage name="dob" className="d-block invalid-feedback" component="span" />
                    </FormGroup>
                    <Button variant="danger" size="lg" block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;
