// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyDkbC5Y8wMKr3kA728t9pStSn-jfH2k05A",
  authDomain: "csci225-fd266.firebaseapp.com",
  projectId: "csci225-fd266",
  storageBucket: "csci225-fd266.appspot.com",
  messagingSenderId: "547337845521",
  appId: "1:547337845521:web:ea2ac0d8b32a804ffb2ab0",
  measurementId: "G-JJWB6RWW5V"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value,
      name: "mom" //?
    });


  });

});
