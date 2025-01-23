import React from 'react'
import { useState,useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ProductDetails from  './ProductDetails'

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
    <h1>Sample Shop</h1>
   <Container>
    <Grid container spacing={3}>
        {products.map(product=>(
            <Grid item key={product.id} xs={12} md={6} >
<ProductDetails product={product}/>

            </Grid>

        ))

        }

    </Grid>
   </Container>
    
    </>
  )
}

export default Products