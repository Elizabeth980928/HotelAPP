import React, { useState, useEffect } from "react";
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

import Icon from "react-native-vector-icons/MaterialIcons";
// import COLORS from '../../consts/colors';
import colors from "../../../src/consts/colors";
//import DatePicker from "react-datepicker";
import houses from "../../consts/houses";
//import hotels from '../../consts/hotels';
import firebase from "firebase";
import BookingScreen from "../../../navigation/screens/BookingsScreen";
import { useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const Rooms = ({ navigation, route }) => {
  const house = route.params;
  const item = route.params;
  const title = route.params.title;
  const params = useRoute().params;
  
  console.log(title);

  const InteriorCard = ({ interior }) => {
    return <Image source={interior} style={style.interiorImage} />;
  };
  const [date, setDate] = useState(new Date());

  const db = firebase.firestore();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    console.log(params.checkinData);
    let hotelInfo = [];
    db.collection("Hotel")
      .get()
      .then((res) => {
        res.forEach((action) => {
          hotelInfo.push({ ...action.data(), id: action.id });
        });
        setHotels(hotelInfo);
        // console.log(hot)
      });
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {title} Rooms
          </Text>
        </View>
        {/* House image */}
        {hotels.map((element) => (
          <>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate("DetailsScreen", {
                  id: element.id,
                  url: element.url2,
                  checkinData: params.checkinData,
                })
              }
            >
              <View style={style.backgroundImageContainer}>
                <ImageBackground
                  style={style.backgroundImage}
                  source={{ uri: element.url2 }}
                ></ImageBackground>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",

                    
                  }}
                >
                  <Text style={{ fontWeight: "bold"}}>{element.Room}</Text>
                  <Text style ={{paddingLeft: 120,color:'purple'}}>R{element.price} Per night</Text>
                </View>

              </View>
            </TouchableOpacity>
          </>
        ))}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 3,
    margin: 20,
    // marginTop: 25,
    alignItems: "center",
    height: 200,
    width: "90%",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    paddingVertical: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginLeft: 100,
    marginTop: 240,
  },
  headerBtn: {
    height: 50,
    width: 50,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingTag: {
    height: 30,
    width: 35,
    backgroundColor: colors.purple,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  interiorImage: {
    width: width / 3 - 20,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  footer: {
    height: 70,
    backgroundColor: colors.light,
    borderRadius: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  bookNowBtn: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.purple,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: 110,
    height: 37,
  },
  iconContainer: {
    position: "absolute",
    height: 40,
    width: 40,
    backgroundColor: colors.purple,
    top: 250,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  detailsContainer: { flex: 1, paddingHorizontal: 20, marginTop: 40 },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: colors.grey },
});

export default Rooms;
