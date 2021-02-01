var firebaseConfig = {
    apiKey: "AIzaSyBhXfd2l0fnFDzabH3m6eszfSCYEoEeQv0",
    authDomain: "kwitter-a16a9.firebaseapp.com",
    databaseURL: "https://kwitter-a16a9-default-rtdb.firebaseio.com",
    projectId: "kwitter-a16a9",
    storageBucket: "kwitter-a16a9.appspot.com",
    messagingSenderId: "401978275152",
    appId: "1:401978275152:web:4cbb23ecd1a8b81504a855"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("User-Name");
  room_name = localStorage.getItem("RoomName");
  function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
  function logout() {
    localStorage.removeItem("User-Name");
    localStorage.removeItem("RoomName");
    window.location = "index.html";
  }