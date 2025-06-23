import "./style.css";
import { loadHomePage } from "./homePage";
import { loadAboutPage } from "./aboutPage";
import { loadMenuPage } from "./menuPage";

// const navBtn = document.querySelectorAll(".btn");
// const contentDiv = document.getElementById("page-container");
loadHomePage();

const clearContent = () => {
  const pageContent = document.getElementById("page-container");
  pageContent.innerHTML = "";
};

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn[data-page]");
  if (!btn) return;

  const page = btn.dataset.page.toLowerCase();

  if (page === "home") {
    clearContent();
    loadHomePage();
  } else if (page === "about") {
    clearContent();
    loadAboutPage();
  } else if (page === "menu") {
    clearContent();
    loadMenuPage();
  }
});
