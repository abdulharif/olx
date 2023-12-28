import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useState,useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Delete from './Delete';
import Singleview from './Singleview';
import Update from './Update'
import { useNavigate } from 'react-router';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// function Data(UserName,PhoneNumber,Email,Address) {
//   return { UserName,PhoneNumber,Email,Address };
// }

// let Data = [
//   createData(1),
//   createData(2),
//   createData(3),
//   createData(4),
//   createData(5),
// ]

export default function View() {
  const [open, setOpen] =useState(false);
  
  const [open2, setOpen2] =useState(false);

  const [open3, setOpen3] =useState(false);
  const [selectedUser,setselectedUser]= useState('');
  const  [data,setData]=useState([])

  let navigate = useNavigate()
  const isAuthentication = localStorage.getItem('token')!== null;
  

 
  const handleDelete = (id) =>{
    setOpen(true)
    setselectedUser(id)
  }
  const handleSingleView = (id)=>{
    setOpen2(true)
    setselectedUser(id)
  }
  const handleUpdate = (id) =>{
    setOpen3(true)
    setselectedUser(id)
    console.log(setOpen3)
  }
  const handleClose = () =>{setOpen(false);setOpen2(false);setOpen3(false)}
  useEffect(()=>{
    if(!isAuthentication){
     navigate('/Login')
    }
     setData(JSON.parse(localStorage.getItem("Insert")))
   })
    
  // let _retrieveUserData = JSON.parse(localStorage.getItem('Insert'))
  // console.log(_retrieveUserData)
  return (
    <div>
    
      <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>Sl.NO</StyledTableCell>
          <StyledTableCell align='right'>Name</StyledTableCell>
          <StyledTableCell align="right">Category&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Image&nbsp;</StyledTableCell>
          <StyledTableCell align="center" colSpan="3" sx={{fontSize:"2ch"}}>Action&nbsp;</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((value,index) => (
          <StyledTableRow  key={value.index} >
            <StyledTableCell component="th" scope="row">
            {index}
            </StyledTableCell>
          
            <StyledTableCell align="right">{value.Name}</StyledTableCell>
            <StyledTableCell align="right">{value.Category}</StyledTableCell>
            <StyledTableCell align="right">{value.Price}</StyledTableCell>
            <StyledTableCell align="right"><img src={value.Image}  style={{width:"200px",height:"200px"}}/></StyledTableCell>
            <StyledTableCell  align="right"><Button onClick={()=>handleSingleView(value.u_id)}>View</Button></StyledTableCell>
            <StyledTableCell  align="right"><Button onClick={()=>handleUpdate(value)}>Update</Button></StyledTableCell>
            <StyledTableCell  align="right"><Button  variant='contained' onClick={() =>handleDelete(value.u_id)}>Delete</Button></StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer><br></br>

 
  <Modal
  onClose={handleClose}
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 
        <Delete setData={setData} data={data} setOpen={setOpen} selectedUser={selectedUser}/>
        
        
      </Modal>
      <Modal
      onClose={handleClose}
        open={open2}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 
        <Singleview data={data} selectedUser={selectedUser} />
        
        
      </Modal>
      <Modal
      onClose={handleClose}
        open={open3}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
 
        <Update  setData={setData} data={data} setOpen3={setOpen3} selectedUser={selectedUser}/>
        
      </Modal>
  </div>
  )
} 
