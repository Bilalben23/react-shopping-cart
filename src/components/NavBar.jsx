import React from 'react'
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"
import { useSelector } from 'react-redux';

export default function NavBar() {
    const shippedProducts = useSelector(state => state.cart)

    return (
        <header className='bg-black px-7 py-2.5 text-white fixed top-0 w-full z-50'>
            <nav>
                <ul className='flex items-center justify-end space-x-8'>
                    <li>
                        <NavLink to="/" classNam="px-2" style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#f5f5f5" }
                        }} >Shop</NavLink>
                    </li>
                    <li className='relative'>
                        <NavLink to="/cart" classNam="px-2" style={({ isActive }) => {
                            return { color: isActive ? "#FF407D" : "#f5f5f5" }
                        }}>
                            <ShoppingCart size={32} />
                        </NavLink>
                        <span className='absolute -top-[10px] -right-[8px] text-black font-medium font-serif shadow text-xs bg-slate-200 flex items-center justify-center w-[23px] h-[23px] rounded-full'>{shippedProducts.length}</span>
                    </li>
                </ul>
            </nav>
        </header >
    )
}
