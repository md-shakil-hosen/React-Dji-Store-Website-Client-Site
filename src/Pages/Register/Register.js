import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [error,setError] = useState('')
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const { register, handleSubmit} = useForm();
    const {handleUserRegister,setUser,updateProfile,auth} = useAuth()
    const onSubmit = data => {
        handleUserRegister(data.email,data.password)
        .then(res => {
            const newUser = res.user
            const newUserName = {...newUser}
            newUserName.displayName = data.name
            savedUser(data.name,data.email,'admin')
            setUser(newUserName)
            updateProfile(auth.currentUser, {
                displayName: data.name
              }).then(() => {
                history.push(redirect_url)
              })
            
        }).catch((error)=>{
            setError(error.message)
            alert(error.message)
          })
        
    };

    const savedUser = (name,email,role) => {
        const user = {name,email,role:role}
        fetch('https://infinite-temple-12624.herokuapp.com/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then()

    }
    return (
        <Container style={{height:'100vh'}} className="bg-2 w-100 d-flex align-items-center justify-content-center">
            <div className="c-w mx-auto text-center">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 p-3">
                        <img src="https://stormsend1.djicdn.com/tpc/uploads/spu/cover/d8d3e557a599f79ec02338a1f796958e@retina_small.png" alt="" className="w-100" />
                    </div>
                    <div style={{backgroundImage: 'url(https://www.gapwireless.com/wp-content/uploads/dji-matrice-200-series-v2-background.jpg)'}} className="col-12 col-md-6 p-3">
                        <form className="w-100 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-white'>Register</h2>
                        <input className="w-100 px-3 py-2 rounded border-0" type="text" placeholder="Your Name" {...register("name")} /><br/><br/>
                        <input className="w-100 px-3 py-2 rounded border-0" type="text" placeholder="Your Email" {...register("email")} /><br/><br/>
                        <input className="w-100 px-3 py-2 rounded border-0" type="password" placeholder="Your Password" {...register("password")} /><br/><br/>
                        <input className="w-100 px-3 py-2 rounded border-0" type="submit" value="Register" />
                        </form>
                        <small>{error}</small><br />
                        <Link to="/login" className="mx-1"><Button className="bg-white text-dark border-0">Already registered</Button></Link>
                        <Link to="/home" className="mx-1"><Button className="bg-success border-0">Back to Home</Button></Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;