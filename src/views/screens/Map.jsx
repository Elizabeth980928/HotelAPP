import React, { useState,useEffect } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  onPress,
  TextInput,
} from "react-native";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../../../src/consts/colors";
import * as Location from 'expo-location';
//import GetLocation from "react-native-get-location";

export default function Map(navigation) {


  const [lat,setLati]=useState()
  const [lng,setLng]=useState()
   const getLocation=()=>{
   
   }
  
  useEffect(()=>{
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords,'<<<<<<');
      setLati(location.coords.latitude)
      setLng(location.coords.longitude)
    })();
  },[])
  let location = {
  
    latitude: lat||23.259933,
    longitude: lng||77.412613,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  };



  return (
    <View>
      <View>
        <TouchableOpacity>
          <View style={{ paddingTop: 50, paddingLeft: 10 }}>
            <Icon name="arrow-back-ios" size={20} onPress={navigation.goBack} />
          </View>
        </TouchableOpacity>

        {/* <View style={style.searchInputContainer}>
          <Icon name="search" size={30} style={{ marginLeft: 20 ,color: 'black'}} />
          <TextInput
            placeholder="Search"
            style={{ fontSize: 20, paddingLeft: 10 }}
          />
        </View> */}
      </View>

      <View style={{ paddingTop: 10 }}></View>
      <MapView
        style={[{ height: "100%", width: "100%" }]}
        provider={PROVIDER_GOOGLE}
        mapType="standard"
        region={location}
           
          //  ref={MapView}
          //  zoomControlEnabled
          //  focusable
          //  hasTVPreferredFocus
      
      ></MapView>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  InputContainer: {
    height: 50,
    backgroundColor: colors.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
  },
  searchInputContainer: {
    height: 50,
    width: 300,
    backgroundColor: colors.grey,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
});
