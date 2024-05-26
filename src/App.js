import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"



export default function App() {
  return (
    <BrowserRouter basename='react-shopping-cart' >
      <NavBar />
      <Routes>
        <Route>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// phosphor-react