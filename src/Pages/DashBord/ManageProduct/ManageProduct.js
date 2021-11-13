import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageProduct = () => {
    const [allProducts,setAllProducts] = useState([])

    useEffect(()=>{
        fetch('https://infinite-temple-12624.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[])

    const deleteBtn = id => {
        const confirm = window.confirm('Remove this Product?')
        if (confirm) {
            fetch(`https://infinite-temple-12624.herokuapp.com/products/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert('Successfully removed item')
                const newProducts = allProducts.filter(order => order._id !== id)
                setAllProducts(newProducts)
            }
        })
        }
    }
    return (
        <Container>
            <small className="text-dark text-center fs-4 p-3 animate__animated animate__fadeInDown">Manage Product</small>
            {
                allProducts.map(product => <div className=" border bg-light p-2" key={product?._id}>
                    <div className="d-flex">
                        <div style={{height:'87px',width:'90px',overflow:'hidden'}} className="">
                            <img className="w-100 h-100" src={product?.img} alt="" />
                        </div>
                        <div className="p-2">
                                <h5 className="m-0 pb-3">{product?.productName}</h5>
                                <button className="ms-2 bg-primary border-0 text-white rounded" onClick={()=>deleteBtn(product?._id)}>Remove</button><br/>
                        </div>
                    </div>
                </div>)
            }
        </Container>
    );
};

export default ManageProduct;