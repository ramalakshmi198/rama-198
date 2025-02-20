import React from 'react'
import { useState,useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import ProductDetails from  './ProductDetails'
import Typography from '@mui/material/Typography';
import NavBarPanel from './NavBarPanel';
import TextField from '@mui/material/TextField';

const Products = (props) => {
const [products,setProducts]=useState([])
const [filterProducts,setFilterProducts ]=useState([])


useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>
      res.json())
    .then(data=>{

        setProducts(data)
        setFilterProducts(data)

    }
      
      )
        .catch(err=>console.log(err))
    
    },[])
   
    const handleFilter=(event)=>{
      setProducts(filterProducts.filter(f=>f.title.toLowerCase().includes(event.target.value)))
    }
  
  return (
    <>
              <NavBarPanel />

   <Typography variant='h4' color='black'>Dashboard Details</Typography>

   <Paper elevation={10} style={{padding:'1.5em'}}>
    <TextField 
    fullWidth 
    id="outlined-search" label="Search Products..." type="search"
    onChange={handleFilter}
    
    />
   <Grid container direction='row' spacing={2} alignItems="stretch">
        {products&&products.map(product=>(
            <Grid item key={product.id} xs={12} md={6} > 
<ProductDetails product={product}/>

            </Grid>

        ))

        }

    </Grid>
    </Paper>

    
  
    </>
  )
}

export default Products