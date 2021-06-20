import firebase from'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDRQhswI1YldYs6XPGSkHUTdCcVnPHbvns",
  authDomain: "attendence-app-257d1.firebaseapp.com",
  databaseURL: "https://attendence-app-257d1-default-rtdb.firebaseio.com",
  projectId: "attendence-app-257d1",
  storageBucket: "attendence-app-257d1.appspot.com",
  messagingSenderId: "658370554760",
  appId: "1:658370554760:web:a49af06a5f4735759f683d"
};

let app = firebase.initializeApp(firebaseConfig);
export default firebase.database();