import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {
        fetch('https://infinite-temple-12624.herokuapp.com/products',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Added your Product')
            }
        })
    };
    return (
        <Container>
            <small className="text-dark fs-4 animate__animated animate__fadeInDown">Add your Product</small>
            <div style={{height:'60vh',backgroundColor:'#dcedf0', padding:'30px'}} className="w-500 mt-5">
            <div className="animate__animated animate__fadeInDown">
            <form className="w-100 border-0" onSubmit={handleSubmit(onSubmit)}>
            <input className="w-50 py-2 px-2 border-0"
             type="text" placeholder="Product Name"
              {...register("productName")} /><br/><br/>
            <input className="w-50 py-2 px-2 border-0" 
            type="text" placeholder="Product image"
             {...register("img")} /><br/><br/>
            <input className="w-50 py-2 px-2 border-0"
             type="text" placeholder="Price" 
             {...register("price")} /><br/><br/>
            <input className="w-50 py-2 px-2 border-0"
             type="text" placeholder="Details"
              {...register("des")} /><br/><br/>
            <input className="w-50 py-2 px-2 border-0"
             type="text" placeholder="Rating"
              {...register("rating")} /><br/><br/>
            <input className="w-100 bg-primary text-white py-2 px-2 border-0 rounded" type="submit" /><br/> <br /><br />
            </form>
            </div>
        </div>
        </Container>
    );
};

export default AddProduct;