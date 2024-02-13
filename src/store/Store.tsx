import { configureStore } from '@reduxjs/toolkit'
import SignupSlice from "./Slice/SignupSlice"
import LoginSlice from './Slice/LoginSlice'
import LoaderSlice from './Slice/LoaderSlice'
import ProfileImage from './Slice/ProfileImageSlice'

export const store = configureStore({
  reducer: {
    counter:SignupSlice,
    loginstore:LoginSlice,
    loaderSlice: LoaderSlice,
    ProfileImage:ProfileImage
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch