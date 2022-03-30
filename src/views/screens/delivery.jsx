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
    Button
  } from "react-native";
  

export default function Delivery({navigation}) {
    return(
    <View>
    <View style={{width:"100%",height:'85%'}}>
    
        <Image
          source={require("../../../components/congrats.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
       
      </View>
  

            <TouchableOpacity
            style={styles.bookNow}
            onPress={() =>
              navigation.navigate("MainContainer")
            }
          >
            <Text style={styles.bookText}>Go back to Home</Text>
          </TouchableOpacity>
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
    bookNow: {
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: "purple",
      marginTop: 50,
      // marginLeft:52,
      width: "50%",
      height: "5%",
      borderRadius: 5,
      marginLeft: "30%",
      color: "white",
    },
    bookText: {
      fontWeight: "normal",
      marginLeft: "25%",
      color: "white",
    },
    SignUp: {
      alignItems: "center",
      backgroundColor: "#f5eade",
      width: 100,
      justifyContent: "center",
      fontSize: 30,
    },
  });
  