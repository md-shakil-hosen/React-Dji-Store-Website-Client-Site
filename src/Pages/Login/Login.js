import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {
    const { register, handleSubmit} = useForm();
    const {handleUserLogin,setError,error} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'


    const onSubmit = data => {
      handleUserLogin(data.email,data.password)
      .then((result) => {
        history.push(redirect_url)
    })
    .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        alert(errorMessage)
    });
    };

    const {handleGoogle} = useAuth()

    const handleGoogleLog = () => {
      handleGoogle()
      .then(result => {
        history.push(redirect_url)
    })
    }

  return (
    <Container style={{height:'100vh'}} className="bg-1 d-flex align-items-center justify-content-center">
        <div style={{width:'100%', backgroundSize:'cover'  , backgroundImage:'url(https://www.gapwireless.com/wp-content/uploads/dji-matrice-200-series-v2-background.jpg)'}}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-3">
            <img src="https://stormsend1.djicdn.com/tpc/uploads/spu/cover/e22f7a8005eedf674c6f997b9a1fa471@retina_small.png" alt="" className="w-100" />
          </div>
          <div className="col-12 col-md-6 p-3 ">
          <h3 className='text-center text-white'> Log In </h3>
              <form className="w-100 px-3 py-2 rounded border-0 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input className="w-100 px-3 py-2 rounded border-0" type="text" placeholder="Your Email" {...register("email")} /><br/><br/>
            <input className="w-100 px-3 py-2 rounded border-0" type="password" placeholder="Your Password" {...register("password")} /><br/><br/>
            <input className="w-100 px-3 py-2 rounded border-0 bg-success border-0 p-2" type="submit" value="Login"/><br/>
            </form>
            <div className="w-75 mx-auto text-center pt-3">
            <small className="text-light">{error}</small><br />
            <Button className="text-center mx-1 w-100" onClick={handleGoogleLog}>Login With Google</Button>
            {/* <Link className="text-center" to="/regi"><small>new user</small></Link> */}
            <Link to="/regi" className="mx-1"><small className="">New User?</small></Link>
            <Link to="/home" className="mx-1"><a href='/' className="">Back to Home</a></Link>
            </div>
          </div>
        </div>
        </div>
    </Container>
  );
};

export default Login;