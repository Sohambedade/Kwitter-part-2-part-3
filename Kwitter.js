function addUser() {
 user_name = document.getElementById("user_name").ariaValue;
 localStorage.setItem("user_name" , user_name);

   window.location = "Kwitter_Room.html";
}