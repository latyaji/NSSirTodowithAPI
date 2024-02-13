import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker, {Image as ImageType} from 'react-native-image-crop-picker';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch, useSelector} from 'react-redux';
import publicinstance from '../../API_INTERCEPTOR/axios-interceptors';
import {InputField, PrimaryButton} from '../../component/Index';
import {setIsLoading} from '../../store/Slice/LoaderSlice';
import {clearLoginData, setError} from '../../store/Slice/LoginSlice';
import {
  setAddTask,
  setModal,
  setSelectedImages,
  setodoData,
  setsortingmode,
} from '../../store/Slice/ProfileImageSlice';
import {Colors} from '../../utils/Colors/Color';
import {globalStyles} from '../../utils/GlobalStyle/GlobalStyles';
import {
  logoutImg,
  plusicon,
  profileicon,
  shape,
} from '../../utils/Images/assest';
import {Static} from '../../utils/StaticFonts/StaticFonts';
import {styles} from './HomeStyles';
import {sorting_generic} from '../../GlobalFunction/ValidationFunction';
interface S {
  addTasks: string;
}

const Home: React.FC<S> = () => {
  const toast = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [sort, setSort] = useState('asc');

  const dispatch = useDispatch();
  const {userData}: any = useSelector<any>(s => s.loginstore);
  const {width, height, showModal, addTasks, todoData, mode}: any =
    useSelector<any>(s => s.ProfileImage);

  useEffect(() => {
    TodoList();
  }, []);

  const successmsg = () => {
    toast.show('To Do Added Successfully', {
      type: 'custom_toast',
      animationDuration: 1000,
      duration: 3000,
      data: {
        title: 'To Do Status',
      },
    });
  };

  const TodoSubmit = async () => {
    try {
      const response = await publicinstance.post('todo/createTodo', {
        title: addTasks,
      });

      dispatch(setIsLoading(true));
      if (response.data) {
        // Alert.alert(response.data.message);
        successmsg();
        TodoList();
        dispatch(setModal(!showModal));
        dispatch(setIsLoading(false));
        addTask('');
      } else {
        dispatch(
          setError({
            isError: response.data,
          }),
        );
        Alert.alert(response.data);
        dispatch(setIsLoading(false));
      }
    } catch (e) {
      console.log('errror todo catch---->', e);
    }
  };

  const TodoList = async () => {
    try {
      const response = await publicinstance.get('todo/getAll');
      dispatch(setodoData(response.data?.list));
      // dispatch(setodoData(sorting_generic(response.data?.list, 'title','asc')));
    } catch (error) {
      console.log('error shivvvvv------>>>', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('TOKEN');
      await AsyncStorage.removeItem('SIGNUPUSERDATA');
    } catch (exception) {
      console.log('exception====>>>', exception);
    }
    dispatch(clearLoginData());
  };

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
    })
      .then((image: ImageType) => {
        setSelectedImage(image.path);
        dispatch(setSelectedImages(height));
        dispatch(setSelectedImages(width));
        console.log(image);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const addTask = (text: any) => {
    dispatch(setAddTask(text));
  };

  const sortingdata = () => {
    if (mode == 'asc') {
      dispatch(setodoData(sorting_generic(todoData, 'title', mode)));
      dispatch(setsortingmode('des'));
    } else {
      dispatch(setodoData(sorting_generic(todoData, 'title', mode)));
      dispatch(setsortingmode('asc'));
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={{flex: 1, backgroundColor: Colors.darkorage}}>
        <View
          style={[
            globalStyles.shapContainer,
            {zIndex: 0, backgroundColor: Colors.darkorage},
          ]}>
          <Image
            source={shape}
            style={[
              globalStyles.shapeimg,
              {tintColor: Colors.white, opacity: 0.4},
            ]}></Image>
          <Text style={styles.welcomeTxt}>
            {Static.welcome} to {userData?.name}
          </Text>
        </View>

        <View style={styles.logoutBtnView}>
          <TouchableOpacity
            style={{flexDirection: 'row-reverse'}}
            onPress={logout}>
            <Image
              source={logoutImg}
              style={[globalStyles.iconImg, {tintColor: Colors.white}]}></Image>
          </TouchableOpacity>
        </View>
        <View style={[styles.roundViewCircle, {width: width, height: height}]}>
          <TouchableOpacity onPress={handleImagePicker}>
            {selectedImage ? (
              <>
                <Image
                  source={{uri: selectedImage}}
                  style={[styles.roundImg, {width: width, height: height}]}
                />
              </>
            ) : (
              <>
                <Image
                  source={profileicon}
                  style={[styles.roundImg, {width: width, height: height}]}
                />
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flex: 1.5}}>
        <Text style={styles.taskTxt}>{Static.tasklist}</Text>
        <View
          style={{
            backgroundColor: Colors.orange,
            width: 120,
            height: 120,
            borderRadius: 60,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: 'white',
              width: 70,
              marginTop: 10,
            }}></View>
          <View
            style={{
              backgroundColor: Colors.white,
              width: 20,
              height: 20,
              borderRadius: 60,
              alignSelf: 'center',
            }}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'red',
                width: 70,
                marginTop: 10,
              }}></View>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 6,
            }}>
            <Text style={styles.dailyTxt}>{Static.dailtTask}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setModal(!showModal));
              }}>
              <Image
                source={plusicon}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  marginTop: 10,
                }}
              />
            </TouchableOpacity>
          </View>

          <ScrollView style={{}}>
            <TouchableOpacity
              style={{backgroundColor: mode == 'asc' ? 'red' : 'green'}}
              onPress={sortingdata}>
              <Text style={styles.dailyTxt}>name</Text>
            </TouchableOpacity>

            {todoData.length > 0 &&
              todoData?.map((item: any, Index: any) => (
                <View key={item.id}>
                  <Text
                    style={[
                      globalStyles.subtxt,
                      {alignSelf: 'flex-start', paddingLeft: 20},
                    ]}>
                    {item?.title}
                  </Text>
                </View>
              ))}
          </ScrollView>
          {/* modal start */}
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <View style={styles.modal}>
              <InputField
                value={addTasks}
                placeholder="Enter your task"
                onChangeText={text => addTask(text)}
                containerStyle={{backgroundColor: Colors.grey}}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <View style={{width: '48%'}}>
                  <PrimaryButton
                    tittle="Add Task"
                    onPress={() => {
                      TodoSubmit();
                    }}
                  />
                </View>
                <View style={{width: '48%'}}>
                  <PrimaryButton
                    tittle="Cancel"
                    onPress={() => {
                      dispatch(setModal(!showModal));
                    }}
                  />
                </View>
              </View>
            </View>
          </Modal>
          {/* modal end */}
        </View>
      </View>
    </View>
  );
};

export default Home;
