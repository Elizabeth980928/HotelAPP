// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
// import { CardField, useConfirmPayment } from "@stripe/stripe-react-native";
// import { StripeProvider } from "@stripe/stripe-react-native";

//  import { PUBLISHABLE_KEY,SECRET_KEY } from "../../server/index";
// //ADD localhost address of your server
// const API_URL = "http://localhost:3000";

// const StripeApp = props => {
//   const [email, setEmail] = useState();
//   const [cardDetails, setCardDetails] = useState();
//   const { confirmPayment, loading } = useConfirmPayment();

//   const fetchPaymentIntentClientSecret = async () => {
//     const response = await fetch(`${API_URL}/create-payment-intent`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const { clientSecret, error } = await response.json();
//     return { clientSecret, error };
//   };

//   const handlePayPress = async () => {
//     //1.Gather the customer's billing information (e.g., email)
//     Authorization: `Bearer ${PUBLISHABLE_KEY}`
//     if (!cardDetails?.complete || !email) {
//       Alert.alert("Please enter Complete card details and Email");
//       return;
//     }
//     const billingDetails = {
//       email: email,
//     };
//     //2.Fetch the intent client secret from the backend
//     try {
//       const { clientSecret, error } = await fetchPaymentIntentClientSecret();
//       //2. confirm the payment
//       if (error) {
//         console.log("Unable to process payment");
//       } else {
//         const { paymentIntent, error } = await confirmPayment(clientSecret, {
//           type: "Card",
//           billingDetails: billingDetails,
//         });
//         if (error) {
//           alert(`Payment Confirmation Error ${error.message}`);
//         } else if (paymentIntent) {
//           alert("Payment Successful");
//           console.log("Payment successful ", paymentIntent);
//         }
//       }
//     } catch (e) {
//       console.log(e);
//     }
//     //3.Confirm the payment with the card details
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         autoCapitalize="none"
//         placeholder="E-mail"
//         keyboardType="email-address"
//         onChange={value => setEmail(value.nativeEvent.text)}
//         style={styles.input}
//       />
//       <CardField
//         postalCodeEnabled={true}
//         placeholder={{
//           number: "4242 4242 4242 4242",
//         }}
//         cardStyle={styles.card}
//         style={styles.cardContainer}
//         onCardChange={cardDetails => {
//           setCardDetails(cardDetails);
//         }}
//       />
//       <Button onPress={handlePayPress} title="Proceed" enabled={loading} />
//     </View>
//   );
// };
// export default StripeApp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     margin: 20,
//   },
//   input: {
//     backgroundColor: "#efefefef",

//     borderRadius: 8,
//     fontSize: 20,
//     height: 50,
//     padding: 10,
//   },
//   card: {
//     backgroundColor: "#efefefef",
//   },
//   cardContainer: {
//     height: 50,
//     marginVertical: 30,
//   },
// });

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  navigation,
} from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import { STRIPE_PUBLISHABLE_KEY, Secret_key } from "./keys";

import firebase from "firebase";

// create a component42
const CURRENCY = "zar";
var CARD_TOKEN = null;
const db = firebase.firestore();
// const [hotels, setHotels] = useState([]);

const getCreditCardToken = ({ creditCardData }) => {
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
};

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

const Payment = ({ navigation, route }) => {
  const [CardInput, setCardInput] = React.useState({});
  const { price } = route.params;
  console.log(price);
  const onSubmit = async () => {
    if (CardInput.valid == false || typeof CardInput.valid == "undefined") {
      alert("Invalid Credit Card, Please enter correct details");
      return false;
    }

    let creditCardToken;
    try {
      // Create a credit card token
      creditCardToken = await getCreditCardToken(CardInput);
      // console.log("creditCardToken", creditCardToken)
      if (creditCardToken.error) {
        alert("creditCardToken error");
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
      alert(error);
    } else {
      let pament_data = await charges();
      console.log("pament_data", pament_data);
      if (pament_data.status == "succeeded") {
        alert("Your payment is Successful");
      } else {
        alert("unsuccessful payment");
      }
    }
  };

  const charges = async () => {
    const card = {
      amount: 500,
      currency: CURRENCY,
      source: CARD_TOKEN,
      //'description': "Developers Sin Subscription"
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

  const _onChange = (data) => {
    setCardInput(data);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="purple" />
      <Image style={styles.ImgStyle} />

    
        <Text>{`Amount due is ${price}`}</Text>
    

      <CreditCardInput
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        validColor=""
        placeholderColor="white"
        onChange={_onChange}
      />

      <TouchableOpacity
        //  onPress={() => navigation.navigate("Payment")}
        //           activeOpacity={0.7}
        // onPress={onSubmit}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};
//make this component available to the app
export default Payment;

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImgStyle: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "purple",
    width: 150,
    height: 45,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
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
    backgroundColor: "purple",
    paddingLeft: 12,
    borderRadius: 5,
    color: "#fff",
  },
  labelStyle: {
    marginBottom: 5,
    fontSize: 12,
  },
});
