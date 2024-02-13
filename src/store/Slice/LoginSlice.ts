import { createSlice } from '@reduxjs/toolkit';

interface loginDataState {
  email: {value: string; error: string};
  password: {value: string; error: string};
  isLoading: boolean;
  isError: string;
  data: any;
  isLoggedin: boolean;
  token: string;
  userData: any;
}

const initialState: loginDataState = {
  email: {value: 'S1@gmail.com', error: ''},
  password: {value: 'Test@123', error: ''},
  isLoading: false,
  isError: '',
  data: [],
  isLoggedin: false,
  token: '',
  userData: {},
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginData(state, {payload}) {
      //@ts-ignore
      state[payload.key] = payload.value;
    },
    setIsLoggedIn(state, {payload}) {
      state.token = payload.accessToken;
      state.userData = payload.userData;
      state.isLoggedin = true;
    },
    clearLoginData(state) {
      return initialState;
    },
    setError(state, {payload}) {
      state.isError = payload;
    },
  },
});

export const {setLoginData, clearLoginData, setIsLoggedIn, setError} =
  loginSlice.actions;
export default loginSlice.reducer;
