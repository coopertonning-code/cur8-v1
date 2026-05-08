const chefs = [
  {
    id: "maya",
    name: "Maya Bennett",
    city: "Iowa City",
    knownFor: "Mediterranean feasts",
    rating: 4.9,
    bookings: 31,
    price: "$64/person",
    bio: "Warm, family-style menus inspired by coastal markets, herbs, and long-table gatherings.",
    tags: ["Mediterranean", "Private Dining", "Quick Plates", "Corporate"],
    badges: ["Signature Chef", "Quick Plates", "ServSafe"],
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80",
    hero: "https://images.unsplash.com/photo-1556911073-38141963c9e0?auto=format&fit=crop&w=900&q=80",
    menus: [
      {
        name: "Coastal Mediterranean Dinner",
        detail: "Serves 10-40 · lemon chicken, herb rice, mezze, seasonal salad",
        price: "$64/person",
        image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Office Mezze Quick Plate",
        detail: "Serves 12 minimum · delivery or pickup",
        price: "$22/person",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "jonathan",
    name: "Jonathan Reyes",
    city: "Coralville",
    knownFor: "farm-to-table dinners",
    rating: 4.8,
    bookings: 22,
    price: "$72/person",
    bio: "Seasonal Iowa produce, quiet hospitality, and polished dinners for private celebrations.",
    tags: ["American", "Private Dining", "Chef-Hosted"],
    badges: ["Private Dining", "Chef-Hosted"],
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80",
    hero: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=900&q=80",
    menus: [
      {
        name: "Farm-to-Table Supper",
        detail: "Serves 10-30 · roasted vegetables, local proteins, dessert",
        price: "$72/person",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Custom Chef-Hosted Dinner",
        detail: "General area shared before booking · exact address after confirmation",
        price: "Custom quote",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "anika",
    name: "Anika Patel",
    city: "North Liberty",
    knownFor: "Indian comfort food",
    rating: 4.7,
    bookings: 14,
    price: "$48/person",
    bio: "Generous trays, layered spices, and casual menus built for groups and office lunches.",
    tags: ["Indian", "Quick Plates", "Corporate"],
    badges: ["Quick Plates", "Background Checked"],
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=700&q=80",
    hero: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
    menus: [
      {
        name: "Curry Tray Lunch",
        detail: "Serves 15 minimum · rice, naan, two curries, chutneys",
        price: "$18/person",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Celebration Dinner Package",
        detail: "Serves 10-35 · family-style private dining",
        price: "$48/person",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "ryan",
    name: "Ryan Cole",
    city: "Tiffin",
    knownFor: "BBQ gatherings",
    rating: 4.6,
    bookings: 11,
    price: "$34/person",
    bio: "Smokehouse trays and backyard-style packages for easy group meals without restaurant catering.",
    tags: ["BBQ", "Quick Plates", "American"],
    badges: ["Quick Plates"],
    image: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?auto=format&fit=crop&w=700&q=80",
    hero: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80",
    menus: [
      {
        name: "BBQ Tray Package",
        detail: "Serves 20 minimum · pulled pork, sides, buns, sauces",
        price: "$34/person",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Tailgate Quick Plate",
        detail: "Package price · serves 16 · pickup or chef delivery",
        price: "$420/package",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
];

const screens = {
  home: document.querySelector("#screen-home"),
  search: document.querySelector("#screen-search"),
  profile: document.querySelector("#screen-profile"),
  request: document.querySelector("#screen-request"),
  wallet: document.querySelector("#screen-wallet"),
  host: document.querySelector("#screen-host"),
};

const chefList = document.querySelector("#chef-list");
const searchResults = document.querySelector("#search-results");
const profileContent = document.querySelector("#profile-content");
const headerTitle = document.querySelector("#header-title");
const headerEyebrow = document.querySelector("#header-eyebrow");
const backButton = document.querySelector(".back-button");
const toast = document.querySelector("#toast");
let activeFilter = "all";
let previousScreen = "home";
let currentChef = chefs[0];

function badgeClass(label) {
  if (label === "Signature Chef" || label === "ServSafe") return "badge green";
  if (label === "Quick Plates") return "badge warm";
  return "badge";
}

function chefMatchesFilter(chef) {
  if (activeFilter === "all") return true;
  if (activeFilter === "quickPlates") return chef.badges.includes("Quick Plates");
  if (activeFilter === "privateDining") return chef.tags.includes("Private Dining");
  if (activeFilter === "servsafe") return chef.badges.includes("ServSafe");
  if (activeFilter === "signature") return chef.badges.includes("Signature Chef");
  return true;
}

function chefCard(chef) {
  const card = document.createElement("button");
  card.className = "chef-card";
  card.type = "button";
  card.innerHTML = `
    <img alt="${chef.name}" src="${chef.image}" />
    <div>
      <h3>${chef.name}</h3>
      <p>${chef.city} · ${chef.price}<br />Known for ${chef.knownFor}</p>
      <div class="badge-row">
        <span class="badge green">${chef.rating.toFixed(1)} stars</span>
        ${chef.badges.map((badge) => `<span class="${badgeClass(badge)}">${badge}</span>`).join("")}
      </div>
    </div>
  `;
  card.addEventListener("click", () => showProfile(chef.id));
  return card;
}

function renderChefs() {
  chefList.innerHTML = "";
  chefs.filter(chefMatchesFilter).forEach((chef) => chefList.appendChild(chefCard(chef)));
}

function renderSearchResults(query = "") {
  searchResults.innerHTML = "";
  const normalized = query.trim().toLowerCase();
  chefs
    .filter((chef) => {
      if (!normalized) return true;
      return [chef.name, chef.city, chef.knownFor, chef.bio, ...chef.tags].join(" ").toLowerCase().includes(normalized);
    })
    .forEach((chef) => searchResults.appendChild(chefCard(chef)));
}

function setHeader(title, eyebrow = "") {
  headerTitle.textContent = title;
  headerEyebrow.textContent = eyebrow;
}

function showScreen(name, fromBack = false) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.nav === name));
  backButton.hidden = name === "home";

  if (!fromBack && name !== "profile") previousScreen = "home";
  if (name === "home") setHeader("Cur8", "Iowa City beta");
  if (name === "search") setHeader("Search", "Find your table");
  if (name === "wallet") setHeader("Wallet", "Gift cards & credits");
  if (name === "host") setHeader("Hosting", "Switch to Dining anytime");
  if (name === "request") setHeader("Request", currentChef.name);
}

function showProfile(id) {
  const chef = chefs.find((item) => item.id === id);
  if (!chef) return;
  currentChef = chef;
  previousScreen = document.querySelector(".screen.active").id.replace("screen-", "");
  setHeader("Profile", chef.city);
  profileContent.innerHTML = `
    <div class="profile-hero">
      <img alt="${chef.knownFor}" src="${chef.hero}" />
    </div>
    <div class="profile-title">
      <h2>${chef.name}</h2>
      <p>${chef.city} · Known for ${chef.knownFor}</p>
      <div class="badge-row" style="justify-content:center">
        <span class="badge green">${chef.rating.toFixed(1)} stars</span>
        <span class="badge">${chef.bookings} bookings</span>
        ${chef.badges.map((badge) => `<span class="${badgeClass(badge)}">${badge}</span>`).join("")}
      </div>
    </div>
    <p class="muted">${chef.bio}</p>
    <div class="profile-actions">
      <button class="secondary-button" type="button" id="favorite-button">Favorite</button>
      <button class="secondary-button" type="button" id="share-button">Share</button>
    </div>
    <div class="section-row">
      <h2>Menus</h2>
      <button class="text-button" type="button" id="custom-request">Custom</button>
    </div>
    <div class="menu-list">
      ${chef.menus
        .map(
          (menu) => `
          <article class="menu-card">
            <img alt="${menu.name}" src="${menu.image}" />
            <div>
              <h3>${menu.name}</h3>
              <p>${menu.detail}</p>
              <p><strong>${menu.price}</strong></p>
            </div>
          </article>
        `,
        )
        .join("")}
    </div>
    <button class="primary-button" type="button" id="book-button" style="margin-top:16px">Request Booking</button>
  `;
  showScreen("profile", true);
  document.querySelector("#book-button").addEventListener("click", () => showScreen("request"));
  document.querySelector("#custom-request").addEventListener("click", () => showScreen("request"));
  document.querySelector("#favorite-button").addEventListener("click", () => showToast(`${chef.name} saved to favorites.`));
  document.querySelector("#share-button").addEventListener("click", () => showToast("Share link copied for this chef profile."));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.nav));
});

backButton.addEventListener("click", () => showScreen(previousScreen || "home", true));

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    renderChefs();
  });
});

document.querySelector("#map-toggle").addEventListener("click", () => {
  const panel = document.querySelector("#map-panel");
  panel.hidden = !panel.hidden;
  document.querySelector("#map-toggle").textContent = panel.hidden ? "Map" : "List";
});

document.querySelector("#search-input").addEventListener("input", (event) => {
  renderSearchResults(event.target.value);
});

document.querySelectorAll("[data-search]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector("#search-input").value = button.dataset.search;
    renderSearchResults(button.dataset.search);
  });
});

document.querySelector("#request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Request submitted. Deposit is not charged until both sides agree.");
  window.setTimeout(() => showProfile(currentChef.id), 700);
});

document.querySelector("#mode-toggle").addEventListener("click", () => {
  const active = document.querySelector(".screen.active").id === "screen-host";
  if (active) {
    showScreen("home");
    document.querySelector("#mode-toggle").textContent = "Hosting";
  } else {
    showScreen("host");
    document.querySelector("#mode-toggle").textContent = "Dining";
  }
});

renderChefs();
renderSearchResults();
