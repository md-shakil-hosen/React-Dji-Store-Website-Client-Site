import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdmin = e => {
        const user = {email}
        fetch('https://infinite-temple-12624.herokuapp.com/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('made admin')
            }
        })
        e.preventDefault()
    }
    return (
        <Container>
            <small className="text-dark fs-4 animate__animated animate__fadeInDown ">Make Admin</small>
            <div>
                <div>
                    <input onBlur={handleOnBlur} placeholder='Type admin name' type="text" /><br /> <br />
                    <button style={{backgroundColor:'blue' , color:'white', border:'blue'}} onClick={handleAdmin}>Make Admin</button>
                </div>
            </div>
        </Container>
    );
};

export default MakeAdmin;