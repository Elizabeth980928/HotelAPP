import React, { useState,useEffect} from "react";
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
import BookingScreen from "../../../navigation/screens/BookingsScreen";
import firebase from "firebase";
import { useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("screen");
const DetailsScreen = ({ navigation }) => {

  const params = useRoute().params
  const house = params;
  const item = params;
  const InteriorCard = ({ interior }) => {
    return <Image source={interior} style={style.interiorImage} />;
  };
  const [date, setDate] = useState(new Date());

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
    <ScrollView>
      {/* <View style={{ flex: 1, backgroundColor: colors.white }}>
        <ScrollView showsVerticalScrollIndicator={false}>
         

          <View style={style.backgroundImageContainer}>
            <ImageBackground
              style={style.backgroundImage}
              source={{uri: null} } 
            >
              <View style={style.header}>
                <View style={style.headerBtn}>
                  <Icon
                    name="arrow-back-ios"
                    size={20}
                    onPress={navigation.goBack}
                  />
                </View>
                
              </View>
            </ImageBackground>
          </View>

          <View style={style.detailsContainer}>
  
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {hotels.title}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={style.ratingTag}>
                  <Text style={{ color: colors.white }}>4.8</Text>
                </View>
                <Text style={{ fontSize: 13, marginLeft: 5 }}></Text>
               
              </View>
              
            </View>

           
            <Text style={{ fontSize: 16, color: colors.grey }}>
              {hotels.location}
            </Text>

           
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={style.facility}>
                <Icon name="hotel" size={18} />
                <Text style={style.facilityText}>2</Text>
              </View>
              <View style={style.facility}>
                <Icon name="bathtub" size={18} />
                <Text style={style.facilityText}>3</Text>
              </View>
              <View style={style.facility}>
                <Icon name="aspect-ratio" size={18} />
                <Text style={style.facilityText}>100m area</Text>
              </View>
            </View>
            <Text style={{ marginTop: 20, color: colors.grey }}></Text>

           
            <FlatList
              contentContainerStyle={{ marginTop: 20 }}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, key) => key.toString()}
              data={element.interior}
              renderItem={({ item }) => <InteriorCard interior={item} />}
            />

            <View style={style.footer}>
              <View>
                <Text
                  style={{
                    color: colors.purple,
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                 {/* R{item?.price}  <Text>R 3500</Text> 
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.grey,
                    fontWeight: "bold",
                  }}
                >
                  Total Price
                </Text>
              </View>

              <View style={style.detailsContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                   <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {house?.title}
                  </Text>  
                </View>
              </View>

              <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, key) => key.toString()}
                data={house?.interiors}
                renderItem={({ item }) => <InteriorCard interior={item} />}
              />

               {/* {/* <TouchableOpacity
                onPress={() => navigation.navigate("Payment",{'price':'R 3500'})}
                activeOpacity={0.7}
                style={{ paddingLeft: 150 }}
              ></TouchableOpacity>  
              <View style={style.bookNowBtn}> 
              

                <TouchableOpacity 
                  onPress={() => navigation.navigate("Payment",{'price':'R3500'})}
                  activeOpacity={0.7}
                >
                  <Text style={{ color: colors.white }}>Reserve</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ScrollView>
      </View> */}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  backgroundImageContainer: {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 15,
    alignItems: "center",
    height: 300,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
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
    marginLeft:100,
    marginTop:240
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

export default DetailsScreen;
