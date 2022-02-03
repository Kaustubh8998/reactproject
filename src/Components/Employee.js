import React, { useState, useEffect } from 'react';
import { deleteEmployee, getEmployees } from './config/Myservice';
import { useNavigate } from 'react-router-dom';

export default function Employee() {
    const [empData, setEmpData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getEmployees()
            .then(res => setEmpData(res.data))
            .catch(err => console.log(err))
    })
    const delEmployee = (id) => {
        if (window.confirm("You want to remove Employee ?")) {
            deleteEmployee(id)
                .then(res => {
                    if (res) {
                        alert("Employee deleted");
                        getEmployees()
                            .then(res => setEmpData(res.data));
                    }
                })
        }
    }
    const editEmployee = (id) => {
        navigate(`/editemployee/${id}`);
    }

    return (
        <div>
            <h2>Employees</h2>
            <table className='table table-light'>
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">City</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Salary</th>
                        <th scope='col'>Edit Info</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {empData.map(emp =>
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.age}</td>
                            <td>{emp.city}</td>
                            <td>{emp.gender}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => editEmployee(emp.id)}>Edit</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={() => delEmployee(emp.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
