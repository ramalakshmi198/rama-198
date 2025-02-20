import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { increment } from './Redux/CounterSlice';


export const ProductBottom = () => {
const dispatch = useDispatch()
  const handleClick=()=>{
dispatch(increment())
  }


  return (
    
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
            <Button variant="contained" size="small" onClick={handleClick} >Add To Cart</Button>
  </Box>
   
  )
}
