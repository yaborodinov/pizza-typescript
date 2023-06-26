import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzasStatus',
    async ({sortUrl}) => {
        const {data} = await axios.get(sortUrl)
        return data
    }
  )

const initialState = {
    items: [],
    status: 'loadings'
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state) => {
            state.items = []
            state.status = 'error'
        }
    }
})

export const {
    setItems,
} = pizzaSlice.actions;

export default pizzaSlice.reducer;
