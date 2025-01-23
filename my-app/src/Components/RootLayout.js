import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout=()=>{

    return(
        <>
        <h1>Navigation Bar      </h1>  
        <main>
<Outlet/>

        </main>
              </>
    )
}



export default RootLayout