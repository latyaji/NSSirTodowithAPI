import {createSlice} from '@reduxjs/toolkit';
import { sorting_generic } from '../../GlobalFunction/ValidationFunction';

interface ProfileImageData {
  width: number;
  height: number;
  showModal: boolean;
  addTasks: string;
  todoData: any;
  profileUserData:any;
  mode:string;
  particualUserToDoId:string
}

const initialState: ProfileImageData = {
  width: 120,
  height: 120,
  showModal: false,
  addTasks: '',
  todoData: [],
  mode:"asc",
  profileUserData:{},
  particualUserToDoId:''
};

export const ProfileImageSlice = createSlice({
  name: 'ProfileImage',
  initialState,
  reducers: {
    setSelectedImages(state, {payload}) {
      state.width = payload;
      state.height = payload;
    },
    setModal(state, {payload}) {
      state.showModal = payload;
    },
    setAddTask(state, {payload}) {
      state.addTasks = payload;
    },
    setodoData(state, {payload}) {
     
      state.todoData = payload;
    },
    setProfileUserData(state,{payload}){
      state.profileUserData = payload;
      
    },
    setsortingmode(state, {payload}) {
      state.mode = payload;
    },
    setParticularUserId(state,{payload}){
      state.particualUserToDoId = payload
    }
  },
});

export const {setSelectedImages, setModal, setAddTask, setodoData,setsortingmode,setProfileUserData,setParticularUserId} =
  ProfileImageSlice.actions;
export default ProfileImageSlice.reducer;
