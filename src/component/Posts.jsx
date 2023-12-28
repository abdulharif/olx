import React from 'react';

import Heart from '../assets/Heart';
import '../css/Post.css'
import '../css/Heart.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useState,useEffect } from 'react';


function Posts() {
const[like,setLike]=useState(0),
[isLike,setIslike]=useState(false),

likeButton = () =>{
  setLike(like +(isLike?1:1));
  setIslike(!isLike)
}

  const [cart,setCart]=useState([])
 
 
    useEffect(()=>{
      setCart(JSON.parse(localStorage.getItem("Insert")))  
    })
  return (
  
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span><Link to='/View'>View More</Link></span>
        </div>
        <div className="cards">
        {cart?.map((value,index)=>(
        <div
            className="card"
          >
            <div className="favorite"> 
          <p className='heart'> <i class="fa fa-heart-o"   style={{fontSize:"36px"}}></i></p> 
{/*              
              <Heart className="heart"></Heart>           */}
            </div>
           
            <div className="image">
              <img src={value.Image} style={{width:'100px',height:"100px"}} alt="Not found bike" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {value.Price}</p>
              <span className="kilometer">{value.Category}</span>
              <p className="name"> {value.Name}</p>
            </div>
            <div className="date">
              
            </div>
            <p>
              <i class="fa fa-thumbs-up" onClick={likeButton}  style={{fontSize:"28px",color:"blue"}}></i>
              </p>
              <p>Like{like}</p>
          </div>
           ))}
        </div>
       
      </div>
      <div className="recommendations">
        <div className="heading">
          <span><Link to='/Create'>Fresh recommendations</Link></span>
        </div>
        <div className="cards">
        {cart?.map((value,index)=>(
          <div className="card">
            <div className="favorite">
            <p className='heart'> <i class="fa fa-heart-o"  style={{fontSize:"36px"}}></i></p> 
              
            </div>
        
            <div className="image">
            <img src={value.Image} style={{width:'100px',height:"100px"}} alt="Not found bike" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {value.Price}</p>
              <span className="kilometer">{value.Category}</span>
              <p className="name"> {value.Name}</p>
              
            </div>
            
            <div className="date">
            </div>
           
          </div>
             ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;