const firebaseConfig = {
  apiKey: "AIzaSyAEL1w9b-bMaCjDkGVkjUL_LfNnYiIwC9M",
  authDomain: "kwitter-3eaf7.firebaseapp.com",
  databaseURL: "https://kwitter-3eaf7-default-rtdb.firebaseio.com",
  projectId: "kwitter-3eaf7",
  storageBucket: "kwitter-3eaf7.appspot.com",
  messagingSenderId: "375607184118",
  appId: "1:375607184118:web:a6538bb1d097a09c213ad7",
  measurementId: "G-TCYVVJ9NKE"
};
//ADD YOUR FIREBASE LINKS HERE

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name;
function addRoom()
{
  room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name)

window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name -" + Room_names);
       row = "div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)' >#"= Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomname(name){
  
  console.log(name);
  localStorage.setItem("room_name" , name)
    window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter_html";
}

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    messge:msg,
    like:0
  });

  document.getElementById("msg").value = "";
}