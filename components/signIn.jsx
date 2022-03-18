//import { Formik } from "formik";
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
import Auth from "./services/Auth";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerIndieID } from 'native-notify';
import axios from 'axios';
import { auth } from "./firebase";



const SignIn = ({ navigation }) => {
  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);

  const changePasswordViewState = () => {
    setIsPasswordVisibility(!isPasswordVisibility);
  };

  const PassWordViewState = () => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => changePasswordViewState()}
    >
      {isPasswordVisibility ? (
        <Icon name="eye-slash" type="font-awesome" style={{ marginLeft: 10 }} />
      ) : (
        <Icon name="eye" type="font-awesome" style={{ marginLeft: 10 }} />
      )}
    </TouchableOpacity>
  );

  const handleSignin = (values) => {
    //setloading(true);
    Auth.SignIn(values, navigation).then(async(res) => {
      // if (res.status == 'Failed') {
      //   setalert(true);
      //   setalertMessage(res.details);
      //   setloading(false)
      // }
      //setalert(true);
     // setloading(false)
      await registerIndieID("auth.currentUser.uid", 2242, 'fRLmT1LRTtSa4018bT9NeQ');
      navigation.navigate("MainContainer");
    }).catch(err => {
      // setalert(true);
      // setloading(false)
      // setalertMessage(err);
      console.log(err);
    });
  }

  const validate = Yup.object({
    email: Yup.string()
      .email("Not the correct format")
      .required("Please enter email address"),
    password: Yup.string()
      .min(6, "Atleast 6 Characters ")
      .required("Please enter confirm password")
  });

       
  // loginWithEmail: (email, password) => {
  //   return firebase.auth().signInWithEmailAndPassword(email, password)
  // };

  // const SignIn = () =>{
  //   auth
  //   .createUserWithEmailandPassword(email, password)
  //   .then(userCredentials =>{
  //     const user = userCredentials.user;
  //     console.log('Logged in with:', user,email);
  //   })
  //   .catch(error => alert(error.message))
  // }
 

  
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{width:"100%",height:250}}>
        <Image
          source={require("../components/pic1.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      {/* bottom view */}
      <View style={styles.bottomView}>
        <View style={{ padding: 20 }}>
          {/* FORM */}
          <View style={{ marginTop: 0 }}>
            
              <Text style={styles.textStyle}>Sign In</Text>

              <Formik 
              initialValues={{
              email: "",
              password: "",
            }}
            validateOnMount={true}
            validationSchema={validate}
            onSubmit={(values) =>
            handleSignin(values)
            }
              >
            {(props) => (
              <View>
              <View style={styles.inputContainer}>
              <Input
                placeholder="Email"
                style={styles.input}
                value={props.values.email}
                onChangeText={props.handleChange('email')}
                leftIcon={<Icon name="envelope-o" type="font-awesome" />}
              />
            </View>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Password"
                style={styles.input}
                value={props.values.password}
                onChangeText={props.handleChange('password')}
                leftIcon={<Icon name="lock" type="font-awesome" />}
                secureTextEntry={isPasswordVisibility}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("ResetPassword")}
              activeOpacity={0.7}
              style={{ padding: 10 ,fontSize:15 }}
            >
              <Text
                style={{ textAlign: "left", fontStyle: "italic", color: "red" }}
              >
              
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* button */}
            <View
              style={{
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onPress={props.handleSubmit}
                title="Sign In"
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
            >
              <Text style={{ fontWeight: "500",fontSize:15 }}>Don`t have an account ?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ fontWeight: "500", color: "red", fontSize:15 }}>Sign up</Text>
              </TouchableOpacity>
            </View>
            </View>
            
              
            )}
              </Formik>

            
          </View>
        </View>
      </View>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: "white",
    bottom: 90,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  signIn: {
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
    marginBottom:20
  },
  image: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 100,
    flex: 1,
  },
});
