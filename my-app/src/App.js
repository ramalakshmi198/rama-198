import './App.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import EmployeeTable from './Components/EmployeeTables/EmployeeTable';
import EmployeeTableCollapse from './Components/EmployeeTables/EmployeeTableCollapse';
import Header from './Components/Header/Header';
// import SideNav from './Components/SideBar/SideNav'
import { Routes,Route } from 'react-router-dom';
import About from ".Components/NavBar/About"
import Home from './Components/NavBar/Home';



function App() {
  return (
    <Box className="App">
<Routes>
<Route path='/about' element={<About/>}/>
<Route path='/home' element ={<Home/>}/>

</Routes>


      {/* <SideNav/> */}
      <Header/>
    {/* <EmployeeTable/> */}
    <EmployeeTableCollapse/>

    
    
    </Box>
  );
}

export default App;
