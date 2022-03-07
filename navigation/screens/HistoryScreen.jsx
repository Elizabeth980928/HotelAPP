
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
import { Button,image} from "react-native-paper";
// import colors from "./components/colors";
import Icon from "react-native-vector-icons/MaterialIcons";


const Receipt = (navigation) => {
  return(
  
   <View>
       <View style={{width:"100%",height:200}}>
        <Image
          source={require("../../components/brown.jpeg")}
          style={style.image}
          resizeMode="cover"
        />
        </View>
     
    <View style ={{ alignItems: 'center'}}>
    <Text style ={{fontSize:96}}>H&E</Text>
    <Text style ={{fontSize:24, color: '#BB44A8',paddingRight:30, alignContent: 'center'}}>History</Text>
    </View>
     <View style={{paddingLeft:100,paddingTop:10}}>
    <View style={{ paddingLeft:80, backgroundColor: `#696969`, width: 250, height:220, borderRadius:10, paddingLeft: 10 }}>
      <Text style={{fontSize:25,color: 'white'}}>Melva Makweya</Text>
      <Text style={{fontSize:15,color: 'white'}}>Room: 001</Text>

      <Text style={{fontSize:25,color: 'white'}}>Date:</Text>
      <Text style={{fontSize:15,color: 'white'}}>22 nov 2022 - 30 Nov 2022</Text>  

      <Text style={{fontSize:25,color: 'white'}}>Rome Hotel</Text>
      <Text style={{fontSize:15,color: 'white'}}>R3500</Text> 
      <Text style={{fontSize:15,color: 'white'}}>cheque</Text>  

     <View style ={{paddingLeft:200}}>
      <Icon name="delete" size={25} color="white" />
     </View>
 
      
    </View>
      
              

    
    </View>
    
    </View>
  )

}
export default Receipt;


  
    
  const style = StyleSheet.create({
    container: {
       
        backgroundColor: "black",
        //bottom: 140,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
      },
      image: {
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 100,
        flex: 1,
      },
      image: {
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 100,
        flex: 1,
      },
      // headerBtn: {
      //   height: 50,
      //   width: 50,
  
      //   borderRadius: 10,
      //   justifyContent: "center",
      //   alignItems: "center",
      // },
  })