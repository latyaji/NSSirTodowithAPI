import React from 'react';
import {LogBox, Text, View} from 'react-native';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import AppNavigation from './src/screens/AppNavigation/AppNavigation';
import {store} from './src/store/Store';
import {globalStyles} from './src/utils/GlobalStyle/GlobalStyles';

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider
        placement="top"
        offset={10}
        renderType={{
          custom_toast: toast => (
            <View style={globalStyles.toastContainer}>
              <Text style={globalStyles.toastContainertxt}>
                {toast.data.title}
              </Text>
              <Text style={globalStyles.toastContainermsgtxt}>
                {toast.message}
              </Text>
            </View>
          ),
        }}>
        <AppNavigation />
      </ToastProvider>
    </Provider>
  );
};

export default App;



// import { View, Text, TextInput, Button } from 'react-native';
// import React, { useState } from 'react';

// const App = () => {
//   const [title, setTitle] = useState('');
//   const [todoList, setTodoList] = useState([]);

//   const submitTodo = () => {
//     // Check if title is not empty
//     if (title.trim() !== '') {
//       // Add the new todo to the todoList
//       setTodoList([...todoList, { title: title }]);
//       // Clear the title input after submission
//       setTitle('');
//     }
//   };
//   console.log("todoList---",todoList)

//   return (
//     <View>
//       <Text>App</Text>
//       <TextInput
//         placeholder="Enter Title"
//         onChangeText={text => setTitle(text)}
//         value={title} // bind value to title state
//         style={{ borderWidth: 1 }}
//       />
//       <Button
//         onPress={submitTodo}
//         title='Submit'
//       />
//       {/* Display the todo list */}
//       {todoList.map((todo, index) => (
//         <Text key={index}>{todo.title}</Text>
//       ))}
//     </View>
//   );
// };

// export default App;