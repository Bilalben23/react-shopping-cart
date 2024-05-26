import React, { useEffect } from 'react'
import useFetch from "../../components/useFetch"
import ProductCard from './ProductCard';
import { Circles } from "react-loader-spinner"
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/product/productsSlice';

export default function Shop() {
    const dispatch = useDispatch();
    const { products, error, status } = useSelector(state => state.products)
    console.log(products, error, status)

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts())
        }
    }, [status, dispatch])

    if (status === "failed") {
        return <div className='w-fit mx-auto text-red-500 font-bold'>
            <h2>Error Occurred: {error}</h2>
        </div>
    }
    return (
        <div className='mb-5 text-center mt-[80px]'>
            <div className='font-bold tracking-wider mt-2 mb-4'>
                <h1>Bilal Shop</h1>
            </div>
            {
                status === "loading" && <div className='absolute w-full h-screen inset-0 flex items-center justify-center'>
                    <Circles />
                </div>
            }
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5 w-[90%] mx-auto'>
                {
                    (status !== "loading" && products?.length > 0) && products.map(product => {
                        return <ProductCard key={product?.id} product={product} />
                    })
                }
            </div>
        </div>
    )
}

