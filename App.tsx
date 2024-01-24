import React from "react";
import AppNavigation from "./src/screens/AppNavigation/AppNavigation";
import { Provider } from 'react-redux'
import {store} from "./src/store/Store"
const App = () => {
  return (
    <Provider store={store}>
    <AppNavigation/>
    </Provider>
  )
}

export default App;






// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";


// const App = () => {
// const [data, setData] = useState({
// email: { value: "", err: "" },
// password: { value: "", err: "" },
// });


// const submitHandler = () => {
// const checkFieldsError = checkFields(data);
// setData({ ...checkFieldsError.InputFields });
// if (!checkFieldsError.isError) {
// alert("Login successful");
// } else {
// alert('Invalid credentials');
// }
// };


// const onChangeHandler = (name, value) => {
// setData({ ...data, [name]: { value, err: isValid(name, value) } });
// };


// return (
// <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// <Text style={{ fontSize: 20, marginBottom: 20 }}>Login Form</Text>
// <TextInput
// style={{ width: "80%", height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
// placeholder="Enter email"
// onChangeText={(text) => onChangeHandler("email", text)}
// value={data.email.value}
// />
// {data.email.err ? <Text style={{ color: "red" }}>{data.email.err}</Text> : null}
// <TextInput
// style={{ width: "80%", height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }}
// placeholder="Enter password"
// secureTextEntry={true}
// onChangeText={(text) => onChangeHandler("password", text)}
// value={data.password.value}
// />
// {data.password.err ? <Text style={{ color: "red" }}>{data.password.err}</Text> : null}
// <TouchableOpacity
// style={{
// width: "80%",
// height: 40,
// backgroundColor: "blue",
// justifyContent: "center",
// alignItems: "center",
// marginTop: 10,
// }}
// onPress={submitHandler}
// >
// <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
// </TouchableOpacity>
// </View>
// );
// };


// // Your validation functions remain the same
// // validation function for single field
// export const isValid = (name, value) => {
// if (!value) {
// return `${name} is required!`;
// } else if (name === "email") {
// const pattern = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/;
// return !pattern.test(value) ? `${name} must be valid` : null;
// } else if (name === "password") {
// return value.length <= 4 ? `${name} length must be greater than 4` : null;
// } else {
// return null;
// }
// };


// // validation function for multiple fields
// export const checkFields = (InputFields) => {
// let isError = false;
// for (const field in InputFields) {
// InputFields = {
// ...InputFields,
// [field]: { value: InputFields[field].value, err: isValid(field, InputFields[field].value) },
// };


// if (InputFields[field].err) {
// isError = true;
// }
// }
// return { isError, InputFields };
// };
// export default App;


