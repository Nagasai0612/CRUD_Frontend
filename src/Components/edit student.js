// EditStudent Component for updating student data
import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = (props) => {
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        dob: "",
    });

    // onSubmit handler
    const onSubmit = (studentObject) => {
        axios
            .put("http://localhost:4000/students/students/" + props.match.params.id, studentObject)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student successfully updated");
                    props.history.push("/student-list");
                } else Promise.reject();
            })
            .catch((err) => alert("Something went wrong"));
    };

    // Load data from server and reinitialize student form
    useEffect(() => {
        axios
            .get("http://localhost:4000/students/update-student/" + props.match.params.id)
            .then((res) => {
                const { name, email, dob } = res.data;
                setFormValues({ name, email, dob });
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <StudentForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
            Update Student
        </StudentForm>
    );
};

export default EditStudent;
