import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductDetails = (product) => {
    const items= product


  return (
    <div className="col-md-3" >
    <Card key={items.product.id}
    // sx={{ maxWidth: 345 }} 
    style={{width:'18rem'}}>
        <div className="text-center">
    <CardMedia


//     //   sx={{ height: 160 }}
style={{width:'100px',height:'100px',marginLeft:'100px'}}

      image={items.product.image}
      title={items.product.title}
    />
    </div>
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
      {items.product.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        INR :{items.product.price}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Add To Cart</Button>
    </CardActions>
  </Card>
  </div>
  )
}

export default ProductDetails