import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';



import Logo from '../images/olx-logo.png'
import '../css/Register.css';

export default function Signup() {
  const navigate = useNavigate();
    let initialValue;
  if(localStorage.getItem('Reg')===null){
    initialValue = [];
  }else{
    initialValue = JSON.parse(localStorage.getItem('Reg'))
  }
  const[Registers,setRegisters] = useState()
  const [value,setvalue] = useState(initialValue)
  const Handlechange = (e) =>{
    setRegisters({...Registers,
    [e.target.name]:e.target.value})
  }
  console.log(Registers)
  const Handlesubmit = async(e)=>{
    // alert("hi")
    e.preventDefault();
    const Userid = value.length === 0?1:value[value.length - 1].u_id + 1;
    const details = {
        u_id : Userid,
        ...Registers
    }
    const updatedValues = [...value,details]
    setvalue(updatedValues)
    localStorage.setItem('Reg',JSON.stringify(updatedValues))
    await navigate('/Login')
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label className='lables' htmlFor="Username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Username"
            onChange={Handlechange}
          />
          <br />
     
          <label className='lables' htmlFor="Email">Email</label>
          <br />
          <input
            className="input"
            type="Email"
            id="Email"
            name="Email"
          
            onChange={Handlechange}
          />
          <br />
       
          <label className='lables'  htmlFor="Phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="Phone"
            name="Phone"
            // defaultValue="Doe"
            onChange={Handlechange}
          />
          <br />
        
          <label className='lables' htmlFor="Password">Password</label>
          <br />
          <input
            className="input"
            type="Password"
            id="lname"
            name="Password"
            
            onChange={Handlechange}
          />
          <br />
          <br />
          <button onClick={Handlesubmit}>Signup</button>
        </form>
        <a className='Logins' href='./Login'>Login</a>
      </div>
    </div>
  );
}