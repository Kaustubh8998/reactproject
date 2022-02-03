import React, { useRef, useEffect, useState } from 'react';
import { getEmployeesById, updateEmployee } from './config/Myservice';
import { useNavigate, useParams } from 'react-router-dom';

export default function Editemployee() {
    const { id } = useParams();
    const [empData, empProdata] = useState({})
    const enameRef = useRef(null);
    const ageRef = useRef(null);
    const cityRef = useRef(null);
    const genderRef = useRef(null);
    const salaryRef = useRef(null);
    const navigate = useNavigate()
    useEffect(() => {
        getEmployeesById(id)
            .then(res => {
                if (res) {
                    console.log(res.data);
                    empProdata(res.data);
                }
            })
    }, [])
    const postEditEmployee = (event) => {
        event.preventDefault();
        let formData = {
            ename: enameRef.current.value, age: ageRef.current.value,
            city: cityRef.current.value, gender: genderRef.current.value, salary: salaryRef.current.value
        };
        updateEmployee(id, formData)
            .then(res => {
                if (res) {
                    alert("Employee Updated !");
                    navigate("/Employee")
                }
            })
    }
    return (
        <div>
            <h2>Edit Employee Data</h2>
            <form onSubmit={postEditEmployee}>
                <div className='form-group'>
                    <label>Employee Name</label>
                    <input type="text" className='form-control' ref={enameRef} defaultValue={empData.ename} />
                </div>
                <div className='form-group'>
                    <label>Age</label>
                    <input type="text" className='form-control' ref={ageRef} defaultValue={empData.age} />
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <input type="text" className='form-control' ref={cityRef} defaultValue={empData.city} />
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <input type="text" className='form-control' ref={genderRef} defaultValue={empData.gender} />
                </div>
                <div className='form-group'>
                    <label>Salary</label>
                    <input type="text" className='form-control' ref={salaryRef} defaultValue={empData.salary} />
                </div>
                <input type="submit" value="Done" className='btn btn-success' />
            </form>
        </div>
    )
}
