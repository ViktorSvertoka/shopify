const title = document.getElementById("title1");
const button = document.getElementById("action-btn1");

button.addEventListener("click", () => {
  title.textContent = "Hello World 1!";
  title.classList.add("changed");
});
