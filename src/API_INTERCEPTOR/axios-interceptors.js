import axios from 'axios';
import { store } from '../store/Store';

const publicinstance = axios.create({
  baseURL: 'https://task-nhar.onrender.com/', // Replace with your API base URL
});

// Add a request interceptor
publicinstance.interceptors.request.use(config => {
  let token = store.getState().loginstore.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Add a response interceptor
publicinstance.interceptors.response.use(
  function (response) {
    // console.log('response@@@@', response)
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default publicinstance;

// Note : Yha pr hum AsyncStorage ka use nhi kr skte quki uske liye humko firse wait krwana pdega.
// Yha humne function component nhi bnaya hai isliye hum
