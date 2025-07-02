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
      imgSrc: require("./img/menuItems/tonkotsu_ramen.webp"),
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
      imgSrc: require("./img/menuItems/shoyu_ramen.webp"),
      imgAlt: "Bowl of Shoyu Ramen",
    },
    {
      id: 3,
      name: "Miso Ramen",
      description:
        "Savory miso broth, curly noodles, ground pork, sweet corn, bean sprouts, butter, green onions",
      price: 12.99,
      category: "ramen",
      spicy: false,
      imgSrc: require("./img/menuItems/miso_ramen.webp"),
      imgAlt: "Bowl of Miso Ramen",
    },
    {
      id: 4,
      name: "Spicy Tonkotsu Ramen",
      description:
        "Tonkotsu broth kicked up with house chili oil, thin noodles, chashu pork, bamboo shoots, soft-boiled egg",
      price: 14.49,
      category: "ramen",
      spicy: true,
      imgSrc: require("./img/menuItems/spicy_tonkotsu_ramen.webp"),
      imgAlt: "Bowl of Spicy Tonkotsu Ramen",
    },
    {
      id: 5,
      name: "Shio Ramen",
      description:
        "Light salt-based broth, straight noodles, chicken chashu, narutomaki, green onions, sesame seeds",
      price: 11.99,
      category: "ramen",
      spicy: false,
      imgSrc: require("./img/menuItems/shio_ramen.webp"),
      imgAlt: "Bowl of Shio Ramen",
    },
    {
      id: 6,
      name: "Vegetarian Ramen",
      description:
        "Mushroom-soy broth, medium noodles, tofu, spinach, corn, scallions, nori",
      price: 11.49,
      category: "ramen",
      spicy: false,
      imgSrc: require("./img/menuItems/vegetarian_ramen.webp"),
      imgAlt: "Bowl of Vegetarian Ramen",
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    // Do this instead of trying to create each element individually?
    card.innerHTML = `
      <div class="menu-item-img">
        <img
          src="${item.imgSrc}"
          alt="${item.imgAlt}"
          />
        </div>
      <div class="menu-item-txt-container">
      <h3 class="menu-item-name">${item.name}</h3>
      <p class="menu-item-desc">${item.description}</p>
      <span class="menu-item-price">£${item.price}</span></div>
    `;

    contentDiv.appendChild(card);
  });

  const footer = document.createElement("footer");
  footer.textContent = "© 2025 jbprojects95";

  gridContainer.appendChild(header);
  gridContainer.appendChild(main);
  gridContainer.appendChild(footer);

  header.appendChild(nav);

  document.body.appendChild(gridContainer);
}
