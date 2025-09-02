const title = document.getElementById("title2");
const button = document.getElementById("action-btn2");

button.addEventListener("click", () => {
  title.textContent = "Hello World 2!";
  title.classList.add("changed");
});
