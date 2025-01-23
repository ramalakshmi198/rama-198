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
   

const productDashboard=products.map(product=>(
    <div >
    <Card key={product.id}sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={product.image}
      title={product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {product.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {product.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium">Add To Cart</Button>
    </CardActions>
  </Card>
  </div>
))


    
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