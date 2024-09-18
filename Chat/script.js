/*const firebaseConfig = {
    apiKey: "AIzaSyCcxnD3nKTNIiMnqWfmmjg6SnwFrqtqhJQ",
    authDomain: "chat-d2233.firebaseapp.com",
    projectId: "chat-d2233",
    storageBucket: "chat-d2233.appspot.com",
    messagingSenderId: "314874064838",
    appId: "1:314874064838:web:79238fbf2a92eeab8accc7",
    measurementId: "G-JMH5D7RZSJ"
};
firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.collection("messages").orderBy("timestamp").onSnapshot((snapshot) => {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = "";
    snapshot.forEach(doc => {
      const message = doc.data().message;
      chatBox.innerHTML += `<p>${message}</p>`;
    });
  });

  function sendMessage() {
    const messageInput = document.getElementById('message-input');ű
    const message = messageInput.value;
    db.collection('messages').add({
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    messageInput.value = "";
  }

*/


let isLoggedIn = false
let container = document.getElementById('container');

if (isLoggedIn == false) {
    container.innerHTML += `
    <div class="login-form">
      <h1 class="login-h1">Bejelentkezés</h1>

      <input type="text" id="login-username" placeholder="Felhasználónév" class="login-inputs">
      <input type="password" id="login-password" placeholder="Jelszó" class="login-inputs">
      
      <button id="login-submit">Bejelentkezés</button>

      <button id="login-register">Regisztráció</button>
    </div>
  </div>`
}

const loginUserName = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginSubmit= document.getElementById('login-submit');

