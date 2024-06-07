document
  .getElementById("open-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.remove("hidden");
  });

document
  .getElementById("close-menu-button")
  .addEventListener("click", function () {
    document.getElementById("mobile-menu").classList.add("hidden");
  });
