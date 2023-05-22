const home = document.querySelector(".home");
const chose = document.querySelector(".chose");
const deletes = document.querySelector(".delete");
const right = document.querySelector(".right");
const us = document.querySelector(".us");
const left = document.querySelector(".left");
const menu = document.querySelector(".menu");
chose.addEventListener("click", function () {
  home.classList.add("aktiv");
});

deletes.addEventListener("click", function () {
  home.classList.remove("aktiv");
});
right.addEventListener("click", function () {
  right.classList.toggle("remove");

  us.classList.toggle("blog");
});
left.addEventListener("click", function () {
  menu.classList.toggle("linking");
  left.classList.toggle("remove");
});
