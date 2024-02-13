import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export interface SignupDataState {
  email: {value: string; error: string};
  name: {value: string; error: string};
  password: {value: string; error: string};
  isLoading: boolean;
  isError: boolean;
  data: any;
}

const initialState: SignupDataState = {
  email: {value: '', error: ''},
  name: {value: '', error: ''},
  password: {value: '', error: ''},
  isLoading: false,
  isError: false,
  data: [],
};

export const SignupSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSignupData(state, {payload}) {
      //@ts-ignore
      state[payload.key] = payload.value;
    },
    clearSignupData(state) {
      return initialState;
    },
  },
});

export const {setSignupData, clearSignupData} = SignupSlice.actions;

export default SignupSlice.reducer;
