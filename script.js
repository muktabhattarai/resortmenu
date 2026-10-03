/* ====== EDIT THIS PART ====== */
const shop = {
  name: "Marshyangdi River View Resort",
  tagline: "Every plate tells a story",
  currency: "Rs. "          // shown before every price
};

/* Each category has "groups" (sub-groups), and each group has "items".
   - A group can have a "note" shown under its heading.
   - An item can have "desc", and either "price" or "prices" (list of size/price pairs).
   - If a category doesn't need sub-groups, use "items" directly instead of "groups". */
const menu = [
  { category: "Breakfast", groups: [
    { name: "Breakfast Sets", items: [
      { name: "Simple Breakfast",  desc: "Toast bread with butter and jam, omelette, aloo jeera, tea / coffee", price: 400 },
      { name: "Country Breakfast", desc: "Toast bread with butter and jam, omelette, sausage fry / boiled, aloo jeera, sweet corn, tea / coffee", price: 450 },
      { name: "Nepali Breakfast",  desc: "Plain roti (4 pcs) with tarkari, boiled egg, milk masala tea", price: 400 }
    ]},
    { name: "Breakfast A La Carte", items: [
      { name: "Toast Bread (2 pcs)", desc: "Toast bread with butter and jam", price: 100 },
      { name: "Masala Omelette", price: 175 },
      { name: "Boiled Egg (2 pcs)", price: 100 }
    ]}
  ]},

  { category: "Lunch & Dinner", groups: [
    { name: "Thali", note: "Rice / roti (6 pcs), dal, mix veg, seasonal veg, saag, papad, pickle, green salad & yogurt", items: [
      { name: "Veg Thali", price: 425 },
      { name: "Chicken Thali", price: 550 },
      { name: "Mutton Thali", price: 650 },
      { name: "Local Chicken Thali", price: 650 },
      { name: "Local Fish Thali", price: 650 }
    ]},
    { name: "Nepali Khaja Set", note: "Beaten rice, aloo jeera, bhatmas sadheko, pickle & green salad", items: [
      { name: "Veg Khaja Set", price: 350 },
      { name: "Chicken Khaja Set", price: 450 },
      { name: "Mutton Khaja Set", price: 550 },
      { name: "Local Chicken Khaja Set", price: 550 },
      { name: "Local Fish Khaja Set", price: 550 }
    ]},
    { name: "Briyani", items: [
      { name: "Veg Briyani", price: 450 },
      { name: "Chicken Briyani", price: 550 },
      { name: "Mutton Briyani", price: 650 }
    ]},
    { name: "Indian Food", items: [
      { name: "Mushroom Curry", price: 350 },
      { name: "Plain Rice", price: 175 },
      { name: "Jeera Rice", price: 200 },
      { name: "Veg Pulao", price: 250 },
      { name: "Dal Fry", price: 225 },
      { name: "Dal Tadka", price: 250 },
      { name: "Mix Veg Curry", price: 250 },
      { name: "Matar Paneer", price: 350 },
      { name: "Aloo Matar", price: 300 },
      { name: "Chicken Curry", price: 450 },
      { name: "Butter Chicken", price: 500 },
      { name: "Mutton Curry", price: 600 },
      { name: "Normal Fish Curry", price: 450 },
      { name: "Local Fish Curry", price: 600 },
      { name: "Local Chicken Curry", price: 600 },
      { name: "Plain Roti (2 pcs)", price: 70 },
      { name: "Butter Roti (2 pcs)", price: 100 },
      { name: "Plain Paratha (2 pcs)", price: 200 },
      { name: "Aloo Paratha (2 pcs)", price: 300 }
    ]},
    { name: "Fried Rice", items: [
      { name: "Veg Fried Rice", price: 300 },
      { name: "Chicken Fried Rice", price: 400 },
      { name: "Egg Fried Rice", price: 350 },
      { name: "Mix Fried Rice (Non Veg)", price: 450 }
    ]}
  ]},

  { category: "Starters", groups: [
    { name: "Appetizers (Veg)", items: [
      { name: "Peanut Sadheko", price: 250 },
      { name: "Bhatmas Sadheko", price: 250 },
      { name: "Aloo Sadheko", price: 250 },
      { name: "Chauchau Sadheko", price: 175 },
      { name: "Lasun Poleko", price: 250 },
      { name: "Aloo Jeera", price: 250 },
      { name: "Sweet Corn", price: 250 },
      { name: "Boiled Veg", price: 300 },
      { name: "Spicy Fried Corn", price: 300 },
      { name: "French Fries", price: 250 },
      { name: "Crispy Fried Potato", price: 300 },
      { name: "Papad Fry", price: 150 },
      { name: "Chips Chilly", price: 300 },
      { name: "Kaju Fry", price: 550 }
    ]},
    { name: "Appetizers (Non-Veg)", items: [
      { name: "Chicken Fry", price: 500 },
      { name: "Sausage Fry (4 pcs)", price: 250 },
      { name: "Mutton Fry", price: 650 },
      { name: "Normal Fish Fry", price: 450 },
      { name: "Local Fish Fry", price: 600 },
      { name: "Boiled Chicken", price: 450 },
      { name: "Boiled Sausage (4 pcs)", price: 225 },
      { name: "Boiled Mutton", price: 550 },
      { name: "Chicken Wings Fry", price: 450 },
      { name: "Chicken Leg Fry", price: 550 },
      { name: "Chicken Buffalo Wings", price: 450 },
      { name: "Chicken Sadheko", price: 400 },
      { name: "Mutton Sadheko", price: 550 },
      { name: "Chicken Lollipop (8 pcs)", price: 550 }
    ]},
    { name: "Pakoda", items: [
      { name: "Paneer Pakoda", price: 350 },
      { name: "Veg Pakoda", price: 300 },
      { name: "Mushroom Pakoda", price: 350 },
      { name: "Onion Pakoda", price: 300 },
      { name: "Egg Pakoda", price: 350 }
    ]},
    { name: "Choila", items: [
      { name: "Mushroom Choila", price: 350 },
      { name: "Chicken Choila", price: 450 },
      { name: "Mutton Choila", price: 550 }
    ]},
    { name: "Chilly", items: [
      { name: "Paneer Chilly", price: 350 },
      { name: "Mushroom Chilly", price: 350 },
      { name: "Sausage Chilly", price: 400 },
      { name: "Chicken Chilly (With Bone)", price: 450 },
      { name: "Chicken Chilly (Boneless)", price: 500 }
    ]}
  ]},

  { category: "Momo", items: [
    { name: "Veg Steam Momo", price: 150 },
    { name: "Chicken Steam Momo", price: 250 },
    { name: "Veg Fried Momo", price: 200 },
    { name: "Chicken Fried Momo", price: 300 },
    { name: "Chilly Veg Momo", price: 250 },
    { name: "Chilly Chicken Momo", price: 325 },
    { name: "Jhol Veg Momo", price: 225 },
    { name: "Jhol Chicken Momo", price: 300 },
    { name: "Kothey Veg Momo", price: 250 },
    { name: "Kothey Chicken Momo", price: 300 },
    { name: "Sadheko Veg Momo", price: 300 },
    { name: "Sadheko Chicken Momo", price: 350 },
    { name: "Veg Momo Platter", desc: "Steam, chilly, fry, kothey along with chauchau sadheko", price: 350 },
    { name: "Chicken Momo Platter", desc: "Steam, chilly, fry, kothey along with chauchau sadheko", price: 450 }
  ]},

  { category: "Noodles & More", groups: [
    { name: "Chowmein", items: [
      { name: "Veg Chowmein", price: 200 },
      { name: "Chicken Chowmein", price: 250 },
      { name: "Egg Chowmein", price: 225 },
      { name: "Mix Chowmein (Non Veg)", price: 350 }
    ]},
    { name: "Thukpa", items: [
      { name: "Veg Thukpa", price: 200 },
      { name: "Chicken Thukpa", price: 250 },
      { name: "Egg Thukpa", price: 225 },
      { name: "Mix Thukpa (Non Veg)", price: 350 }
    ]},
    { name: "Sandwich", items: [
      { name: "Veg Sandwich", price: 250 },
      { name: "Egg Sandwich", price: 300 },
      { name: "Chicken Sandwich", price: 420 },
      { name: "Cheese Sandwich", price: 300 }
    ]},
    { name: "Pasta & Spaghetti", items: [
      { name: "Creamy Cheese Pasta", price: 500 },
      { name: "Spaghetti with Tomato Sauce", price: 450 }
    ]},
    { name: "Sizzler", items: [
      { name: "Chicken Sizzler", price: 650 },
      { name: "Veg Sizzler", price: 450 }
    ]},
    { name: "BBQ", items: [
      { name: "Chicken BBQ", prices: [["Per plate", 550], ["Per kg", 1200]] },
      { name: "Mutton BBQ",  prices: [["Per plate", 650], ["Per kg", 2300]] }
    ]}
  ]},

  { category: "Soup & Salad", groups: [
    { name: "Soup", items: [
      { name: "Veg Cream Soup", price: 250 },
      { name: "Veg Clear Soup", price: 250 },
      { name: "Mushroom Soup", price: 320 },
      { name: "Chicken Clear Soup", price: 300 },
      { name: "Chicken Cream Soup", price: 375 },
      { name: "Chicken Hot N Sour Soup", price: 400 }
    ]},
    { name: "Salad", items: [
      { name: "Green Salad", price: 200 },
      { name: "Fruit Salad", price: 350 }
    ]}
  ]},

  { category: "Drinks", groups: [
    { name: "Hot Beverage", items: [
      { name: "Milk Tea", price: 100 },
      { name: "Black Tea", price: 50 },
      { name: "Ginger Tea", price: 70 },
      { name: "Green Tea", price: 70 },
      { name: "Masala Milk Tea", price: 120 },
      { name: "Lemon Tea", price: 50 },
      { name: "Black Coffee", price: 120 },
      { name: "Milk Coffee", price: 150 },
      { name: "Hot Lemon", price: 100 },
      { name: "Hot Lemon with Honey", price: 150 },
      { name: "Hot Milk", price: 100 },
      { name: "Hot Chocolate", price: 180 }
    ]},
    { name: "Cold Beverage", items: [
      { name: "Cold Drinks (Per Bottle)", price: 75 },
      { name: "Cold Drinks (Per Jumbo Bottle)", price: 400 },
      { name: "Mineral Water", price: 30 },
      { name: "Juice (Per Glass)", price: 150 },
      { name: "Juice (Per Bottle)", price: 500 }
    ]},
    { name: "Milkshake / Lassi", items: [
      { name: "Plain Lassi", price: 250 },
      { name: "Flavoured Lassi / Milkshake", price: 275 },
      { name: "Banana Lassi", price: 300 }
    ]}
  ]},

  { category: "Bar", groups: [
    { name: "Beer", items: [
      { name: "Tuborg", price: 600 },
      { name: "Gorkha Strong", price: 500 },
      { name: "Barasinghe (650 ml Bottle)", price: 550 },
      { name: "Barasinghe on Tap", prices: [["330 ml", 300], ["500 ml", 500], ["1000 ml", 800]] },
      { name: "Carlsberg", price: 650 }
    ]},
    { name: "Spirits", items: [
      { name: "Khukuri Rum", prices: [["60ml",250],["180ml",750],["Half",1700],["Full (750ml)",3200]] },
      { name: "8848", prices: [["60ml",300],["180ml",900],["Half",1900],["Full (750ml)",3500]] },
      { name: "Old Durbar (Red)", prices: [["60ml",400],["180ml",1200],["Half",2200],["Full (750ml)",4200]] },
      { name: "Old Durbar (Black)", prices: [["60ml",500],["180ml",1500],["Half",2900],["Full (750ml)",5600]] },
      { name: "Signature", prices: [["60ml",350],["180ml",1050],["Half",2100],["Full (750ml)",4000]] },
      { name: "Red Label", prices: [["30ml",400],["60ml",800],["180ml",2400],["Half",4600],["Full (750ml)",8000]] },
      { name: "Black Label", prices: [["30ml",450],["60ml",900],["180ml",2800],["Half",6000],["Full (750ml)",11000]] },
      { name: "Double Black", prices: [["30ml",600],["60ml",1200],["180ml",3500],["Half",6500],["Full (750ml)",12500]] },
      { name: "Jack Daniels", prices: [["30ml",450],["60ml",900],["180ml",2600],["Half",5200],["Full (750ml)",10000]] },
      { name: "Absolut Vodka", prices: [["30ml",400],["60ml",800],["180ml",2400],["Half",4600],["Full (750ml)",8000]] }
    ]}
  ]}
];
/* ====== END EDIT ====== */

document.getElementById("shopName").textContent = shop.name;
document.getElementById("tagline").textContent = shop.tagline;
document.title = shop.name + " – Menu";

const tabs = document.getElementById("tabs");
const main = document.getElementById("menu");

const itemHTML = it => {
  const right = it.prices
    ? ""
    : `<span class="price">${shop.currency}${it.price}</span>`;
  const sizes = it.prices
    ? `<div class="sizes">${it.prices.map(p => `<span><small>${p[0]}</small> ${shop.currency}${p[1]}</span>`).join("")}</div>`
    : "";
  return `
  <div class="item">
    <div><h4>${it.name}</h4>${it.desc ? `<p>${it.desc}</p>` : ""}${sizes}</div>
    ${right}
  </div>`;
};

menu.forEach((cat, i) => {
  const id = "cat-" + i;

  const btn = document.createElement("button");
  btn.textContent = cat.category;
  btn.dataset.target = id;
  btn.onclick = () => document.getElementById(id).scrollIntoView();
  tabs.appendChild(btn);

  let body = "";
  if (cat.groups) {
    body = cat.groups.map(g =>
      `<h3 class="sub">${g.name}</h3>${g.note ? `<p class="note">${g.note}</p>` : ""}` + g.items.map(itemHTML).join("")
    ).join("");
  } else {
    body = cat.items.map(itemHTML).join("");
  }

  const sec = document.createElement("section");
  sec.id = id;
  sec.innerHTML = `<h2>${cat.category}</h2>` + body;
  main.appendChild(sec);
});

// Highlight the tab of the section currently on screen
const buttons = [...tabs.children];
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      buttons.forEach(b => b.classList.toggle("active", b.dataset.target === e.target.id));
      const active = buttons.find(b => b.classList.contains("active"));
      if (active) active.scrollIntoView({ inline: "center", block: "nearest" });
    }
  });
}, { rootMargin: "-30% 0px -60% 0px" });
document.querySelectorAll("section").forEach(s => observer.observe(s));
buttons[0].classList.add("active");