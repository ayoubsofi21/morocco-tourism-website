// click about user in header  and show button
const profilUser = document.querySelector(".profilUser");
const clickDiv = document.querySelector(".clickDiv");

profilUser.addEventListener("click", (e) => {
  e.stopPropagation();
  clickDiv.style.display = clickDiv.style.display === "block" ? "none" : "flex";
});

document.addEventListener("click", () => {
  clickDiv.style.display = "none";
});
