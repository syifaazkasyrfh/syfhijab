const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Link bisa kamu ganti dengan URL GitHub atau project kamu.");
    }
  });
});
