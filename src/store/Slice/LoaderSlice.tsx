import {createSlice} from '@reduxjs/toolkit';

interface LoaderData {
  isLoading: boolean;
  firstInstallAppScreen:boolean
}

const initialState: LoaderData = {
  isLoading: false,
  firstInstallAppScreen:false
};

export const LoaderSlice = createSlice({
  name: 'Loader',
  initialState,
  reducers: {
    setIsLoading(state,{payload}){
        state.isLoading = payload
    },
    showScreenFirstInstallation(state,{payload}){
      state.firstInstallAppScreen = payload
  }
  },
});

export const {setIsLoading,showScreenFirstInstallation} = LoaderSlice.actions;
export default LoaderSlice.reducer;
