import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SignupDataState {
  name: string,
  email: string,
  password: string
}

const initialState: SignupDataState = {
  name: '',
  email: '',
  password: ''
}

export const SignupSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  setSignupData(state,{payload}){
    //@ts-ignore
    state[payload.key] = payload.value
  }
  },
})

// Action creators are generated for each case reducer function
export const { setSignupData } = SignupSlice.actions

export default SignupSlice.reducer