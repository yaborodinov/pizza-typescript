import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/filterSlice'
import textReducer from './slices/inputSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textReducer
  }, 
})
