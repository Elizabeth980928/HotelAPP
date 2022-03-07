
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text, styles
} from "react-native";
import { Button } from "react-native-paper";
// import colors from "./components/colors";

const Receipt = () => {
  return(
    
      
   <View>
    <View style ={{ alignItems: 'center'}}>
    <Text style ={{fontSize:96}}>H&E</Text>
    <Text style ={{fontSize:24, color: '#BB44A8',paddingRight:30, alignContent: 'center'}}>Receipt</Text>
    </View>
     <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
    <View style={{ paddingRight:80, backgroundColor: `#696969`, width: 250, height:300, borderRadius:10, paddingLeft: 10 }}>
      <Text style={{fontSize:25,color: 'white'}}>Name:</Text>
      <Text style={{fontSize:15,color: 'white'}}>Melva Makwenya</Text>

      <Text style={{fontSize:25,color: 'white'}}>Phone Number:</Text>
      <Text style={{fontSize:15,color: 'white'}}>0606119421</Text>  

      <Text style={{fontSize:25,color: 'white'}}>Email:</Text>
      <Text style={{fontSize:15,color: 'white'}}>melva@gmail.com</Text>

      <Text style={{fontSize:25,color: 'white'}}>Payment Method</Text>
      <Text style={{fontSize:15,color: 'white'}}>credit card</Text>
    </View>

    <View style={{ paddingLeft:80, backgroundColor: `#696969`, width: 250, height:300, borderRadius:10, paddingLeft: 10 }}>
      <Text style={{fontSize:25,color: 'white'}}>Receipt No:</Text>
      <Text style={{fontSize:15,color: 'white'}}>001</Text>

      <Text style={{fontSize:25,color: 'white'}}>Date:</Text>
      <Text style={{fontSize:15,color: 'white'}}>22 nov 2022 - 30 Nov 2022</Text>  

      
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
  })