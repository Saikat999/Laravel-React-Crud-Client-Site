import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const EditStudent = () => {

    const [student, setStudent] = useState({
        name:'',
        email:'',
        phone:'',
        course:'',
    });
    const params = useParams();

    const baseURL = process.env.REACT_APP_BASE_URL;


    useEffect(() => {
        
        
        axios.get(`${baseURL}/api/edit-student/${params.id}`).then( res => {
            if(res.data.status === 200)
            {
                setStudent(res.data.student);
            }
        });

    }, []);

    const handleInput = (e) => {
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value });
    }

    const updateStudent = (e) =>{
        e.preventDefault();
        const data = {
            name:student.name,
            course:student.course,
            email:student.email,
            phone:student.phone,
        }
        axios.put(`${baseURL}/api/update-student/${params.id}`, data).then(res => {

            if(res.data.status === 200)
            {
                console.log(res.data.message);
                setStudent({
                    name: '',
                    email: '',
                    phone: '',
                    course: ''
                });
            }
            
        });
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Edit Student</h2>
                            <Link to={'/students'} className="btn btn-primary btn-sm float-end">Back</Link>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updateStudent}>
                                <div className="form-group mb-3">
                                    <label>Student Name</label>
                                    <input type="text" name='name' className='form-control'
                                    value={student.name} onChange={handleInput} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Student Email</label>
                                    <input type="text" name='email' className='form-control'
                                    value={student.email} onChange={handleInput} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Student Phone</label>
                                    <input type="text" name='phone' className='form-control'
                                    value={student.phone} onChange={handleInput} />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Student Course</label>
                                    <input type="text" name='course' className='form-control'
                                    value={student.course} onChange={handleInput} />
                                </div>
                                <div className="form-group mb-3">
                                    <button type="submit" className='btn btn-primary'>Update Student</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default EditStudent;