import {configureStore} from '@reduxjs/toolkit'
import userReducer  from '../features/userSlice'

export let store = configureStore({
    reducer:{
        user:userReducer
    }
})