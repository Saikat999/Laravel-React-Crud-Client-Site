import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Student = () => {

    const [students, setStudents] = useState([]);
   

    const baseURL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {

        axios.get(`${baseURL}/api/students`).then(res=>{
            if(res.status === 200)
            {
                setStudents(res.data.students);
            }
        });

    }, []);

    const deleteStudent = (e, id) => {
        e.preventDefault();
        
        const selectData = e.currentTarget;
        selectData.innerText = "Deleting";

        axios.delete(`${baseURL}/api/delete-student/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                console.log(res.data.message);
                selectData.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                console.log(res.data.message);
            }
        });
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2 className='text-center'>Student Data</h2>
                            <Link to={'/add-student'} className="btn btn-primary btn-sm float-end">Add student</Link>
                        </div>
                        <div className="card-body">
                            <table className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Course</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map(student =>{
                                            return (
                                                        <tr key={student.id}>
                                                            <td>{student.id}</td>
                                                            <td>{student.name}</td>
                                                            <td>{student.email}</td>
                                                            <td>{student.phone}</td>
                                                            <td>{student.course}</td>
                                                            <td>
                                                                <Link to={`/edit-student/${student.id}`} className="btn btn-success btn-sm">Edit</Link>
                                                            </td>
                                                            <td>
                                                                <button type="button" onClick={(e) => deleteStudent(e, student.id)} className="btn btn-danger btn-sm">Delete</button>
                                                            </td>
                                                        </tr>
                                                    );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Student;