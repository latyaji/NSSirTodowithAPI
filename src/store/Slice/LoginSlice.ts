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
  userDataById:string;
}

const initialState: loginDataState = {
  email: {value: 'Test@gmail.com', error: ''},
  password: {value: '123456', error: ''},
  isLoading: false,
  isError: '',
  data: [],
  isLoggedin: false,
  token: '',
  userData: {},
  userDataById:''
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
    setoken(state,{payload}){
      state.token = payload;
    },
    clearLoginData(state) {
      return initialState;
    },
    setError(state, {payload}) {
      state.isError = payload;
    },
    setuserDataById(state,{payload}){
      state.userDataById = payload
    }
  },
});

export const {setLoginData, clearLoginData,setError,setoken,setuserDataById} =
  loginSlice.actions;
export default loginSlice.reducer;
