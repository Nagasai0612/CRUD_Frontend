// CreateStudent Component for adding a new student
import React, { useState } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

const CreateStudent = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        dob: ''
    });

    // onSubmit handler
    const onSubmit = (studentObject) => {
        axios.post('http://localhost:4000/students/students', studentObject)
            .then(res => {
                if (res.status === 200) alert('Student successfully created');
                else Promise.reject();
            })
            .catch(err => alert('Something went wrong'));
    };

    return (
        <StudentForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Create Student
        </StudentForm>
    );
};

export default CreateStudent;
