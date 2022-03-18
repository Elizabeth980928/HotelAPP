import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Image,
} from "react-native";
import Icons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CheckBox } from "react-native-elements";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import { auth, db } from "../../../components/firebase";
import firebase from "firebase";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
// import { useRoute } from '@react-navigation/native'

// import { Secret_key, STRIPE_PUBLISHABLE_KEY } from './keys';

const Secret_key =
  "sk_test_51KVx5CGO2EMRHDu8QjiwnjsD4ovj4AmUzlQMSnVZYQTqJFRzjK74KgAwoR6skXISpR0VrMktAJj1sweS8uFN7Zqr00wusG43lN";

const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51KVx5CGO2EMRHDu8yJ4FEXMFSwZePbv2fM53fv07sXaQ6NDykTzrcxf7Hz8mD65FLVfviMzMpmTe8STDQoiHRqai00qYfABINj";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
// const params = useRoute().params;

// use useEffect

// components
const CURRENCY = "USD";
var CARD_TOKEN = null;

// function
function getCreditCardToken(creditCardData) {
  // alert()
  const card = {
    "card[number]": creditCardData.values.number.replace(/ /g, ""),
    "card[exp_month]": creditCardData.values.expiry.split("/")[0],
    "card[exp_year]": creditCardData.values.expiry.split("/")[1],
    "card[cvc]": creditCardData.values.cvc,
  };
  return fetch("https://api.stripe.com/v1/tokens", {
    headers: {
      // Use the correct MIME type for your server
      Accept: "application/json",
      // Use the correct Content Type to send data to Stripe
      "Content-Type": "application/x-www-form-urlencoded",
      // Use the Stripe publishable key as Bearer
      Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`,
    },
    // Use a proper HTTP method
    method: "post",
    // Format the credit card data to a string of key-value pairs
    // divided by &
    body: Object.keys(card)
      .map((key) => key + "=" + card[key])
      .join("&"),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
/**
 * The method imitates a request to our server.
 *
 * @param creditCardToken
 * @return {Promise<Response>}
 */
function subscribeUser(creditCardToken) {
  return new Promise((resolve) => {
    console.log("Credit card token\n", creditCardToken);
    CARD_TOKEN = creditCardToken.id;
    setTimeout(() => {
      resolve({ status: true });
    }, 1000);
  });
}

const Payment = ({ navigation }) => {
  // checkbox for saving card details
  const [checkBoxValue, setCheckBoxValue] = useState(false);

  const [CardInput, setCardInput] = React.useState({});

  const [bookings, setBookings] = useState([]);

  const route = useRoute();

  const notificationKey = route.params;

  console.log("================", notificationKey, "========================");
  const { title, price } = route.params;
  console.log(route.params);

  const room = route.params;
  // const totalPrice = route.params;

  // for(let i in bookings){
  //     console.log(bookings[i].key)
  // }
  // onsubmit

  //const db = firebase.Firestore();
  const _db = firebase.firestore();

  const onSubmit = async () => {
    if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
      ToastAndroid.show("Invalid credit card, please verify your card.");
      //   alert('Invalid Credit Card');
      return false;
    }

    let creditCardToken;
    try {
      // Create a credit card token
      creditCardToken = await getCreditCardToken(CardInput);
      // console.log("creditCardToken", creditCardToken)
      if (creditCardToken.error) {
        ToastAndroid.show(
          "Credit card token error, please check your card number.",
          2000
        );
        // alert("creditCardToken error");
        return;
      }
    } catch (e) {
      console.log("e", e);
      return;
    }
    // Send a request to your server with the received credit card token
    const { error } = await subscribeUser(creditCardToken);
    // Handle any errors from your server
    if (error) {
      //   alert(error)
      ToastAndroid.show(error, 2000);
    } else {
      let pament_data = await charges();
      console.log("pament_data", pament_data);
      if (pament_data.status == "succeeded") {
        _db
          .collection("booking")
          .doc()
          .set({
            title: route.params.title,
            price: route.params.price,
            guest: route.params.checkinData.guest,
            location: route.params.checkinData.location,
            checkin: route.params.checkinData.checkin,
            checkout: route.params.checkinData.checkout,
            createdAt: new Date().toString(),
          })
          .then((res) => {
            console.log("===============");
            SendNotifications();
          })
          .catch((err) => {
            console.log(err);
          });
        // alert("Payment Successfully");

        // db.ref('bookings').child(notificationKey).update({
        //     payment_status: 'payed',
        //     booking_status: 'successful'
        // }).then((response)=>{
        //   console.log(response,'res')
        // }).catch((err)=>{
        //   console.log(err,'err')
        // })
      } else {
        // alert('Payment failed');
        ToastAndroid.show("Your payment was unsuccessful", 2000);
      }
    }
  };

  const SendNotifications = () => {
    axios
      .post(`https://app.nativenotify.com/api/indie/notification`, {
        subID: "auth.currentUser.uid",
        appId: 2320,
        appToken: "C0oCkb1VMd1DH489dDouWE",
        title: "put your push notification title here as a string",
        message: "put your push notification message here as a string",
      })
      .then((res) => {
        ToastAndroid.show("Your payment was successfully.", 2000);
        console.log(notificationKey);
        navigation.navigate("Delivery");
        SendNotifications();
        console.log("susccess", res);
      })
      .catch((err) => {
        console.log(err, "======");
      });
  };

  //   charges
  const charges = async () => {
    const card = {
      amount: 50,
      currency: CURRENCY,
      source: CARD_TOKEN,
      description: "e-Inns accommodation fee.",
    };

    return fetch("https://api.stripe.com/v1/charges", {
      headers: {
        // Use the correct MIME type for your server
        Accept: "application/json",
        // Use the correct Content Type to send data to Stripe
        "Content-Type": "application/x-www-form-urlencoded",
        // Use the Stripe publishable key as Bearer
        Authorization: `Bearer ${Secret_key}`,
      },
      // Use a proper HTTP method
      method: "post",
      // Format the credit card data to a string of key-value pairs
      // divided by &
      body: Object.keys(card)
        .map((key) => key + "=" + card[key])
        .join("&"),
    }).then((response) => response.json());
  };

  //   _onchange
  const _onChange = (data) => {
    setCardInput(data);
  };

  return (
    <SafeAreaView style={{ height: height, width: width }}>
      <View style={{ backgroundColor: "#eee", height: height }}>
        {/* tool bar */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Delivery")}>
            <Icons name="keyboard-backspace" size={28} color="#000" />
          </TouchableOpacity>

          <View style={{ justifyContent: "center", width: "100%", flex: 1 }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}
            >
              Create Payment
            </Text>
          </View>
        </View>

        <ScrollView>
          {/* instructions */}
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 10,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F9F9F9",
              padding: 5,
              borderRadius: 15,
            }}
          >
            <Icons
              style={{ paddingLeft: 5 }}
              name="money"
              size={20}
              color="rgba(0, 0, 0, 0.25)"
            />

            <Text
              style={{
                fontSize: 10,
                paddingLeft: 5,
                color: "rgba(0, 0, 0, 0.45)",
              }}
            >
              {/* <Text style={{paddingLeft:120,paddingBottom:10}}>{`Please pay: ${params.checkinData.price}`}</Text> */}
            </Text>
          </View>

          <View style={styles.container}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Stripe_logo%2C_revised_2016.png/1200px-Stripe_logo%2C_revised_2016.png",
              }}
              style={styles.ImgStyle}
            />

            <CreditCardInput
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              validColor="#fff"
              placeholderColor="#ccc"
              onChange={_onChange}
            />

            {/* checkbox */}
            {/* <View style={{marginHorizontal: 20, 
                        display:'flex',
                        flexDirection: 'column',alignItems:'flex-start',
                        backgroundColor:'transparent', padding:5,
                        borderRadius:2
                        }}>

                        <CheckBox
                            containerStyle={{marginLeft:0, width:'100%', backgroundColor:'transparent',borderColor:'#2471A3'}}
                            title={'Save Details for Future Payments'}
                            checked={checkBoxValue}
                            onPress={() =>setCheckBoxValue(!checkBoxValue)}
                            checkedColor='#2471A3'
                            textStyle={{color:'rgba(0, 0, 0, 0.45)'}}
                        />

                    </View> */}

            <TouchableOpacity onPress={onSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Pay</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: height,
    paddingHorizontal: 10,
  },
  ImgStyle: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#2471A3",
    width: 150,
    height: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 15,
    color: "#f4f4f4",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  inputContainerStyle: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  inputStyle: {
    backgroundColor: "#222242",
    paddingLeft: 15,
    borderRadius: 5,
    color: "#fff",
  },
  labelStyle: {
    marginBottom: 5,
    fontSize: 12,
  },
});

export default Payment;
