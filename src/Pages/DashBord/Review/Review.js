import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
const Review = () => {
    const { register, handleSubmit} = useForm();
    const {user} = useAuth()

    const onSubmit = data => {
        if (data.count > 5) {
            alert('Please give a number under equal 5')
            return
        }
        data.img = user?.photoURL || 'https://img.freepik.com/free-vector/man-avatar-portrait-man-minimalist-flat-illustration_186332-435.jpg?size=338&ext=jpg'
        fetch('https://infinite-temple-12624.herokuapp.com/review',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Added your review')
            }
        })
      };
    return (
        <Container>
            <div className="w-100">
            <div className="w-75">
            <h1 className="text-center">Review<br /></h1>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <input  type="text" placeholder="Your Name" {...register("name",{ required: true })} /><br/><br/>
                <input  type="number" placeholder="Rating" {...register("count")} /><br/><br/>
                <input  type="submit" /><br/>
                </form>
            </div>
        </div>
        </Container>
    );
};
//  mx-auto w-50"
export default Review;