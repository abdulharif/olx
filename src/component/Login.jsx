import React from 'react';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';

import Logo from '../images/olx-logo.png';
import '../css/Login.css';

function Login() {
    const navigate = useNavigate();
    const [userlog,setUserlog] = useState('')
    const [userreg,setUserReg] = useState()

    useEffect (()=>{
        setUserReg(JSON.parse(localStorage.getItem("Reg")))

    },[])
    const HandleChange = (e) =>{
        setUserlog({...userlog,[e.target.name]:e.target.value})
    }
   console.log(userreg)
   const HandleSumbit = async ()=>{
    const check = userreg.filter((e)=>e.Email === userlog.Email && e.Password === userlog.Password)
    if(check.length>0){
        await localStorage.setItem('token',JSON.stringify(check[0].u_id))
        navigate('/')
    }else{
        alert('incorrect');
        await navigate('/Login')
    }
   }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label className='lables' htmlFor="Email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="Email"
            onChange={HandleChange}
            
            
          />
          <br />
          <label className='lables' htmlFor="Password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="Password"
            onChange={HandleChange}
           
          />
          <br />
          <br />
          <button onClick={HandleSumbit}>Login</button>
        </form>
        <a className='Logins' href='./Rigster'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
