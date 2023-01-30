const form = document.querySelector("#login__form");
const loading = document.getElementById("loading");
const cursor = document.querySelector(".cursor-effect");
const cursorElem = document.getElementsByClassName("course");

let circle = document.getElementById("cursor-effect");
const onMouseMove = (e) => {
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
};

if (circle) {
  document.addEventListener("mousemove", onMouseMove);
}
