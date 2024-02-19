import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
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
import {InputField, PrimaryButton} from '../../component/Index';
import {clearLoginData} from '../../store/Slice/LoginSlice';
import {
  setAddTask,
  setModal,
  setSelectedImages,
  setodoData,
} from '../../store/Slice/ProfileImageSlice';
import {Colors} from '../../utils/Colors/Color';
import {globalStyles} from '../../utils/GlobalStyle/GlobalStyles';
import {
  deleteIcon,
  logoutImg,
  plusicon,
  profileicon,
  shape,
} from '../../utils/Images/assest';
import {Static} from '../../utils/StaticFonts/StaticFonts';
import {styles} from './HomeStyles';
import getAuth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {NavigationParams} from 'react-navigation';
import {setIsLoading} from '../../store/Slice/LoaderSlice';

const auth = getAuth();

interface S {
  addTasks: string;
}

const Home = ({navigation}: NavigationParams) => {
  const toast = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dispatch = useDispatch();
  const {width, height, showModal, addTasks, todoData, profileUserData}: any =
    useSelector<any>(s => s.ProfileImage);
  const {userDataById}: any = useSelector<any>(s => s.loaderSlice);

  useEffect(() => {
      getToDoDataWithFirebase();
  }, [profileUserData]);

 

  const toastmsg = (showmsg: string, titlestatus: string) => {
    toast.show(showmsg, {
      type: 'custom_toast',
      animationDuration: 1000,
      duration: 3000,
      data: {
        title: titlestatus,
      },
    });
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

  const logoutwithfirebase = async () => {
    try {
      const logoutt = await AsyncStorage.removeItem('TOKEN');
    } catch (error) {
      console.log('error logouttt', error);
    }
    dispatch(clearLoginData());
  };

  const AddToDoWithFirebase = async () => {
    try {
      const updatedTodoList = [...todoData, {title: addTasks, id: Date.now()}];
      const data = await firestore()
        .collection('ToDoList')
        .doc(auth.currentUser?.uid)
        .set({
          Title: updatedTodoList,
        });
      toastmsg('To Do Added Successfully', 'To Do Status');

      dispatch(setodoData(updatedTodoList));
      dispatch(setAddTask(''));
      dispatch(setModal(!showModal));
    } catch (error) {
      console.log('error --- adddd data', error);
    }
  };

  const getToDoDataWithFirebase = async () => {
    try {
      const data: any = await firestore()
        .collection('ToDoList')
        .doc(profileUserData.uid)
        .get();
        console.log("====>", data.data())
       dispatch(setodoData(data?.data()?.Title||[]));
      // dispatch(setodoData(data.data().Title || []));
    } catch (error) {
      console.log('Todo list getting error', error);
    }
  };

  const updatedTodoListwithFB = async (useritemid: string) => {
    dispatch(setModal(!showModal));
    // console.log("useritemid ----------",useritemid)

    const updatedtodolist = todoData.map((item:string)=>
   {
    if(item.id === useritemid) {
      dispatch(setAddTask(text));
    }
   }
    
    )

    // try {
    //   const updatedData = await firestore()
    //     .collection('ToDoList')
    //     .doc(auth.currentUser?.uid)
    //     .update({
    //       ToDoTittle: "addTasks-----",
    //     });
    //   // Fetch the updated document
    //   // const updatedDoc = await firestore().collection('ToDoList').doc(id).get();

    //   // // Log the updated data
    //   // console.log('Updated data:', updatedDoc.data());
    // } catch (error) {
    //   console.log('update data error ----', error);
    // }
  };

  const modalofTodo = () => {
    return (
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

          <View style={styles.addtaskView}>
            <View style={{width: '30%'}}>
              <PrimaryButton
                tittle="Add Task"
                onPress={() => {
                  AddToDoWithFirebase();
                }}
              />
            </View>
            <View style={{width: '30%'}}>
              <PrimaryButton tittle="update Task" />
            </View>
            <View style={{width: '30%'}}>
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
    );
  };

  const deleteToDoDatawithFB = async (itemid: string) => {
    const deletedataByID = todoData.filter((item: any) => item.id !== itemid);
    dispatch(setodoData(deletedataByID));
    try {
      const deletedData = await firestore()
        .collection('ToDoList')
        .doc(auth.currentUser?.uid)
        .set({
          Title: deletedataByID,
        });
      toastmsg('To Do deleted Successfully', 'To Do deleted Status');
    } catch (error) {
      console.log('error delete todo data---', error);
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
            {Static.welcome} to {profileUserData?.name}
          </Text>
        </View>

        <View style={styles.logoutBtnView}>
          <TouchableOpacity
            style={{flexDirection: 'row-reverse'}}
            onPress={logoutwithfirebase}>
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
        <View style={styles.card}>
          <View style={styles.cardModalView}>
            <Text style={styles.dailyTxt}>{Static.dailtTask}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(setModal(!showModal));
              }}>
              <Image source={plusicon} style={styles.plusIcontodo} />
            </TouchableOpacity>
          </View>

          <ScrollView>
            <TouchableOpacity>
              <Text style={styles.dailyTxt}> Name </Text>
            </TouchableOpacity>

            {todoData?.map((item: any, Index: any) => (
              <View key={item.id} style={styles.dailyTaskView}>
                <Text
                  style={[
                    globalStyles.subtxt,
                    {alignSelf: 'flex-start', paddingLeft: 20},
                  ]}>
                  {item?.title}
                </Text>
                <TouchableOpacity
                  onPress={() => updatedTodoListwithFB(item.id)}>
                  <Text>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteToDoDatawithFB(item.id)}>
                  <Image source={deleteIcon} style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          {/* modal start */}
          {modalofTodo()}
          {/* modal end */}
        </View>
      </View>
    </View>
  );
};

export default Home;
