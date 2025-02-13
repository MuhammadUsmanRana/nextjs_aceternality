
import { cardDataProps } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { cartItems: cardDataProps[] } = {
    cartItems: [
        {
            id: 1,
            slug: 'slug',
            title: 'title',
            description: 'description',
            image: 'image',
            isNewItem: true,
            price: 'price',
            size: ['size'],
            inStock: 1,
        }
    ],
};

export const cartSlice = createSlice({
    name: 'shoesStore',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<cardDataProps>) => {
            console.log(action.payload);
            state.cartItems.push(action.payload);
        },
        cartList: (state) => {
            console.log(state.cartItems);
            state.cartItems = state.cartItems
        },
        removeCartItem: (state, action) => {
            console.log(action.payload);
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder

            .addCase(addCartItem, (state, action: PayloadAction<cardDataProps>) => {
                state.cartItems.push(action.payload);
            })
            .addCase(removeCartItem, (state, action) => {
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            })
            .addCase(cartList, (state) => {
                state.cartItems = state.cartItems
            });
    },

});

export const { addCartItem, removeCartItem, cartList } = cartSlice.actions;