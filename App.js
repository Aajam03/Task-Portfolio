
let sideEnable = document.querySelector("#side-enable");
let sideDisable = document.querySelector("#side-disable");
let sidebar = document.querySelector("#sidebar");

sideEnable.onclick = () => {
  sidebar.style.display = "flex";
};

sideDisable.onclick = () => {
  sidebar.style.display = "none";
};