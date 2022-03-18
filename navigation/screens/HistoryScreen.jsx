import React, { useEffect, useState } from "react";
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
  FlatList
} from "react-native";
import { Button, image } from "react-native-paper";
// import colors from "./components/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import firebase from "firebase";
//import { firebase } from "@react-native-firebase/auth";
import { useRoute } from "@react-navigation/native";

const Receipt = (navigation, route) => {
  const db = firebase.firestore();
  const _db = firebase.firestore();
  const [history, setHistory] = useState([]);
  const params = useRoute().params;
  const title = route.params;
  const price = route.params;
  const checkinData = route.params;

  const GET_HISSTORY = () => {
    console.log("================TEST=====================");
    console.log("================TEST=====================");
    console.log("================TEST=====================");
    // please test it ===try again
    //nothing still
    _db
      .collection("booking")
      .get()
      .then((snap) => {
        let historyInfo = [];

        snap.forEach((data) => {
          let object = {
            guest: data.data().guest,
            location: data.data().location,
            price: data.data().price,
            title: data.data().title,
            checkin: data.data().checkin,
            checkout: data.data().checkout,
          }
          historyInfo.push(object);
        });

        setHistory(historyInfo);
        console.log(historyInfo, "===", history,">>>>>>>");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GET_HISSTORY();
  },[]);

  return (
    <View>
      <View style={{ width: "100%", height: 200 }}>
        <Image
          source={require("../../components/brown.jpeg")}
          style={style.image}
          resizeMode="cover"
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 76 }}>H&E</Text>
        <Text
          style={{
            fontSize: 24,
            color: "#BB44A8",
            paddingRight: 30,
            alignContent: "center",
          }}
        >
          History
        </Text>
      </View>

      <FlatList data={history} renderItem={(data, index) => (
         <View style={{ paddingVertical: 7, paddingHorizontal:15 }} key={index}>
         <View
           style={{
             paddingVertical: 7,
             paddingHorizontal:10,
             borderRadius: 10,
             backgroundColor:"#9e9f9f"
           }}
         >
           {/* <Text style={{ fontSize: 25, color: "red" }}>Melva Makweya</Text> */}
           {/* <Text style={{ fontSize: 25, color: "red" }}>Date:</Text> */}
           <Text style={{ fontSize: 25, color: "black" }}>{data.item.title}</Text>
           <Text style={{ fontSize: 15, color: "black" }}>Amount                            R {data.item.price}</Text>
           
           <Text style={{ fontSize: 15, color: "black" }}>Checkin Date                  {data.item.checkin}</Text>
           <Text style={{ fontSize: 15, color: "black" }}>Checkout Date               {data.item.checkout}</Text>
           <Text style={{ fontSize: 15, color: "black" }}>{data.item.checkinData}</Text>
 
           <View style={{justifyContent:'center' ,top:10 ,position:'absolute' ,right:10}}>
             <Icon name="delete" style={{left:10}} size={25} color="red" />
             
           <Text style={{textAlign:'center', fontSize: 15, color: new Date(data.item.checkout) > new Date()? "red":"black" }}> {new Date(data.item.checkout) > new Date()? "Expired":"Pending"}</Text>
           </View>
         </View>
       </View>
      )} />
     
     {/* <View style={{ paddingLeft: 100, paddingTop: 10 }} >
         <View
           style={{
             paddingLeft: 80,
             backgroundColor: `#696969`,
             width: 250,
             height: 220,
             borderRadius: 10,
             paddingLeft: 10,
           }}
         >
           <Text style={{ fontSize: 25, color: "red" }}>Melva Makweya</Text>
           <Text style={{ fontSize: 25, color: "red" }}>Date:</Text>
           <Text style={{ fontSize: 15, color: "red" }}>{history[0].checkin}</Text>
 
           <Text style={{ fontSize: 25, color: "red" }}> {history[0].title}</Text>
           <Text style={{ fontSize: 15, color: "red" }}>{history[0].price}</Text>
 
           <View style={{ paddingLeft: 190, paddingTop: -20 }}>
             <Icon name="delete" size={25} color="red" />
           </View>
         </View>
       </View> */}

    </View>
  );
};
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
});
