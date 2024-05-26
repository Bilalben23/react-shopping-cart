import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa"
import { removeFromCart, incrementProductQuantity, decrementProductQuantity } from '../../store/cart/cartSlice'

export default function ProductCart({ shippedProduct }) {
    const products = useSelector(state => state.products.products)
    const product = products.find(product => product.id === shippedProduct.product_id)
    const dispatch = useDispatch();



    return (
        <div className='rounded bg-slate-100 flex items-center shadow-lg space-x-2 relative'>
            <div className='w-2/6 h-[130px] p-1'>
                <img src={product.image} alt={product.title} className='w-full h-full rounded' />
            </div>
            <div className="w-1/2">
                <p className='truncate'>{product.title}</p>
                <p>${product.price}</p>
                <div className='flex justify-between space-x-1 mt-1 border-2 rounded overflow-clip'>
                    <button
                        className='py-1 px-2 border-r-2 border-r-black transition bg-slate-300 hover:bg-slate-400  min-w-[20px]'
                        onClick={() => dispatch(decrementProductQuantity(shippedProduct.product_id))}
                    ><FaMinus size={15} /></button>
                    <span className='px-2'>{shippedProduct.quantity}</span>
                    <button
                        className='py-1 px-2 transition border-l-2 border-l-black bg-slate-300 hover:bg-slate-400 min-w-[20px]'
                        onClick={() => dispatch(incrementProductQuantity(shippedProduct.product_id))}
                    ><FaPlus size={15} /></button>
                </div>
            </div>
            <button
                type='button'
                className='absolute -right-[7px] -top-[7px] shadow hover:shadow-none bg-slate-500 rounded-full p-0.5 text-white transition hover:opacity-85'
                onClick={() => dispatch(removeFromCart(product.id))}
            >
                <FaTimes size={15} />
            </button>
        </div >
    )
}
