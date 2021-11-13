import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrder.css';



const MyOrder = () => {

    const {user} = useAuth()

    const [allOrders,setAllOrders] = useState([])

    useEffect(()=> {
        fetch(`https://infinite-temple-12624.herokuapp.com/order/${user?.email}`)
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[user?.email])


    const deleteBtn = id => {
        const confirm = window.confirm('Are you sure to cancel this order?')
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
            <Row xs={1} md={2} className="g-4 py-3">
                {
                    allOrders.map(order => <div key={order._id}>
                        <div className="d-flex justify-content-center d-flex p-2 border rounded shadow">                     
                               <div className="mx-1 text-center ">
                                   <img src={order?.img} width="150px" alt="" />
                                <h5 className='text-info'>{order?.productName}</h5>
                                <h5 className='text-succuss'>${order?.price}</h5>
                                <div>
                                <button onClick={()=>deleteBtn(order?._id)} 
                                style={{
                                    backgroundColor:'blue' ,
                                    border:'1px solid blue',
                                    padding:'3px 15px',
                                    color:'white'
                                    }}>Delete</button>
                            </div>
                            </div>
                        </div>
                    </div>)
                }
                </Row>
        </Container>
    );
};

export default MyOrder;