export function loadMenuPage() {
  const pageContent = document.getElementById("page-container");
  pageContent.innerHTML = "";

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
  contentDiv.id = "menu-grid";
  main.appendChild(contentDiv);

  const menuTitleDiv = document.createElement("div");
  main.appendChild(menuTitleDiv);
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitleDiv.appendChild(menuTitle);

  const menuItems = [
    {
      id: 1,
      name: "Tonkotsu Ramen",
      description:
        "Creamy pork-bone broth, thin noodles, chashu pork, wood ear mushrooms, green onions, soft-boiled egg",
      price: 13.99,
      category: "ramen",
      spicy: false,
      imgSrc: "img/menuItems/tonkotsu_ramen.webp",
      imgAlt: "Bowl of Tonkotsu Ramen",
    },
    {
      id: 2,
      name: "Shoyu Ramen",
      description:
        "Soy-based broth, medium noodles, chashu pork, bamboo shoots, nori, green onions",
      price: 12.49,
      category: "ramen",
      spicy: false,
    },
    {
      id: 3,
      name: "Miso Ramen",
      description:
        "Savory miso broth, curly noodles, ground pork, sweet corn, bean sprouts, butter, green onions",
      price: 12.99,
      category: "ramen",
      spicy: false,
    },
    {
      id: 4,
      name: "Spicy Tonkotsu Ramen",
      description:
        "Tonkotsu broth kicked up with house chili oil, thin noodles, chashu pork, bamboo shoots, soft-boiled egg",
      price: 14.49,
      category: "ramen",
      spicy: true,
    },
    {
      id: 5,
      name: "Shio Ramen",
      description:
        "Light salt-based broth, straight noodles, chicken chashu, narutomaki, green onions, sesame seeds",
      price: 11.99,
      category: "ramen",
      spicy: false,
    },
    {
      id: 6,
      name: "Vegetarian Ramen",
      description:
        "Mushroom-soy broth, medium noodles, tofu, spinach, corn, scallions, nori",
      price: 11.49,
      category: "ramen",
      spicy: false,
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    // const imgContainer = document.createElement("div");
    // imgContainer.id = `menu-item-${item.id}`;
    // imgContainer.classList.add("menu-card-img");
    // Do this instead of trying to create each element individually?
    card.innerHTML = `
      <div class="menu-item-img" id="menu-item-${item.id}"
      style="
        background-image: url('${item.imgSrc}');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      "></div>

      <h3 class="menu-item__name">${item.name}</h3>
      <p class="menu-item__desc">${item.description}</p>
      <span class="menu-item__price">£${item.price}</span>
    `;

    contentDiv.appendChild(card);
  });

  // const menuGrid = document.createElement("div");
  // menuGrid.id = "menu-grid";
  // contentDiv.appendChild(menuGrid);

  const footer = document.createElement("footer");
  footer.textContent = "© 2025 jbprojects95";

  gridContainer.appendChild(header);
  gridContainer.appendChild(main);
  gridContainer.appendChild(footer);

  header.appendChild(nav);

  document.body.appendChild(gridContainer);
}
