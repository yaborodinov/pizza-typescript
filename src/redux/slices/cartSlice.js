import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const findItems = state.items.find(obj => obj.id === action.payload);
            if (findItems) {
                findItems.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            
            state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },
        removeItem: (state, action) => {
            if(window.confirm('Are you sure you want to delete the pizza?')) {
                state.items = state.items.filter(obj => obj.id !== action.payload)
                state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
            }
        },
        minusItem: (state, action) => {
            const findItems = state.items.find(obj => obj.id === action.payload);
            if(findItems){
                findItems.count--;
            }
            state.totalPrice = state.items.reduce((sum, obj) => sum + obj.price * obj.count, 0)
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }
    },
})

export const {
    addItem,
    removeItem,
    clearItems,
    minusItem
} = cartSlice.actions;

export default cartSlice.reducer;
