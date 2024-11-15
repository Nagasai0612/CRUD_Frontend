import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import StudentTable from "./studentTable";

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/students/")
            .then(({ data }) => {
                setStudents(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return students.map((res, i) => {
            return <StudentTable obj={res} key={i} />;
        });
    };

    return (
        <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
            </Table>
        </div>
    );
};

export default StudentList;
