import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../cart/ProductCart'
import { Link, useNavigate } from "react-router-dom"

export default function Cart() {
    const shippedProducts = useSelector(state => state.cart)
    const products = useSelector(state => state.products.products)
    const navigate = useNavigate()


    const totalAmount = (shippedProducts.reduce((acc, product) => acc + (products.find(prod => prod.id === product.product_id).price) * product.quantity, 0)).toFixed(2)

    console.log(totalAmount)

    return (
        <div className='mt-[90px]'>

            {
                shippedProducts.length === 0 && <div className='w-full h-screen absolute flex items-center flex-col justify-center'>
                    <h1 className='font-medium tracking-wider mb-3'>Your Cart is Empty</h1>
                    <Link to="/" className='px-3 py-1 rounded bg-slate-300 transition hover:opacity-85 text-sm shadow hover:shadow-none'>Shop Now</Link>
                </div>
            }

            {
                shippedProducts.length > 0 && <>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 w-[90%] mx-auto'>
                        {
                            shippedProducts.map(product => {


                                return <ProductCard
                                    key={product.product_id}
                                    shippedProduct={product}
                                />
                            })
                        }
                    </div>
                    <div className='w-full py-2 border-t z-10 flex flex-col items-center space-y-2 fixed bottom-0 bg-white'>
                        <p className='mb-2'>Subtotal: <span className='font-bold'>${totalAmount}</span> </p>
                        <div className='flex items-center justify-center space-y-2 md:space-x-5 md:space-y-0 flex-col md:flex-row'>
                            <button
                                type='button'
                                onClick={() => navigate("/")}
                                className='transition hover:opacity-85 px-3 py-1.5 rounded bg-black  text-white w-fit min-w-[250px]'>Continue Shopping</button>
                            <button
                                type='button'
                                onClick={() => alert("checkout now!")}
                                className='transition hover:opacity-85 px-3 py-1.5 rounded bg-black text-white min-w-[250px]' >Checkout</button>
                        </div>

                    </div>
                </>
            }

        </div>
    )
}
