
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  View,
  Text,
} from "react-native";
import { Button } from "react-native-paper";
import colors from './colors';

const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar translucent backgroundColor={colors.transparent} />
      {<Image source={require("../components/pic1.jpeg")} style={styles.image} />}
      {/* Title and text container */}
      <View style={{ paddingHorizontal: 60, paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={styles.title}>Looking for Hotel?</Text>
        </View>

        {/* Text container */}
        <View style={{ marginTop: 10, fontStyle: "italic", paddingLeft: 70 }}>
          <Text style={styles.textStyle}>Find your hotel</Text>
          <Text style={styles.textStyle}>easily with us!!!</Text>
        </View>
      </View>

      {/* /* button */}
      <View
        style={{
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onPress={() => navigation.navigate('signIn')}
          labelStyle={{color: "#FFE8E8",}}
          style={{
            marginTop: 25,
            borderRadius: 15,
            backgroundColor: "#8B9B71",
          }}
        >let's get started</Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 430,
    width: "100%",
    borderBottomLeftRadius: 100,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingLeft: 50,
    fontStyle: "italic",
  },
   textStyle: { fontSize: 20, color: colors.grey, fontStyle: "italic" },
});
export default GetStarted;

