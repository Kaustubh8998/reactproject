import { MAIN_URL } from './URL';
import { EMP_URL } from './URL';
import axios from 'axios';

export function getProducts(){
    return axios.get(MAIN_URL);
}

export function getEmployees(){
    return axios.get(EMP_URL);
}

export function getEmployeesById(id){
    return axios.get(`${EMP_URL}${id}`);
}

export function addEmployee(data){
    return  axios.post(EMP_URL,data);
}

export function deleteEmployee(id){
    return axios.delete(`${EMP_URL}${id}`);
}

export function updateEmployee(id,data){
    return axios.put(`${EMP_URL}${id}`,data)
}

export function deleteProduct(id){
    return axios.delete(`${MAIN_URL}${id}`);
}




