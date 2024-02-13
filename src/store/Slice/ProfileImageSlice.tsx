import {createSlice} from '@reduxjs/toolkit';
import { sorting_generic } from '../../GlobalFunction/ValidationFunction';

interface ProfileImageData {
  width: number;
  height: number;
  showModal: boolean;
  addTasks: string;
  todoData: any;
  mode:string;
}

const initialState: ProfileImageData = {
  width: 120,
  height: 120,
  showModal: false,
  addTasks: '',
  todoData: [''],
  mode:"asc"
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
  
    setsortingmode(state, {payload}) {
      state.mode = payload;
    },
  },
});

export const {setSelectedImages, setModal, setAddTask, setodoData,setsortingmode} =
  ProfileImageSlice.actions;
export default ProfileImageSlice.reducer;
