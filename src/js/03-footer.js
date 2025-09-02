const title = document.getElementById("title3");
const button = document.getElementById("action-btn3");

button.addEventListener("click", () => {
  title.textContent = "Hello World 3!";
  title.classList.add("changed");
});
