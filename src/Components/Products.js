import React, { useState, useEffect } from 'react';
import { getProducts} from './config/Myservice';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

export default function Products() {
    const [proData, setProData] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts()
            .then(res => setProData(res.data))
            .catch(err => console.log(err))
    })

    const addCart = (id) => {
        if (localStorage.getItem('mycart') !== undefined) {
            let status = false;
            let arr = JSON.parse(localStorage.getItem('mycart'));
            for (let i of arr) {
                if (i.pid === id) {
                    status = true
                }
            }
            if (status) {
                swal("Product Already Added")
            }
            else {
                let obj = { pid: id, quantity: 1 }
                arr.push(obj);
                localStorage.setItem('mycart', JSON.stringify(arr));
                dispatch({ type: 'addcart', payload: arr });
                swal("Added to Cart successfully", "", "success")
            }
        }
        else {
            let arr = [];
            let obj = { pid: id, quantity: 1 }
            arr.push(obj);
            localStorage.setItem('mycart', JSON.stringify(arr));
            dispatch({ type: 'addcart', payload: arr });
            swal("Added to Cart successfully", "", "success")
        }
    }
    return (
        <div>
            <h2>Products</h2>
            <div className='row'>
                {proData.map(pro =>
                    <div className='col-md-4' key={pro.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={pro.image} className="card-img-top" alt="..." width={150} height={250} />
                            <div className="card-body">
                                <h5 className="card-title">{pro.title}</h5>
                                <p className="card-text">
                                    Price : ${pro.price} <br />
                                    Quantity : {pro.quantity}
                                </p>

                            </div>
                            <button className='btn btn-primary' onClick={() => addCart(pro.id)}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
