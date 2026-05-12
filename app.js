const chefs = [
  {
    id: "maya",
    name: "Maya Bennett",
    city: "Iowa City",
    line: "Mediterranean dinners made for lingering",
    rating: 4.9,
    bookings: 31,
    story:
      "Food has always been how I gather people. My menus are built around bright herbs, generous platters, and meals that let guests settle in.",
    tags: ["Mediterranean", "Private Dining", "Table Shares", "Corporate", "Verified", "ServSafe", "Signature Chef"],
    badges: ["Signature Chef", "Verified", "Table Shares", "ServSafe"],
    topTags: ["Crowd Favorite", "Stress-Free Hosting", "Beautiful Presentation"],
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80",
    photos: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=700&q=80",
    ],
    menus: [
      {
        type: "Private Dining",
        name: "Coastal Mediterranean Dinner",
        detail: "Serves 10-40 · lemon chicken, herb rice, mezze, seasonal salad",
        price: "$64/person",
        image:
          "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=500&q=80",
      },
      {
        type: "Table Shares",
        name: "Office Mezze Table Share",
        detail: "Serves 12+ · pickup or chef delivery",
        price: "$22/person",
        image:
          "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "jonathan",
    name: "Jonathan Reyes",
    city: "Coralville",
    line: "Seasonal Iowa dinners with a farm-table feel",
    rating: 4.8,
    bookings: 22,
    story:
      "I cook with the seasons because simple food can still feel special. My favorite tables are relaxed, full, and a little louder by dessert.",
    tags: ["American", "Private Dining", "Chef-Hosted", "Verified"],
    badges: ["Verified", "Chef-Hosted"],
    topTags: ["Memorable Menu", "Warm Hospitality", "Easy to Work With"],
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80",
    photos: [
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=700&q=80",
    ],
    menus: [
      {
        type: "Private Dining",
        name: "Farm-to-Table Supper",
        detail: "Serves 10-30 · local proteins, roasted vegetables, dessert",
        price: "$72/person",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
      },
      {
        type: "Chef-Hosted",
        name: "Custom Chef-Hosted Dinner",
        detail: "General area shared before booking · exact address after confirmation",
        price: "Custom quote",
        image:
          "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "anika",
    name: "Anika Patel",
    city: "North Liberty",
    line: "Indian comfort food for crowd-ready meals",
    rating: 4.7,
    bookings: 14,
    story:
      "I grew up around food that was meant to be shared. I love building generous meals that feel familiar, fragrant, and celebratory.",
    tags: ["Indian", "Table Shares", "Corporate", "Verified"],
    badges: ["Verified", "Table Shares"],
    topTags: ["Generous Portions", "Office Favorite", "Crowd Favorite"],
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=700&q=80",
    photos: [
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    ],
    menus: [
      {
        type: "Table Shares",
        name: "Curry Tray Table Share",
        detail: "Serves 15+ · rice, naan, two curries, chutneys",
        price: "$18/person",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80",
      },
      {
        type: "Private Dining",
        name: "Indian Celebration Dinner",
        detail: "Serves 10-35 · family-style private dining",
        price: "$48/person",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    id: "ryan",
    name: "Ryan Cole",
    city: "Tiffin",
    line: "BBQ trays for easygoing parties",
    rating: 4.6,
    bookings: 11,
    story:
      "I like food that makes people relax. Smoke, sides, sauces, and a table that does not need to be too precious.",
    tags: ["BBQ", "Table Shares", "American", "Verified"],
    badges: ["Verified", "Table Shares"],
    topTags: ["Great for Groups", "On Time", "Generous Portions"],
    image:
      "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?auto=format&fit=crop&w=700&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=700&q=80",
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=700&q=80",
    ],
    menus: [
      {
        type: "Table Shares",
        name: "BBQ Tray Package",
        detail: "Serves 20+ · pulled pork, sides, buns, sauces",
        price: "$34/person",
        image:
          "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=80",
      },
      {
        type: "Table Shares",
        name: "Tailgate Table Share",
        detail: "Serves 16 · pickup or chef delivery",
        price: "$420/package",
        image:
          "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
];

const screens = {
  home: document.querySelector("#screen-home"),
  saved: document.querySelector("#screen-saved"),
  chefProfile: document.querySelector("#screen-chef-profile"),
  request: document.querySelector("#screen-request"),
  wallet: document.querySelector("#screen-wallet"),
  profile: document.querySelector("#screen-profile"),
  hostList: document.querySelector("#screen-host-list"),
  host: document.querySelector("#screen-host"),
};

const signatureList = document.querySelector("#signature-list");
const newList = document.querySelector("#new-list");
const tableShareList = document.querySelector("#table-share-list");
const popularList = document.querySelector("#popular-list");
const savedList = document.querySelector("#saved-list");
const chefProfileContent = document.querySelector("#chef-profile-content");
const headerTitle = document.querySelector("#header-title");
const locationButton = document.querySelector("#location-button");
const backButton = document.querySelector(".back-button");
const toast = document.querySelector("#toast");
let activeFilter = "all";
let previousScreen = "home";
let currentChef = chefs[0];
let onboardingIndex = 0;

function badgeMeta(label) {
  const meta = {
    "Signature Chef": { className: "badge badge-signature", icon: "★" },
    Verified: { className: "badge badge-verified", icon: "✓" },
    "Table Shares": { className: "badge badge-table", icon: "" },
    "Chef-Hosted": { className: "badge badge-hosted", icon: "" },
    ServSafe: { className: "badge badge-servsafe", icon: "✓" },
  };
  return meta[label] || { className: "badge", icon: "" };
}

function badge(label) {
  const meta = badgeMeta(label);
  const icon = meta.icon ? `<span>${meta.icon}</span>` : "";
  return `<button class="${meta.className}" type="button" data-badge="${label}">${icon}${label}</button>`;
}

function chefMatchesFilter(chef) {
  if (activeFilter === "all") return true;
  if (activeFilter === "signature") return chef.badges.includes("Signature Chef");
  if (activeFilter === "tableShares") return chef.badges.includes("Table Shares");
  if (activeFilter === "verified") return chef.badges.includes("Verified");
  if (activeFilter === "chefHosted") return chef.badges.includes("Chef-Hosted");
  if (activeFilter === "servsafe") return chef.badges.includes("ServSafe");
  return true;
}

function chefCard(chef, compact = false) {
  const card = document.createElement("button");
  card.className = compact ? "chef-card compact-card" : "chef-card";
  card.type = "button";
  card.innerHTML = `
    <div class="image-strip" aria-label="${chef.name} photos">
      ${chef.photos
        .map((photo, index) => `<img alt="${index === 0 ? chef.name : chef.line}" src="${photo}" />`)
        .join("")}
    </div>
    <div class="chef-card-body">
      <div class="card-title-row">
        <h3>${chef.name}</h3>
        <strong>${chef.rating.toFixed(1)}</strong>
      </div>
      <p>${chef.city}<br />${chef.line}</p>
      <div class="badge-row">
        ${chef.badges.map((item) => badge(item)).join("")}
      </div>
    </div>
  `;
  card.addEventListener("click", () => showChefProfile(chef.id));
  return card;
}

function tableShareCard(chef, menu) {
  const card = document.createElement("button");
  card.className = "table-share-card";
  card.type = "button";
  card.innerHTML = `
    <img alt="${menu.name}" src="${menu.image}" />
    <div>
      <span class="badge badge-table">Table Shares</span>
      <h3>${menu.name}</h3>
      <p>${menu.detail}</p>
      <div class="card-title-row">
        <span>${chef.name} · ${chef.rating.toFixed(1)}</span>
        <strong>${menu.price}</strong>
      </div>
    </div>
  `;
  card.addEventListener("click", () => showChefProfile(chef.id));
  return card;
}

function renderHome() {
  signatureList.innerHTML = "";
  newList.innerHTML = "";
  tableShareList.innerHTML = "";
  popularList.innerHTML = "";

  chefs.filter(chefMatchesFilter).filter((chef) => chef.badges.includes("Signature Chef")).forEach((chef) => {
    signatureList.appendChild(chefCard(chef, true));
  });

  chefs.filter(chefMatchesFilter).slice(1, 4).forEach((chef) => newList.appendChild(chefCard(chef)));

  chefs.forEach((chef) => {
    chef.menus
      .filter((menu) => menu.type === "Table Shares")
      .forEach((menu) => tableShareList.appendChild(tableShareCard(chef, menu)));
  });

  [...chefs].sort((a, b) => b.rating + b.bookings / 100 - (a.rating + a.bookings / 100)).forEach((chef) => {
    if (chefMatchesFilter(chef)) popularList.appendChild(chefCard(chef));
  });
}

function renderSaved() {
  savedList.innerHTML = "";
  [chefs[0], chefs[2]].forEach((chef) => savedList.appendChild(chefCard(chef)));
}

function setHeader(screenName) {
  const titles = {
    home: "curATE",
    saved: "Saved",
    chefProfile: "Chef",
    request: "Request",
    wallet: "Wallet",
    profile: "Profile",
    hostList: "Host List",
    host: "Hosting",
  };
  headerTitle.textContent = titles[screenName] || "curATE";
  locationButton.hidden = !["home", "saved"].includes(screenName);
}

function showScreen(name, fromBack = false) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.nav === name));
  backButton.hidden = name === "home";
  if (!fromBack && name !== "chefProfile") previousScreen = "home";
  setHeader(name);
}

function showChefProfile(id) {
  const chef = chefs.find((item) => item.id === id);
  if (!chef) return;
  currentChef = chef;
  previousScreen = document.querySelector(".screen.active").id.replace("screen-", "").replace(/-([a-z])/g, (_, char) => char.toUpperCase());
  chefProfileContent.innerHTML = `
    <div class="profile-carousel">
      ${chef.photos.map((photo, index) => `<img alt="${index === 0 ? chef.name : chef.line}" src="${photo}" />`).join("")}
    </div>
    <div class="profile-title">
      <h2>${chef.name}</h2>
      <p>${chef.city} · ${chef.line}</p>
      <div class="badge-row centered">
        <span class="rating-pill">${chef.rating.toFixed(1)} · ${chef.bookings} bookings</span>
        ${chef.badges.map((item) => badge(item)).join("")}
      </div>
    </div>
    <div class="tag-cloud">
      ${chef.topTags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
    <div class="profile-actions">
      <button class="secondary-button" type="button" id="favorite-button">Save</button>
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
              <span class="menu-type">${menu.type}</span>
              <h3>${menu.name}</h3>
              <p>${menu.detail}</p>
              <p><strong>${menu.price}</strong></p>
            </div>
          </article>
        `,
        )
        .join("")}
    </div>
    <div class="story-card">
      <p class="eyebrow">Why I Cook</p>
      <p>${chef.story}</p>
    </div>
    <button class="primary-button" type="button" id="book-button">Plan This Meal</button>
  `;
  showScreen("chefProfile", true);
  document.querySelector("#book-button").addEventListener("click", () => showScreen("request"));
  document.querySelector("#custom-request").addEventListener("click", () => showScreen("request"));
  document.querySelector("#favorite-button").addEventListener("click", () => showToast(`${chef.name} saved.`));
  document.querySelector("#share-button").addEventListener("click", () => showToast("Share link copied."));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function showBadgeInfo(label) {
  const copy = {
    Verified: "Identity verified and background check complete.",
    "Signature Chef": "25+ completed bookings with a 4.8+ rating.",
    "Table Shares": "Shareable meals made for gatherings.",
    "Chef-Hosted": "Dine at the chef’s hosting space. Exact address is shared after confirmation.",
    ServSafe: "Food safety certification verified by curATE.",
  };
  showToast(copy[label] || label);
}

function setOnboardingSlide(index) {
  onboardingIndex = index;
  document.querySelectorAll(".onboarding-slide").forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });
  document.querySelectorAll(".onboarding-dots span").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
  document.querySelector("#onboarding-next").textContent = index === 2 ? "Let’s Eat" : "Next";
}

document.querySelector("#onboarding-next").addEventListener("click", () => {
  if (onboardingIndex < 2) {
    setOnboardingSlide(onboardingIndex + 1);
    return;
  }
  document.querySelector("#onboarding").classList.remove("active");
});

document.querySelector("#onboarding-skip").addEventListener("click", () => {
  document.querySelector("#onboarding").classList.remove("active");
});

document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.nav));
});

backButton.addEventListener("click", () => showScreen(previousScreen || "home", true));

document.querySelector("#filter-toggle").addEventListener("click", () => {
  const drawer = document.querySelector("#filter-drawer");
  drawer.hidden = !drawer.hidden;
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    activeFilter = chip.dataset.filter;
    document.querySelectorAll(".chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    renderHome();
  });
});

document.querySelector("#map-toggle").addEventListener("click", () => {
  const panel = document.querySelector("#map-panel");
  panel.hidden = !panel.hidden;
  document.querySelector("#map-toggle").textContent = panel.hidden ? "Map" : "List";
});

document.querySelector("#search-input").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  if (!query) {
    renderHome();
    return;
  }
  newList.innerHTML = "";
  chefs
    .filter((chef) => [chef.name, chef.city, chef.line, chef.story, ...chef.tags].join(" ").toLowerCase().includes(query))
    .forEach((chef) => newList.appendChild(chefCard(chef)));
});

document.addEventListener("click", (event) => {
  const badgeButton = event.target.closest("[data-badge]");
  if (badgeButton) {
    event.stopPropagation();
    showBadgeInfo(badgeButton.dataset.badge);
  }
});

document.querySelector("#deposit-info").addEventListener("click", () => {
  showToast("Your deposit confirms the booking and helps your chef prepare, purchase ingredients, and hold your event time.");
});

document.querySelector("#request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("Request sent. Deposit is not charged until both sides agree.");
  window.setTimeout(() => showChefProfile(currentChef.id), 700);
});

document.querySelector("#apply-host").addEventListener("click", () => {
  previousScreen = "profile";
  showScreen("hostList");
});

document.querySelector("#host-list-form").addEventListener("submit", (event) => {
  event.preventDefault();
  showToast("You’re on the host list. We’ll reach out as new spots open.");
  window.setTimeout(() => showScreen("profile"), 700);
});

locationButton.addEventListener("click", () => {
  showToast("Location helps find nearby chefs. You can browse Iowa City Area without sharing it.");
});

renderHome();
renderSaved();
