import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, { payload: id }) {
            // add to cart if doesn't exist, and increment the quantity:
            if (!state.some(product => product.product_id === id)) {
                state.push({
                    product_id: id,
                    quantity: 1
                })
            }
        },
        removeFromCart(state, { payload: id }) {
            // remove product from cart:
            return state.filter(product => product.product_id !== id)
        },
        incrementProductQuantity(state, { payload: id }) {
            const product = state.find(product => product.product_id === id);
            if (product) {
                product.quantity += 1;
            }
        },
        decrementProductQuantity(state, { payload: id }) {
            const product = state.find(product => product.product_id === id);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            } else {
                return state.filter(product => product.product_id !== id)
            }
        }
    }
})

export const { addToCart, removeFromCart, incrementProductQuantity, decrementProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
