import { auth } from "../firebase";
import Service from "./ServiceFile";


class Auth {
  async SignUp(data, navigation) {
    let obj = {};
    await auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        auth.currentUser.sendEmailVerification().then(() => {
          Service.post("users", data, userCredential.user.uid, navigation);
        }).catch((err) => {

          obj = { status: 'Failed', details: err };

        });

      })
      .catch((err) => {

        obj = { status: 'Failed', details: err };

      });
    return obj;
  }
  async SignIn (data, navigation) {
    let obj = {};
    await auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        if (auth.currentUser.emailVerified)
         { navigation.navigate('MainContainer') }
        else {
          auth.currentUser.sendEmailVerification(); 
          obj = { status: 'Success', details: "Your account is not verified, please verify your account" }
        }
      })
      .catch((error) => {
  obj = { status: 'Failed', details: error }
});
return obj;
  }


  async SignOut(navigation, location) {
  let obj = {}
  await auth
    .signOut()
    .then(() => {
      navigation.replace(location);
      obj = { status: "success", message: "signed out" };
    })
    .catch((error) => {
      obj = { status: "Error", message: error };
    });
  return obj;
}
  async authState() {
  return await auth.onAuthStateChanged((user) => {
    let obj = {};
    if (user) {
      obj = { status: "success", message: "user logged in" };
    } else {
      obj = {
        status: "Error",
        message: "user not logged in",
      };
    }
  });
SignUp
}
  
}

export default new Auth();
