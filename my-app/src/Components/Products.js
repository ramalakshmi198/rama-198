import React from 'react'
import { useState,useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ProductDetails from  './ProductDetails'
import Typography from '@mui/material/Typography';

const Products = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>
        
        setProducts(data))
    
    },[])
   

  
  return (
    <>
   {/* <Container> */}
   <Typography variant='h4' color='black'>Dashboard Details</Typography>
   <Paper elevation={10} style={{padding:'1.5em'}}>
   <Grid container direction='row' spacing={2} alignItems="stretch">
        {products.map(product=>(
          // <Grid item style={{height:'100%', width:'50%'}}   xs={12} md={6}key={product.id}> 
            <Grid item key={product.id} xs={12} md={6} > 
<ProductDetails product={product}/>

            </Grid>

        ))

        }

    </Grid>
    </Paper>
   {/* </Container> */}
    
    </>
  )
}

export default Products