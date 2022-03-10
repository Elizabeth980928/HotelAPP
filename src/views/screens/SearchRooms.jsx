
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInputComponent,
  ImageBackground,
  Pressable,
} from "react-native";
// import { State, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import DatePicker from "react-native-datepicker";
import firebase from "firebase";
import { Button, Image, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
// import { Avatar } from "react-native-elements/dist/avatar/Avatar";
// import animated from 'react-native-reanimated'

const searchroom = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [guest, setGuest] = useState(1);
  const [checkin, setCheckin] = useState("");
  const [checkout, setcheckout] = useState("");
  const [room, setRoom] = useState(1);
  const price = route.params.price;
  const house = route.params;
  const item = route.params;
  const title = route.params.title;

  const params = useRoute().params;

  const id = route.params.id;
  const url = route.params.url;
  console.log ("----", url);
  console.log(id)
  const db = firebase.firestore();
  const [hotels, setHotels] = useState();

  useEffect(async() => {
    
    await db.collection("Hotel").doc(params.id)
      .get()
      .then((res) =>
      
      {
        let data = {
          title: res.data().title,
          beds: res.data().beds,
          interior: res.data().interior,
          location: res.data().location,
          price: res.data().price,
          shower: res.data().shower,
          url: res.data().url,
          url2: res.data().url2,
          url3: res.data().url3,
          Room: res.data().Room,
        }
       setHotels(data);
       console.log(data.Object.title,"==>>>>");
      });

  }, []);

  return (
    <>
      <SafeAreaView>  
    
        <View style={{ width: "100%", height: 250 }}>
        
          <Image
             source={{uri:url} } 
            style={style.image}
            resizeMode="cover"
          />
        </View>
        <View style={style.container}>
          <View style={style.checkin}>
            <Text style={style.checkInText}>Check - In</Text>

            <View>
              <DatePicker
                style={style.datePicker}
                date={date}
                mode="date"
                // placeholder="select date"
                format="YYYY-MM-DD"
                // minDate="2016-05-01"
                // maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  setCheckin(date);
                }}
              />
            </View>
          </View>
          <View style={style.checkOut}>
            <Text style={style.checkOutText}>Check - Out</Text>
            <DatePicker
              style={style.datePicker}
              // style={{ width: 165 }}
              date={date}
              mode="date"
              // placeholder="select date"
              format="YYYY-MM-DD"
              // minDate="2016-05-01"
              // maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date) => {
                setcheckout(date);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              marginTop: 20,
              width: "90%",
              backgroundColor: "brown",
              borderRadius: 10,
              marginLeft: 16,
              padding: 20,
              color: "white",
            }}
          >
            <View style={style.room}>
              <Text style={style.roomText}>No of Guest</Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 10,
                  padding: 10,
                  width: 90,
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <TouchableOpacity
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  disabled={guest == 1 ? true : false}
                  onPress={() => setGuest(Math.max(1, guest - 1))}
                >
                  <Feather name="minus" size={22} color="black" />
                </TouchableOpacity>
                <Text style={{ fontsize: 26 }}> {guest}</Text>
                <TouchableOpacity
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setGuest(Math.max(1, guest + 1))}
                >
                  <Feather name="plus" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={style.room}>
              <Text style={style.roomText}>No Rooms </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 10,
                  padding: 10,
                  width: 90,
                  alignItems: "center",
                  backgroundColor: "white",
                }}
              >
                <TouchableOpacity
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setChildPlus(Math.max(1, room - 1))}
                >
                  <Feather name="minus" size={22} color="black" />
                </TouchableOpacity>
                <Text style={{ fontsize: 21 }}> {room}</Text>
                <TouchableOpacity
                  style={[
                    style.btnadd,
                    { backgroundColor: "white", flexDirection: "row" },
                  ]}
                  onPress={() => setGuest(Math.max(1, room + 1))}
                >
                  <Feather name="plus" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={style.bookNow}
            onPress={() =>
              navigation.navigate("Rooms", {
                checkinData: {
                  title: title,
                  price: price,
                  checkin: checkin,
                  checkout: checkout,
                  guest: guest,
                },
              })
            }
          >
            <Text style={style.bookText}>Search Room</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
const style = StyleSheet.create({
  backBox: {
    height: "60%",
    width: "95%",
    marginLeft: 10,
    paddingTop: 50,
    marginTop: 50,
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: 100,
    flex: 1,
  },

  pic: {
    alignItems: "center",
    marginTop: 20,
    borderRadius: 200,
  },
  bookNow: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "brown",
    marginTop: 50,
    // marginLeft:52,
    width: "30%",
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
  datePicker: {
    marginLeft: 20,
    backgroundColor: "white",
  },
  checkOut: {
    marginLeft: 40,
    flexDirection: "row",
    paddingTop: 10,
  },
  checkOutText: {
    backgroundColor: "white",
    paddingRight: 20,
    marginTop: 10,
    fontSize: 15,
  },

  checkInText: {
    paddingRight: 20,
    marginTop: 10,
    fontSize: 15,
  },
  room: {
    flexDirection: "row",
    padding: 10,
    // width:"80%",
  },
  roomText: {
    marginTop: 8,
    paddingLeft: 20,
    paddingRight: 80,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  content: {
    //backgroundColor:"blue",
    marginTop: "40%",
  },
  checkin: {
    marginLeft: 49,
    flexDirection: "row",
    paddingTop: 10,
  },
  rooms: {
    marginLeft: 30,
    marginTop: 30,
    flexDirection: "row",
    paddingLeft: 20,
  },
  search: {
    // backgroundColor: "red",
    alignContent: "center",
    marginLeft: "35%",
    padding: 10,
  },
  crown: {
    width: 100,
    height: 100,
    backgroundColor: "white",

    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 11,

    paddingLeft: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  crownContainer: {
    flexDirection: "row",
    padding: 10,
  },
  heading: {
    width: "40%",
    marginLeft: "25%",
    marginTop: 40,
    marginBottom: 25,
    //backgroundColor:"red",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    backgroundColor: "white",
    height: "100%",
  },
});
export default searchroom;
