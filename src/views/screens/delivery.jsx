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
  } from "react-native";
  

export default function Delivery(navigation) {
    return(
    <View>
    <View style={{width:"100%",height:'100%'}}>
    
        <Image
          source={require("../../../components/congrats.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
       
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
   
    image: {
      height: "100%",
      width: "100%",
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      flex: 1,
    },
  });
  