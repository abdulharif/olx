// import React, { Fragment } from 'react';
import '../css/Craete.css';
import Header from '../component/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Create = () => {
  
  const navigate = useNavigate();
    let initialValue;
  
  if(localStorage.getItem('Insert') === null){
    initialValue  = [];
    
  }else{
    initialValue = JSON.parse(localStorage.getItem("Insert"));

  }
  const [value,setValue] = useState(initialValue);
  const [user,setUser] = useState("");

  
  const handleChange =(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    });
  }
 console.log(user)

 const handlesubmit = async (event) =>{
  event.preventDefault();
  const newUserId = value.length === 0 ? 1 :value[value.length - 1].u_id + 1;
  const details = {
    u_id : newUserId,
    ...user
  };

  const updatedValue = [...value,details];
  setValue(updatedValue);

  localStorage.setItem("Insert",JSON.stringify(updatedValue));
  
  await navigate('/View')
  }


  return (
   <div>
      <Header />
      <card>
        
        <div className="centerDiv">
          <form>
            <label htmlFor="Name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="Category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Category"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="Price">Price</label>
            <br />
            <input className="input" onChange={handleChange} type="number" id="fname" name="Price" />
            <br />
             <label htmlFor="Image">Image Link</label>
            <br />
            <input className="input"  onChange={handleChange} type="text" id="fname" name="Image" />
            <br />
           <button className="uploadBtn" onClick={handlesubmit}>upload and Submit</button>
          </form>
        </div>
      </card>
      </div>
  );
};

export default Create;