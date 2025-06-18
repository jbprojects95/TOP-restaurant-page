export function loadAboutPage() {
  const pageContent = document.getElementById("page-container");
  pageContent.innerHTML = "";
  console.log("About page is loading!");

  const gridContainer = document.getElementById("page-container");

  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.classList.add("navbar-styles");

  const logo = document.createElement("h1");
  logo.classList.add("logo-container");
  logo.textContent = "LOGO";
  nav.appendChild(logo);

  const navBtnDiv = document.createElement("div");
  nav.appendChild(navBtnDiv);
  navBtnDiv.classList.add("nav-btns");

  let buttons = ["Home", "About", "Menu"];

  for (const label of buttons) {
    const button = document.createElement("button");

    button.textContent = label;
    button.classList.add("btn");
    button.setAttribute("data-page", label);
    navBtnDiv.appendChild(button);
    console.log(button.dataset.page);
  }

  const main = document.createElement("main");
  const contentDiv = document.createElement("div");
  contentDiv.id = "content";

  const footer = document.createElement("footer");
  footer.textContent = "© 2025 jbprojects95";

  gridContainer.appendChild(header);
  gridContainer.appendChild(main);
  gridContainer.appendChild(footer);

  header.appendChild(nav);
  // document.body.innerHTML = "";
  document.body.appendChild(gridContainer);
}
