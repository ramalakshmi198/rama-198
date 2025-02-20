import './App.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import Products from './Components/Products';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';
import NavBarPanel from './Components/NavBarPanel';
import { Login } from './Components/Login';



 

function App(props) {



  return (
    <Box className="App">
       {/* <NavBarPanel /> */}
     
<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<RootLayout />} />
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
    
    
    </Box>
  );
}

export default App;
