import React,{useRef} from 'react';
import { addEmployee } from './config/Myservice';
import {useNavigate} from 'react-router-dom';

export default function Addemployee() {
    const enameRef = useRef(null);
    const ageRef = useRef(null);
    const cityRef = useRef(null);
    const genderRef = useRef(null);
    const salaryRef = useRef(null);
    const navigate=useNavigate()
    const postEmployee = (event)=>{
        event.preventDefault();
        let formData = {ename:enameRef.current.value,age:ageRef.current.value,
            city:cityRef.current.value,gender:genderRef.current.value,salary:salaryRef.current.value};
            addEmployee(formData)
            .then(res=>{
                if(res){
                    alert("Employee Added");
                    navigate('/Employee')
                }
            })
    }
    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={postEmployee}>
                <div className='form-group'>
                    <label>Employee Name</label>
                    <input type="text"className='form-control' ref={enameRef}/>
                </div>
                <div className='form-group'>
                    <label>Age</label>
                    <input type="text"className='form-control' ref={ageRef}/>
                </div>
                <div className='form-group'>
                    <label>City</label>
                    <input type="text"className='form-control' ref={cityRef}/>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <input type="text"className='form-control' ref={genderRef}/>
                </div>
                <div className='form-group'>
                    <label>Salary</label>
                    <input type="text"className='form-control' ref={salaryRef}/>
                </div>
                <input type="submit" value="Add" className='btn btn-success'/>
            </form>
        </div>
    )
}
