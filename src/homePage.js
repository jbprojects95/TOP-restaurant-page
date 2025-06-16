export function loadHomePage() {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-layout-container");

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

  main.appendChild(contentDiv);

  const textDiv = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("btn");
  menuBtn.textContent = "Menu";
  h1.textContent = "Simply the best noodles!";
  p.textContent = `No rules. Just insanely good noodles. Our fire-packed bowls are made to fuel the streets. Eat in, take out, whatever. Fast, loud, and loaded with flavor. This is how our town slurps!`;

  const openingHours = [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "5:00 PM – 2:00 AM" },
    { day: "Wednesday", hours: "5:00 PM – 2:00 AM" },
    { day: "Thursday", hours: "5:00 PM – 2:00 AM" },
    { day: "Friday", hours: "5:00 PM – 2:00 AM" },
    { day: "Saturday", hours: "5:00 PM – 2:00 AM" },
    { day: "Sunday", hours: "5:00 PM – 2:00 AM" },
  ];

  const openingTable = document.createElement("table");

  openingHours.forEach((entry) => {
    const row = openingTable.insertRow();
    const dayCell = row.insertCell();
    const timeCell = row.insertCell();

    dayCell.textContent = entry.day;
    timeCell.textContent = entry.hours;
  });
  textDiv.classList.add("text-container");
  contentDiv.appendChild(textDiv);
  textDiv.appendChild(h1);
  textDiv.appendChild(p);
  textDiv.appendChild(menuBtn);
  textDiv.appendChild(openingTable);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");
  contentDiv.appendChild(imgDiv);

  const footer = document.createElement("footer");
  footer.textContent = "© 2025 jbprojects95";

  gridContainer.appendChild(header);
  gridContainer.appendChild(main);
  gridContainer.appendChild(footer);

  header.appendChild(nav);
  document.body.innerHTML = "";
  document.body.appendChild(gridContainer);
}
