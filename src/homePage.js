export function loadHomePage() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-layout-container");

  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.classList.add("navbar-styles");

  const navDiv = document.createElement("div");
  navDiv.classList.add("logo-container");
  navDiv.textContent = "LOGO";
  nav.appendChild(navDiv);

  const navBtnDiv = document.createElement("div");
  nav.appendChild(navBtnDiv);
  navBtnDiv.classList.add("nav-btns");

  let buttons = ["Home", "About", "Menu"];

  for (const label of buttons) {
    const button = document.createElement("button");

    button.textContent = label;
    button.classList.add("btn");
    navBtnDiv.appendChild(button);
    console.log(button);
  }

  const main = document.createElement("main");
  const contentDiv = document.createElement("div");
  contentDiv.id = "content";

  main.appendChild(contentDiv);

  const textDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.textContent = "Food here!";
  p.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              aspernatur recusandae, ad ratione officia id libero quos
              repellendus et illo, incidunt minus numquam? Modi nihil ullam illo
              quis explicabo doloremque!`;

  textDiv.classList.add("text-container");
  contentDiv.appendChild(textDiv);
  textDiv.appendChild(h1);
  textDiv.appendChild(p);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  contentDiv.appendChild(imgDiv);

  gridContainer.appendChild(header);
  gridContainer.appendChild(main);
  header.appendChild(nav);
  document.body.appendChild(gridContainer);
}
