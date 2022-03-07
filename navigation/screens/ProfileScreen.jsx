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

import { Formik } from "formik";
import * as Yup from 'yup';
import colors from '../../src/consts/colors.js'
import { Icon, Input, Button } from "react-native-elements";
import { IconButton, Colors } from "react-native-paper";
import UploadImage from "./UploadImage";

const ProfileScreen = ({ navigation }) => {

  
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState(true);
  const [alertMessage, setalertMessage] = useState('');

  const validate = Yup.object({

    name: Yup.string()
    .matches(/^[a-zA-Z ]+$/,"invalid name")
    .required("Please enter your name"),
    email: Yup.string()
      .email("Not the correct format")
      .required("Please enter email address"),

    ContactNo: Yup.string()
      .matches(/^0(6|7|8){1}[0-9]{1}[0-9]{7}$/, "only 10 characters required")
      .required("Please enter teh correct number")
  });

  const handleUpdate=(values)=>{
    console.log(values);


  }

  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View style={{ width: "100%", height: 200 }}>
        <Image
          source={require("../../components/brown.jpeg")}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity>
        <Icon name="add" color={colors.grey} size={25} />
        </TouchableOpacity>
      
      </View>

      <Formik
        initialValues={{
              email: "",
              name: "",
              ContactNo: "",
            }}
            validateOnMount={true}
            validationSchema={validate}
            onSubmit={(values) =>
              handleUpdate(values)
            }
      >
      {(props) => (
        <View style={styles.bottomView}>
          <View style={{ padding: 15 }}>
            {/* FORM */}

            <View style={{ marginTop: 0 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textStyle}>Elizabeth</Text>
                <Image
                  style={{ height: 50, width: 50, borderRadius: 25 }}
                  source={require("../../components/portia.jpg")}
                />
              </View>
  
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Names"
                  style={styles.input}
                  onChangeText={props.handleChange('name')}
                  value={props.values.name}
                 
                errorMessage={props.errors.name? props.errors.name:null}
                />
              </View>
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Email"
                  style={styles.input}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
                errorMessage={props.errors.email? props.errors.email:null}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Input
                  placeholder="Contact No"
                  style={styles.input}
                  onChangeText={props.handleChange('ContactNo')}
                  value={props.values.ContactNo}
           
                  errorMessage={props.errors.ContactNo? props.errors.ContactNo:null}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  height: 100,
                }}
               >
          
                <View
                  style={{
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onPress={props.handleSubmit}
                    title="Update"
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
              </View>
            </View>
          </View>
        </View>
      )}
        
      </Formik>
      {/* bottom view */}
    </View>
  );
};
export default ProfileScreen;

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
    fontSize: 10,
  },
  textStyle: {
    fontSize: 30,
    lineHeight: 30,
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


