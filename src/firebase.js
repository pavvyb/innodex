  
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyC1aVN0sTNSuj41lyuE_U_wCJktPz7Ubgo",
    authDomain: "inno-dex.firebaseapp.com",
    projectId: "inno-dex",
    storageBucket: "inno-dex.appspot.com",
    messagingSenderId: "189984302143",
    appId: "1:189984302143:web:f8da6dce3195a740bd048a"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const walletsCollection = db.collection('wallets')
// const postsCollection = db.collection('posts')
// const commentsCollection = db.collection('comments')
// const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  walletsCollection,
//   postsCollection,
//   commentsCollection,
//   likesCollection
}