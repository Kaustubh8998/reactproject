import React, { useState, useEffect } from 'react';
import { deleteProduct } from './config/Myservice';


export default function Cart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('mycart') !== undefined) {
            const Items = JSON.parse(localStorage.getItem('mycart'));
            setData(Items)
        }
    }, []);
    
    const delProduct = (id) => {
        if (window.confirm("You want to remove Item ?")) {
            deleteProduct(id)
                .then(res => {
                    if (res) {
                        alert("Product deleted");
                    }
                })
        }
    }
    return <>
        <table className='table table-light'>
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {data.map((pro) =>
                    <tr key={pro.id}>
                        <td>{pro.id}</td>
                        <td>{pro.title}</td>
                        <td>{pro.price}</td>
                        <td>{pro.total}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => delProduct(pro.id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>;
}