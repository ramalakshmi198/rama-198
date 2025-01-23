import './App.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import Products from './Components/Products';
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';
import RootLayout from './Components/RootLayout';


 

function App() {



  return (
    <Box className="App">
<h1>I AM INN</h1>
<Router>
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
    
    
    </Box>
  );
}

export default App;
