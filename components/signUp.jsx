import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import firebase from "firebase";
import Auth from "./firebase";
import { auth } from "./services/ServiceFile";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Snackbar } from "react-native-paper";
//createUserWithEmailAndPassword, onAuthStateChanged;

const SignUp = ({ navigation }) => {
  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);

  const changePasswordViewState = () => {
    setIsPasswordVisibility(!isPasswordVisibility);
  };

  const handleRegister = (values) => {
    setloading(true);
    Auth.SignUp(values, navigation)
      .then((res) => {
        console.log(res.status, "====>>>>>>>");
        setloading(false);

        if (res.status == "Failed") {
          setAlert(true);
          setalertMessage(res.details);
        }
      })
      .catch((err) => {
        setAlert(true);
        setalertMessage(err);
      });
  };

  const PassWordViewState = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changePasswordViewState()}
    >
      {isPasswordVisibility ? (
        <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
      ) : (
        <Icon
          name="ey
        
        
        e"
          type="font-awesome"
          style={{ marginLeft: 10 }}
        />
      )}
    </TouchableOpacity>
  );

  ///////////////////////
  const [FullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // const [background, setbackground] = useState("#8B9B71");

  const [visible, setvisible] = useState(false);
  const [message, setmessage] = useState('');

  const [user, setUser] = useState({});

  const onAuthStateChanged =
    (auth,
    (currentUser) => {
      setUser(currentUser);
    });

  const register = async () => {
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(registerEmail, registerPassword)
        .then((result) => {
          console.log(result.user);
          const currentUser = firebase.auth().currentUser;
          const db = firebase.firestore();
          db.collection("user").doc(currentUser.uid).set({
            email: currentUser.email,
            fullnames: FullName,
          }).then(res=>{
            setvisible(true);
            setmessage("Registered");
      
          }).catch(err=>{
            setvisible(true);
            setmessage(err);
            console.log(err, "++>++>");
          });
         
        });
       navigation.navigate("MainContainer");
     
    } catch (error) {
      setvisible(true);
      setmessage(error.message);
      console.log(error.message);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ width: "100%", height: 180 }}>
        <Image
          source={require("../components/pic1.jpeg")}
          style={style.image}
          resizeMode="cover"
        />
      </View>

      {/* bottom view */}
      <View style={style.bottomView}>
        <View style={{ padding: 10 }}>
          {/* FORM */}
          <View style={{ marginTop: 50 }}>
            <Text style={style.textStyle}>Sign Up</Text>
            <View style={style.inputContainer}>
              <Input
                placeholder="Username"
                style={style.input}
                leftIcon={<Icon name="user" type="font-awesome" />}
                //secureTextEntry={isPasswordVisibility}
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                placeholder="Email"
                onChangeText={(text) => setRegisterEmail(text)}
                style={style.input}
                leftIcon={<Icon name="envelope-o" type="font-awesome" />}
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                placeholder="Password"
                onChangeText={(text) => setRegisterPassword(text)}
                style={style.input}
                leftIcon={<Icon name="lock" type="font-awesome" />}
                secureTextEntry={isPasswordVisibility}
              />
            </View>

            <View style={style.inputContainer}>
              <Input
                placeholder="Confirm Password"
                style={style.input}
                leftIcon={<Icon name="lock" type="font-awesome" />}
                secureTextEntry={isPasswordVisibility}
              />
            </View>

            {/* button */}
            <View
              style={{
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onPress={register}
                title="Sign Up"
                containerStyle={{
                  marginTop: 10,
                  borderRadius: 15,
                  width: 150,
                }}
                buttonStyle={{
                  backgroundColor: "#8B9B71",
                }}
                titleStyle={{
                  color: "#FFE8E8",
                }}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                height: 100,
              }}
            ></View>
          </View>
        </View>
      </View>

      <Snackbar
        onDismiss={() => setvisible(false)}
        visible={visible}
        duration={7500}
        backgroundColor={"#3334e4"}
      >
        {message}
      </Snackbar>
    </View>
  );
};
export default SignUp;

const style = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: "white",
    bottom: 150,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  SignUp: {
    alignItems: "center",
    backgroundColor: "#f5eade",
    width: 100,
    justifyContent: "center",
    fontSize: 30,
  },

  textStyle: {
    fontSize: 30,
    lineHeight: 43,
    paddingTop: 1,
    marginBottom: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 100,
    flex: 1,
  },
});
