import './App.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import EmployeeTable from './Components/EmployeeTables/EmployeeTable';
import EmployeeTableCollapse from './Components/EmployeeTables/EmployeeTableCollapse';

import Header from './Components/Header/Header';
// import SideNav from './Components/SideBar/SideNav'



function App() {
  return (
    <Box className="App">
      {/* <SideNav/> */}
      <Header/>
    <EmployeeTable/>
    {/* <EmployeeTableCollapse/> */}

    
    
    </Box>
  );
}

export default App;
