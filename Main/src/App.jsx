import { useState } from 'react'
import Login from './Component/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './Component/Nav'
import Admincomponent from './Component/Admincomponent'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Delete from './Component/Adminfun/Delete'
import Homeinfo from './Component/Homeinfo'
import Footer from './Component/Footer'
import Create from './Component/Adminfun/Create'
import Viewcusbyac from './Component/Adminfun/Viewcusbyac'
import Addwithdrawfun from './Component/Adminfun/Addwithdrawfun'
import Sendmoney from './Component/Adminfun/Sendmoney'
function App() {

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<> <Nav/> <Homeinfo/><Footer/></>

    },
    {
      path:"/login",
      element:<> <Nav/><Login/></>
    },
    {
      path:"/admincomponent",
      element:<> <Nav/><Admincomponent/> <Footer/> </>
    },
    {
      path:"/Create",
      element:<><Nav/><Create/> </>
    },
    {
      path:"/Viewcusbyac",
      element:<> <Nav/><Viewcusbyac/></>
    },
    {
      path:"/Addwithdraw",
      element:<><Nav/> <Addwithdrawfun/></>
    },
    {
      path:"/Delete",
      element:<><Nav/> <Delete/></>
    },
    {
      path:"/Sendmoney",
      element:<><Nav/> <Sendmoney/></>

    }
  ]
)

  return (
    <>
    <RouterProvider router={router}/>
    {/* <Users/> */}
      {/* <Editeusers/> */}
      {/* <Createuser/> */}
    </>
  )
}

export default App
