var audio = document.getElementById("audio");
var likeButton = document.getElementById("like-button");
var heartsContainer = document.getElementById("hearts-container");

likeButton.addEventListener("click", function() {
  likeButton.style.color = "red";
  addHearts();
});

function addHearts() {
  for (var i = 0; i < 10; i++) {
    var heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heartsContainer.appendChild(heart);
  }
}
