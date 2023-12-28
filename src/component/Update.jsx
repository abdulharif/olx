import React from 'react'
import '../css/Craete.css';
// import Header from '../component/Header';
import { useState,useEffect } from 'react';




function Update({setOpen3,selectedUser,data,setData}) {
    const [updateUser,setUpdatedUser] = useState(selectedUser)

  const [index,setIndex] = useState('');
  useEffect(()=>{
    const index=(data.findIndex((e)=>e.u_id === selectedUser.u_id))
    setIndex(index);
  })
  console.log(index)
  const handleChange = (e)=>{
    setUpdatedUser({
        ...updateUser,
        [e.target.name]:e.target.value,
    })
  }
  console.log(updateUser);

  const handlesubmit = async (e)=>{
    e.preventDefault()
    const updateData =[...data];
    updateData.splice(index,1,updateUser);
    console.log(updateData);
    setData(updateData)
    localStorage.setItem('Insert',JSON.stringify(updateData))
    await setOpen3(false)

  }


  return (
    <div>
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
          value={updateUser.Name}
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
          value={updateUser.Category}
        />
        <br />
        <label  htmlFor="Price">Price</label>
        <br />
        <input className="input" onChange={handleChange} type="number" id="fname" name="Price" value={updateUser.Price} />
        <br />
         <label htmlFor="Image">Image Link</label>
        <br />
        <input className="input"  onChange={handleChange} type="text" id="fname" name="Image" value={updateUser.Image} />
        <br />
       <button className="uploadBtn" onClick={handlesubmit}>upload and Submit</button>
      </form>
    </div>
  </card>
  </div>
  )
}
export default Update
