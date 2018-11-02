import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDillYDXPiNbAJog6mnVfrkyt3TVtDumQo",
    authDomain: "chatbox-59103.firebaseapp.com",
    databaseURL: "https://chatbox-59103.firebaseio.com"
}

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;
