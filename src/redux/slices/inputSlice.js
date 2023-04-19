import { createSlice } from '@reduxjs/toolkit'

const sdas = {
    string: '',
  }
  
  export const inputSlice = createSlice({
    name: 'input',
    sdas,
    reducers: {
      text: (state, action) => {
        state.string = action.payload
      },
      
    },
  })
  
  
  export const { text } = inputSlice.actions
  
  export default inputSlice.reducer