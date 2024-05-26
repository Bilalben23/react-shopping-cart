import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from "../../store/cart/cartSlice"

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const shippedProducts = useSelector(state => state.cart)
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    console.log(shippedProducts);

    useEffect(() => {
        setIsAddedToCart(shippedProducts.some(shippedProduct => shippedProduct.product_id === product.id))
    }, [product, shippedProducts])


    return (
        <div className='rounded shadow-xl h-[350px] p-1.5 bg-slate-100' >
            <div className='w-full h-[180px]'>
                <img src={product?.image} alt={product?.title} className='w-full h-full rounded' />
            </div>
            <div className='my-2'>
                <p className='truncate font-medium text-sm mb-1'>{product?.title}</p>
                <p className='font-semibold text-sm text-center'>${product?.price}</p>
            </div>
            <div className='mt-2.5 w-fit mx-auto'>
                <button
                    type='button'
                    className='px-3 py-1 text-xs font-semibold rounded-xl transition border-2 border-black hover:text-white hover:bg-black'
                    onClick={() => dispatch(isAddedToCart ? removeFromCart(product.id) : addToCart(product.id))}
                > {isAddedToCart ? "Remove From " : "Add To"} Cart</button>
            </div>
        </div>
    )
}
