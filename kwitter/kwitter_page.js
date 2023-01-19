//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
         name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4>" + name <"imgclass='user_tick' src='tick.png'> </h4>";
          message_with_tag = "<h4 class='message_h4'>" + name + "</h4>"
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updatelike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";

      row = name_with_tag + message_with_tag +like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updatelike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(like) + 1;
      console.log(updated_liked);

      firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes    
      });
      
      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            localStorage.removeItem("kwitter.html");
      }

}