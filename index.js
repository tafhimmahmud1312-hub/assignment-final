//---------------------------------category----------------------
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    // .then((json) => displayLesson(json.data));
    .then((json) => displayCategory(json.categories));
};

//----------------------------------------------------------cart div--------------------------
let cart = [];
const addToCart = (name, price) => {
  const item = { name, price };
  cart.push(item);
  displayCart();
};

const displayCart = () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "p-2",
      "bg-[#cff0dc]",
      "mb-1",
      "rounded-md",
      "w-full"
    );
    div.innerHTML = `
      <span>${item.name}</span>
      <span>৳${item.price}</span>
    `;
    cartContainer.appendChild(div);
  });

  //---------------------------------------------------------- Total sum

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  // ----------------------------------------------------------cart line

  const totalDiv = document.createElement("div");
  totalDiv.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "p-2",
    "font-bold",
    "mt-2"
  );
  totalDiv.innerHTML = `
    <span>Total</span>
    <span>৳${total}</span>
  `;

  cartContainer.appendChild(totalDiv);
};

// -------------------------------------show all plant------------------------------

const displayDetailsCategory = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    // .then((json) => displayLesson(json.data));
    .then((json) => detailsCategory(json.plants));
};
const detailsCategory = (plants) => {
  const detailsCOmntainer = document.getElementById("tree-container");
  for (let plant of plants) {
    // console.log(plant);
    const creatdiv = document.createElement("div");
    creatdiv.innerHTML = `
    <div class="bg-white p-[10px] rounded-xl flex flex-col h-[450px] mx-auto">
            <img class="w-full h-[250px] rounded-xl pb-[16px]" src="${plant.image}" alt="">
            <h1 class="text-sm font-semibold pb-2">${plant.name}</h1>
            <p class="text-xs font-normal pb-2">${plant.description}</p>
            <div class="flex justify-between  pb-3 mt-auto">
              <span class="bg-[#DCFCE7] p-1 px-2 rounded-full text-[#15803d]">
                ${plant.category}
              </span>
              <span class="font-semibold">
                ৳${plant.price}
              </span>
            </div>
            <button onclick="addToCart('${plant.name}',${plant.price})" class="btn w-full rounded-full mt-auto bg-green-700 text-white">Add to Cart</button>
            
          </div>`;
    detailsCOmntainer.append(creatdiv);
  }
};

// -----------------------------------display category list-------------------------------

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-section");
  categoryContainer.innerHTML = "";
  for (let categori of categories) {
    // console.log(categori);
    const btndiv = document.createElement("div");
    btndiv.innerHTML = `
    <button onclick="loadcategoryid('${categori.category_id}')" class=" ml-[40%] lg:mx-auto hover:bg-[#15803d] hover:text-white p-2 hover:rounded-md hover:text-left hover:w-full font-semibold hover:btn-wide"">${categori.category_name}</button>`;
    categoryContainer.append(btndiv);
    // categoryContainer.innerHTML = "";
  }
};

loadCategory();
displayDetailsCategory();
