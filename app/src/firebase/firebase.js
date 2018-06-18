import firebase from 'firebase';
import 'src/firebase/auth';


const prodConfig = {
  apiKey: "AIzaSyAqDMUFR0sO44aiuSK3xqBKErzmBVqFU4c",
  authDomain: "construire-son-avenir.firebaseapp.com",
  databaseURL: "https://construire-son-avenir.firebaseio.com",
  projectId: "construire-son-avenir",
  storageBucket: "",
  messagingSenderId: "1058170086648"
};

const devConfig = {
  apiKey: "AIzaSyAqDMUFR0sO44aiuSK3xqBKErzmBVqFU4c",
  authDomain: "construire-son-avenir.firebaseapp.com",
  databaseURL: "https://construire-son-avenir.firebaseio.com",
  projectId: "construire-son-avenir",
  storageBucket: "",
  messagingSenderId: "1058170086648"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};

 export default firebase;
