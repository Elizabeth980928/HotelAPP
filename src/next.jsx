import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
// import colors from "./components/colors";

const Next = ({ navigation }) => {
  return (
    <View>
      <View style={{ width: "100%", height: 240 }}>
        <View style={{ flexDirection: "row", paddingLeft: 30 }}>
          <Icon name="arrow-back-ios" size={20} onPress={navigation.goBack} />
        </View>

        <Image
          source={require("../components/pay.jpg")}
          style={style.image}
          resizeMode="cover"
        ></Image>
      </View>

      <View style={{ alignItems: "center" }}>
        {/* <Text style ={{fontSize:96}}>H&E</Text> */}
      </View>

      <View style={{ paddingLeft: 80, paddingTop: 40 }}>
        <View
          style={{
            paddingLeft: 80,
            backgroundColor: `#696969`,
            width: 250,
            height: 300,
            borderRadius: 10,
            paddingLeft: 10,
          }}
        >

        <Text style = {{color:"white", fontSize: 15,paddingTop:100}}>
            Congratulations your Payment is Approved!!!
        </Text>

          <View style={{  paddingLeft: 60 }}>
            <Icon name="check" size={70} color="white" />
          </View>

        </View>

        <View
          style={{
            height: 100,
            paddingRight: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onPress={() => navigation.navigate("Receipt")}
            title="Confirm"
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
  );
};
export default Next;

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
});
