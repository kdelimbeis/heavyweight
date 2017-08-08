document.getElementById("specials").addEventListener("click", function(){
  var carone = document.getElementById("one");
  var cartwo = document.getElementById("two");
  var carthree = document.getElementById("three");

  if (carone.style.display == "block"){
    carone.style.display = "none";
    cartwo.style.display = "block";
  } else if (cartwo.style.display == "block"){
    cartwo.style.display = "none";
    carthree.style.display = "block";
  } else {
    carthree.style.display = "none";
    carone.style.display = "block";
  }

});
