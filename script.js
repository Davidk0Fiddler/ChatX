const firebaseConfig = {
  apiKey: "AIzaSyAd-EybxzYfWdXrkHRD-xh07l_yT7m-2es",
  authDomain: "chatx-63705.firebaseapp.com",
  databaseURL: "https://chatx-63705-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatx-63705",
  storageBucket: "chatx-63705.appspot.com",
  messagingSenderId: "814070087345",
  appId: "1:814070087345:web:3f1564398156a75e51ec90",
  measurementId: "G-C9K9JB7N00"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


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

loginSubmit.addEventListener("click", login);

function login() {
  const usersRef = db.collection('users');

// Az összes dokumentum lekérése a kollekcióból
usersRef.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // Minden dokumentum adatai
      console.log(`Dokumentum ID: ${doc.id}, Adatok: `, doc.data());
    });
  })
  .catch((error) => {
    console.error("Hiba az adatok lekérésekor: ", error);
  });
}
