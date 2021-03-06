import { configureStore } from '@reduxjs/toolkit'
import providerReducer from './state/slice/providerSlice'
import productReducer from './state/slice/productSlice'
import { useDispatch } from 'react-redux'
import loggedInReducer from './state/slice/loggedInSlice'
import receiptReducer from './state/slice/receiptSlice'
import billReducer from './state/slice/billSlice'
import shopping from './state/slice/shoppingSlice'

const store = configureStore({
    reducer: {
        providers: providerReducer,
        products: productReducer,
        logged: loggedInReducer,
        receipts: receiptReducer,
        bills: billReducer,
        shoppingCart: shopping
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()