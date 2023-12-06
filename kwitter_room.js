// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrxBsKO8s-4PYBvTypGH8jY7S_aHYOHkY",
    authDomain: "chat-n--school.firebaseapp.com",
    projectId: "chat-n--school",
    storageBucket: "chat-n--school.appspot.com",
    messagingSenderId: "532985215392",
    appId: "1:532985215392:web:d29cec6aae16844fa10cc5"
  };
  
  function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "Kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "Kwitter_room.html"
}