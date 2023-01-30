const form = document.querySelector("#login__form");
const loading = document.getElementById("loading");
const cursor = document.querySelector(".cursor-effect");
const cursorElem = document.getElementsByClassName("course");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  loading.style.display = "flex";
  setTimeout(() => {
    if (username === "SimonC" && password === "Admin77") {
      window.location.href = "./index.html";
    } else if (username === "SimonC" && password !== "Admin77") {
      alert("Rigtigt brugernavn, men forkert adgangskode");
    } else {
      alert("Kan ikke finde denne konto");
    }
    loading.style.display = "none";
  }, 1500);
});
