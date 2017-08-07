// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.add("hidden");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.classList.add("hidden");
    }
}

window.addEventListener("load", function(){
  setTimeout(function(){ 
    
    modal.classList.remove("hidden"); }, 3000);
});