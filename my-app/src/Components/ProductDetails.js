import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProductBottom } from './ProductBottom';




const ProductDetails = (product) => {
    const items= product


  return (
    <div className="col-md-3" >
    <Card key={items.product.id}
    // sx={{ maxWidth: 345 }} 
    style={{width:'18rem',height:'20rem'}}>
    <CardMedia
alignItems="stretch"
      sx={{ mt:2,width:'100%' }}style={{width:'100px',height:'100px',marginLeft:'100px'}}


      image={items.product.image}
      title={items.product.title}
    />
    <CardContent>
      <Typography gutterBottom variant="h9" component="div" >
      {items.product.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        INR :{items.product.price}
      </Typography>
    </CardContent>
  
<ProductBottom productId={items.product} />
      
      
  </Card>
  </div>
  )
}

export default ProductDetails