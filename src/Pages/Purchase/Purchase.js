import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import NavBar from '../Shared/NavBar/NavBar';

const Purchase = () => {
    const [singleItem,setSingleItem] = useState({})
    const {id} = useParams()
    const { register, handleSubmit} = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        if (!data.productName) {
            data.productName = singleItem?.productName
        }
        data.status = 'pending';
        data.img = singleItem?.img;
        data.price = singleItem?.price
        fetch('https://infinite-temple-12624.herokuapp.com/order',{
            method:'POST',
            headers : {'content-type': 'application/json'},
            body:JSON.stringify(data)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Success fully added your order')
            }
        })
    };


    useEffect(()=>{
        fetch(`https://infinite-temple-12624.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setSingleItem(data))
    },[])



    return (
        <div>
            <NavBar/>
                <div className="row">
                    <div className="col-12 col-md-12 animate__animated animate__fadeInDown">
                    <Card className="bg-dark text-white">
                        <Card.Img id="overlayImg" style={{height:'90vh'}} className="w-100" src='https://www.gapwireless.com/wp-content/uploads/dji-matrice-200-series-v2-background.jpg' alt="Card image" />
                        <Card.ImgOverlay>
                            <Container>
                            <div className="row mt-5">
                                <div className="col-12 col-md-4">
                                    <div className="p-5 text-center">
                                        <div style={{width:'100%' , height:'35vh'}}>
                                            <img src={singleItem?.img} alt="" className="w-100 h-100" />
                                        </div>
                                        <h5>{singleItem?.productName}</h5>
                                        <p>{singleItem?.des}</p>
                                        <h4>USD ${singleItem?.price}</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8 mt-5">
                                    <div className="p-5" style={{border:'1px solid white', borderRadius:'10px'}}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input className="w-75 py-2 px-2 " type="text" defaultValue={user?.displayName} {...register("name", { required: true })} /><br/><br/>
                                        <input className="w-75 py-2 px-2 " type="email" defaultValue={user?.email} {...register("email", { required: true })} /><br/><br/>
                                        <input className="w-75 py-2 px-2 " type="text" defaultValue={singleItem?.productName} {...register("productName")} /><br/><br/>
                                        <input className="w-75 py-2 px-2 " type="number" placeholder="Qauntity" {...register("quantity", { required: true })} /><br/><br/>      
                                        <input type="submit" />
                                    </form>
                                    </div>
                                </div>
                            </div>
                            </Container>
                        </Card.ImgOverlay>
                    </Card>
                    </div>
                </div>
        </div>
    );
};

export default Purchase;