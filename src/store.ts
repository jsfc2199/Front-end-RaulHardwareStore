import {configureStore} from '@reduxjs/toolkit'
import providerReducer from './state/slice/providerSlice'

const store = configureStore({
    reducer:{
        providers: providerReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch