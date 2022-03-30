import React, { useEffect, useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../../src/consts/colors.js";
import Icon from "react-native-vector-icons/MaterialIcons";
//import { LogoNodejs } from 'react-ionicons'

const { width } = Dimensions.get("screen");
import houses from "../../src/consts/houses";
//import { TouchableOpacity } from "react-native-gesture-handler";
//import { colors } from 'react-native-elements';
import firebase from "firebase";
import { Avatar } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";

import DatePicker from "react-native-datepicker";
// import BottomSheet from 'react-native-elements';

import BottomSheet from "react-native-gesture-bottom-sheet";
import { Button } from "react-native-elements/dist/buttons/Button";

const HomeScreen = ({ navigation, route }) => {
  const bottomSheet = useRef();

  const [date, setDate] = useState(new Date());
  const [audultPlus, setAudultPlus] = useState(1);
  const [childPlus, setChildPlus] = useState(1);
  const [roomPlus, setRoomPlus] = useState(1);

  const db = firebase.firestore();
  const [hotels, setHotels] = useState([]);
  const [query, setQuery] = useState([]);

  // const { price } = route.params;
  // const loc = location;
  // // const n = name;
  // // const h = hotel;
  // // const u = url;

  // const rn = roomNum;

  // console.log(loc);
  // // console.log(id);
  // // console.log(n);
  // // console.log(u);

  // console.log(loc);
  // const [searchLocation, setSearchLocation]

  useEffect(() => {
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

  // const optionsList = [
  //   { img: require("../../components/house4.jpg") },
  //   { img: require("../../components/house1.jpg") },
  // ];
  const categoryList = ["All"];

  const ListCategories = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryListContainer}>
        {categoryList.map((category, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedCategoryIndex(index)}
          >
            <Text
              style={[
                style.categoryListText,
                index == selectedCategoryIndex && style.activeCategoryListText,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  // const ListOptions = () => {
  //   return (
  //     <View style={style.optionListsContainer}>
  //       {optionsList.map((option, index) => (
  //         <View style={style.optionsCard} key={index}>
  //           {/* House image */}
  //           <Image source={option.img} style={style.optionsCardImage} />

  //           {/* Option title */}
  //           <Text style={{ marginTop: 10, fontSize: 13 }}>Most Rated</Text>
  //           <View style={{ flexDirection: "row" }}>
  //             <Icon name="star" size={20} color={colors.purple} />
  //             <Icon name="star" size={20} color={colors.purple} />
  //             <Icon name="star" size={20} color={colors.purple} />
  //             <Icon name="star" size={20} color={colors.purple} />
  //             <Icon name="star" size={20} color={colors.grey} />
  //           </View>
  //         </View>
  //       ))}
  //     </View>
  //   );
  // };
  const Card = ({ house }) => {
    return (
      
        <View>
          {/* {hotels.map((element) => (
           
            ))} */}
          {hotels.map((element) => (
            <>
              {/* <Text>{element.beds}</Text>
              <Text>{element.title}</Text>
              <Text>{element.location}</Text> */}
              {/* <Text>{element.price}</Text> */}

            
                <View style={[style.card, { marginVertical: 10 }]}>
                  {/* House image */}

                  <TouchableOpacity
                    onPress={() =>
                    navigation.navigate("SearchRooms", {
                    title: element.title,
                    price: element.price,
                    location: element.location,
                  })
                }
              >
                  <Image
                    source={{ uri: element.url }}
                    style={style.cardImage}
                  />
                  </TouchableOpacity>
                  
                  <View style={{ marginTop: 5 }}>
                    {/* Title and price container */}

                    <View style={{ paddingHorizontal: 15, Horizontal: 5 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                          {/* {house.title} */} {element.title}
                        </Text>
                       <View  style={{ flexDirection:'row',justifyContent:'flex-start'}}>
                         <Text
                          style={{
                            fontWeight: "bold",
                            color: colors.blue,
                            fontSize: 16,
                          }}
                        ></Text>
                        </View>
                      </View>

                      {/* Location text */}

                      <View  style={{ flexDirection:'row',justifyContent:'flex-start'}}>
                         {/* <View><Icon type="ionicon" name="location"/></View> */}
                         <Icon name="room" color={colors.purple} size={25} />
                          <Text
                          style={{
                            fontWeight: "bold",
                            color: colors.grey,
                            fontSize: 16,
                          }}
                        >{element.location}</Text>
                        </View>

                   
                      <View style={{ marginTop: 10, flexDirection: "row" }}>
              
                        <View style={{ paddingLeft: 160, paddingTop: 10 }}>
                        
                          {/* <TouchableOpacity
                            onPress={() => navigation.navigate("Map")}
                            activeOpacity={0.7}
                           >
                            <Image
                              style={style.profileImage}
                              source={require("../../components/map1.jpg")}
                            />
                          </TouchableOpacity> */}
                         

                        </View>
                      </View>

                      
                    </View>
                  </View>
                </View>
              
            </>
          ))}
        </View>

      
    );
  };

  const Search = (queries) => {
    // const q = query(loc, where("location", "==", queries));
    // console.log(q);

    console.log("RUUNING", queries);
    db.collection("Hotel")
      .where("location", "==", queries)
      .get()
      .then(async (querySnapshot) => {
        let results = [];

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, "============= => ", doc.data());
          results.push(doc.data());
        });
        console.log("res: ", "results");
        setHotels(results);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      {/* Header container */}
      <View style={style.header}>
        <View>
          <Text
            style={{ color: colors.grey, fontSize: 18, fontStyle: "italic" }}
          >
            {" "}
            Find exclusive deals, and much more....
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          {/* Input and sort button container */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 25,
              width: 400,
            }}
          >
            <View style={style.searchInputContainer}>
              <Icon name="search" color={colors.grey} size={25} />
              <TextInput
                placeholder="Search for location"
                value={query}
                onChangeText={(e) => {
                  Search(e);
                }}
              />
            </View>
            <TouchableOpacity
                      onPress={() => navigation.navigate("Map")}
                      activeOpacity={0.7}
                    >
                      <View style={style.sortBtn}>
                        <Icon name="room" color={colors.white} size={25} />
                      </View>
                    </TouchableOpacity>

            {/* <TouchableOpacity>
              <View style={style.sortBtn}>
                <Icon name="tune" color={colors.white} size={25} />
              </View>
            </TouchableOpacity> */}

          </View>

          {/* Render list options */}
          {/* <ListOptions
          data={houses}
          renderItem={({ item }) => <Card house={item} />}
        /> */}

          {/* Render categories */}
          <ListCategories />

          {/* Render Card */}
          <FlatList
            snapToInterval={width - 20}
            showHorcrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 20, paddingHorizontal: 20 }}
            data={houses}
            renderItem={({ item }) => <Card house={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 15,
    marginLeft: 100,
    marginTop: -50,
  },
  optionsCardImage: {
    height: 50,
    width: 90,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: colors.light,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  sortBtn: {
    backgroundColor: colors.purple,
    height: 50,
    width: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  optionsCard: {
    height: 210,
    width: width / 2 - 30,
    elevation: 15,
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionsCardImage: {
    width: "90%",
    height: 100,
    borderRadius: 15,
    alignItems: "center",
  },
  optionListsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  categoryListText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 5,
    color: colors.grey,
  },
  activeCategoryListText: {
    color: colors.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    paddingHorizontal: 40,
  },
  card: {
    height: 250,
    backgroundColor: colors.white,
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 0,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,

    borderTopRightRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: colors.grey },

  button: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#8559da",
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowRadius: 100,
    elevation: 10,
    marginTop: 30,
    height: 200,
    //width:200,
    width: "90%",
    borderRadius: 10,
    marginLeft: 10,

    // height: "20%",
    // width: "93%",
    // marginLeft: 10,
    // paddingTop: 50,
    // marginTop: 50,
    // //backgroundColor:"red",
    // elevation: 4,
    // borderRadius: 10,
    // backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    color: "purple",
    fontSize: 15,
    // fontStyle:'italics',
    // fontWeight:'bold'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backBox: {
    height: "70%",
    width: "95%",
    marginLeft: 10,
    paddingTop: 50,
    marginTop: 50,
    //backgroundColor:"red",
    elevation: 4,
    borderRadius: 10,
    backgroundColor: "white",
  },

  pic: {
    // backgroundColor:"red",

    alignItems: "center",
    marginTop: 20,
    borderRadius: 100,
  },
  bookNow: {
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    marginTop: 50,
    // marginLeft:52,
    width: "40%",
    height: "8%",
    borderRadius: 15,
    marginLeft: "30%",
  },
  bookText: {
    fontWeight: "bold",
    marginLeft: "25%",
    color: "white",
  },
  datePicker: {
    marginLeft: 20,
    backgroundColor: "red",
  },
  checkOut: {
    marginLeft: 30,
    flexDirection: "row",
    paddingTop: 10,
  },
  checkOutText: {
    // backgroundColor:"red",
    paddingRight: 20,
    marginTop: 10,
  },
  checkInText: {
    // backgroundColor:"red",
    paddingRight: 30,
    marginTop: 10,
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
    // backgroundColor: "red",
  },
  content: {
    //backgroundColor:"blue",
    marginTop: "40%",
  },
  checkin: {
    marginLeft: 30,
    flexDirection: "row",
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
export default HomeScreen;
