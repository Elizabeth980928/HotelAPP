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
import * as Yup from 'yup'
//import { withFirebaseHOC } from './firebase';
import firebase from "firebase";
import Auth from "./firebase";
import { auth } from "./services/ServiceFile";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email')
})

const ForgotPassword = ({ navigation }) => {
  const [isPasswordVisibility, setIsPasswordVisibility] = useState(true);

  const handlePasswordReset = async (values, actions) => {
    const { email } = values

    try {
      await this.props.firebase.passwordReset(email)
      console.log('Password reset email sent successfully')
      this.props.navigation.navigate('Login')
    } catch (error) {
      actions.setFieldError('general', error.message)
    }
  }

    // resetPassword(email)
    // {
    //   auth.sendPasswordResetEmail(email)
    //   .then(res=> {
    //     console.log('Password reset email sent successfully')
    //   }).catch(err=>{

    //   })
    // }


   return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>
      {/* bottom view */}
      <View style={styles.container}>
        <View style={{ padding: 40 }}>
          {/* FORM */}
          <View style={styles.Text}></View>
          <View>
            <Text
              style={{ paddingTop: "50", fontWeight: "300", color: "#3b3c3d" }}
            >
              <Text>Forgot your password?</Text>
              Worry not, we got you. Enter your email and check your email for
              link.
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Input
              placeholder="Enter your email"
              style={styles.input}
              leftIcon={<Icon name="envelope-o" type="font-awesome" />}
            />
          </View>
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
            onPress={() => navigation.navigate("signIn")}
            title="Verification"
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
    </ScrollView>
  );
};
export default ForgotPassword;


const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: "white",
    bottom: 50,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
});