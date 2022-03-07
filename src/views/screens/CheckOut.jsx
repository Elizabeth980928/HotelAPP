import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text, 
  TouchableOpacity,

} from "react-native";
import { Icon, Input, Button } from "react-native-elements";
// import colors from "./components/colors";

const CheckOut = ({navigation}) => {
  return(
  
   <View>
     
       <View style={{width:"100%",height:240}}>
       <View style={{flexDirection:'row', paddingLeft:30}}>
      
      <Icon
                  name="arrow-back-ios"
                  size={20}
                  onPress={navigation.goBack}
                />

           

           
    </View>

        <Image
          source={require("../../../components/pay.jpg")}
          style={style.image}
          resizeMode="cover"
        ></Image>
        
        </View>

    <View style ={{ alignItems: 'center'}}>
    
    {/* <Text style ={{fontSize:96}}>H&E</Text> */}
    </View>

      <View style={{paddingLeft:80,paddingTop:40}}>
      <View style={{ paddingLeft:80, backgroundColor: `#696969`, width: 250, height:300, borderRadius:10, paddingLeft: 10 }}>
      <Text style={{fontSize:25,color: 'white'}}>Melva Makweya</Text>
      <Text style={{fontSize:15,color: 'white'}}>Room: 001</Text>

      <Text style={{fontSize:25,color: 'white'}}>Date:</Text>
      <Text style={{fontSize:15,color: 'white'}}>22 nov 2022 - 30 Nov 2022</Text>  

      <Text style={{fontSize:25,color: 'white'}}>Rome Hotel</Text>
      <Text style={{fontSize:15,color: 'white'}}>R3500</Text> 
      <Text style={{fontSize:15,color: 'white'}}>cheque</Text>  

      
    </View>
     
  
    <View
              style={{
                height: 100,
                paddingRight:70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onPress={() => navigation.navigate("Payment")}
                title="Checkout"
                containerStyle={{
                  marginTop: 10,
                  borderRadius: 15,
                  width: 150,
                }}
                buttonStyle={{
                  backgroundColor: "purple",
                }}
                titleStyle={{
                  color: "white",
                }}
              />
            </View>

    </View>
    </View>
  )
}
export default CheckOut;

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

    
  })
