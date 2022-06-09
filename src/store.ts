import {configureStore} from '@reduxjs/toolkit'
import providerReducer from './state/slice/providerSlice'
import productReducer from './state/slice/productSlice'
import { useDispatch } from 'react-redux'

const store = configureStore({
    reducer:{
        providers: providerReducer,
        products: productReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()