// TODO: Set up either a navbar generator function or set up a layout generator
// TODO (CONT): function in index.js that renders the nav, main and footer before the content in main

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
  const textDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn");
  menuBtn.textContent = "Menu";
  h1.textContent = "Our story";
  p.textContent =
    "We created this restaurant for our love of affordable, quick but healthy foods that leave you feeling full and satiated. We believe in sourcing ingredients as close to home as possible. Both to support local economies, but also to help keep our carbon footprint neutral.";

  main.appendChild(contentDiv);

  textDiv.classList.add("text-container");
  contentDiv.appendChild(textDiv);
  textDiv.appendChild(h1);
  textDiv.appendChild(p);
  textDiv.appendChild(menuBtn);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  contentDiv.appendChild(imgDiv);

  const footer = document.createElement("footer");
  footer.textContent = "© 2025 jbprojects95";

  gridContainer.appendChild(header);
  gridContainer.appendChild(main);
  gridContainer.appendChild(footer);

  header.appendChild(nav);
  // document.body.innerHTML = "";
  document.body.appendChild(gridContainer);
}
