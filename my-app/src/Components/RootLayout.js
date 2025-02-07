import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'
const RootLayout=(props)=>{

    return(
        <>  
              <NavBarPanel />
        
           <h1>Welcome to my Redux shop</h1>
        <main>
<Outlet/>
        </main>
        
              </>
    )
}



export default RootLayout