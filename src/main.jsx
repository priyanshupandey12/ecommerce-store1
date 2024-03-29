import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import Product from './components/Product.jsx'
import Cart from './components/Cart.jsx'
import Category from './components/Category.jsx'
import Men from './components/Men.jsx'
import Login from './components/Login.jsx'




const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Body/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/products/:productId',
        element:<Product />
      },
      {
        path:'/carts',
        element:<Cart   />,
      },
   
      {
        path:'/categories',
        element:<Category   />,
       
      },
      {
        path:'/categories/men',
        element:<Men   />,
       
      },
   
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
