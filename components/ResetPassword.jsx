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

const ResetPassword = ({ navigation }) => {
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
        <Icon name="ey
        
        
        e" type="font-awesome" style={{ marginLeft: 10 }} />
      )}
    </TouchableOpacity>
  );

  // const SignUp = () =>{
  //   auth
  //   .createUserWithEmailandPassword(email, password)
  //   .then(userCredentials =>{
  //     const user = userCredentials.user;
  //     console.log('Registered with:',user.email);
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
      <View style={styles.container}>
        <View style={{ padding: 40 }}>
          {/* FORM */}
          <View style={{ marginTop: 50 }}>
            <Text style={{fontSize:40,fontWeight:"bold"}}>Reset Password</Text>

            <View>
            <Text
              style={{ paddingTop: "100", fontWeight: "300", fontSize:15, color: "#3b3c3d" }}
            >
              <Text>Forgot your password?</Text>
              Worry not, we got you. Enter your email and check your email for
              link.
            </Text>
          </View>

           

            <View style={styles.inputContainer}>
              <Input
                placeholder="Email"
                style={styles.input}
                leftIcon={<Icon name="envelope-o" type="font-awesome" />}
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
                onPress={(handleSignUp) => navigation.navigate("signIn")}
                title="Reset"
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
    </View>
  );
};
export default ResetPassword;

const styles = StyleSheet.create({
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
  
});
