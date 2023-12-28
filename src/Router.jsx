import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Rigster from './component/Rigster'
import Login from './component/Login'
import Create from './component/Create'
import View from './component/View'
import Logout from './component/Logout'

export default function Router() {
  return (
    <div>
        
<BrowserRouter>
<Routes>
        <Route>
         
        <Route extact path = "/" element ={<Home/>}></Route> 
        <Route extact path = "/Rigster" element ={<Rigster/>}></Route> 
        <Route extact path = "/Login" element ={<Login/>}></Route> 
        <Route extact path = "/Create" element ={<Create/>}></Route> 
        <Route extact path = "/View" element ={<View/>}></Route> 
        <Route extact path = "/Logout" element ={<Logout/>}></Route> 
       
        </Route>
</Routes>
</BrowserRouter>
    </div>
  )
}
