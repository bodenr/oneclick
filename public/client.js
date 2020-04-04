console.log('Client-side code running');

const button = document.getElementById('messageButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  document.getElementById("messageText").innerHTML = "Updated Text";
});
