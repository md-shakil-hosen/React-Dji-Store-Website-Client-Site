import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './ManageOrder.css';
const ManegeOrder = () => {
    const [allOrders,setAllOrders] = useState([])

    useEffect(()=> {
        fetch('https://infinite-temple-12624.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[])

    const deleteBtn = id => {
        const confirm = window.confirm('Wanna delete this order of users? Sure?')
        if (confirm) {
            fetch(`https://infinite-temple-12624.herokuapp.com/order/${id}`,{
            method:'DELETE'
        }).then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Successfully removed item')
                const newOrders = allOrders.filter(order => order._id !== id)
                setAllOrders(newOrders)
            }
        })
        }
    }

    return (
        <Container>
            {
                allOrders.map(order => <div className="p-2" key={order?._id}>
                    <div   className="d-flex align-items-center">
                        <div className="p-2 d-flex">        
                        <table>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Gmail</th>
                            <th>Manage</th>
                        </tr>
                        <tr>
                            <td><h5 className="m-0 p-0">{order?.productName.slice(0,10)}</h5></td>
                            <td><p className="m-0 p-0">{order?.name}</p></td>
                            <td><p className="m-0 p-0">$ {order?.price}</p></td>
                            <td><p className="m-0 p-0">{order?.email}</p></td>
                            <td><button className="ms-1 bg-white border-0 rounded text-danger" onClick={()=>deleteBtn(order?._id)}>Delete</button><br/></td>
                        </tr>
                    </table>
                        </div>
                    </div>
                </div>)
            }
        </Container>
    );
};

export default ManegeOrder;