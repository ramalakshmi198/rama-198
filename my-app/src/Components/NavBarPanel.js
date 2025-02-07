import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBarPanel =()=>{
    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar >

            <Button href="/products" color='inherit'>Products</Button> 
              <Typography variant="h6" component="div" edge="start" sx={{ flexGrow: 1 }}>
            
              </Typography>
              <Button href="/cart"color="inherit">My Bag 0</Button>
            <Button href="/" color='inherit'>Log out</Button> 

            </Toolbar>

          </AppBar>
        </Box>
      );
}
export default NavBarPanel