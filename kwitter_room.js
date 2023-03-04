
const firebaseConfig = {
      apiKey: "AIzaSyDZkDaYcjNZrsZx8idWNHktNQm4MN_zNCw",
      authDomain: "class-c93-27afc.firebaseapp.com",
      databaseURL: "https://class-c93-27afc-default-rtdb.firebaseio.com",
      projectId: "class-c93-27afc",
      storageBucket: "class-c93-27afc.appspot.com",
      messagingSenderId: "875906682096",
      appId: "1:875906682096:web:5f137439c0c7159ef50635"
    };
    
   
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML =
    "Hi there," + user_name ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addRoom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name",
      });

      localStorage.setItem("room_name", room_name);
      
        window.location = "kwitter_page.html";
    }
    
    function redirectToRoomName(name) {

      console.log(name);
    
      localStorage.setItem("room_name", name);
      
        window.location = "kwitter_page.html";
    } 

    function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location = "index.html";
    } 