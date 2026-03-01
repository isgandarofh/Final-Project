import { configureStore } from '@reduxjs/toolkit'
import portfolioSlice from './slices/portfolioSlice';
import servicesSlice from './slices/servicesSlice'

export const store = configureStore({
    reducer : {
        "portfolio" : portfolioSlice,
        "services" : servicesSlice
        
    }
})