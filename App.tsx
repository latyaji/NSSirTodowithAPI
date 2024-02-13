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


