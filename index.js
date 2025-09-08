//---------------------------------category----------------------
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    // .then((json) => displayLesson(json.data));
    .then((json) => displayCategory(json.categories));
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
            <button class="btn w-full rounded-full mt-auto bg-green-700 text-white">Add to Cart</button>
            
          </div>`;
    detailsCOmntainer.append(creatdiv);
  }
};

//------------------------------ onclick=loadcategory----------------

const loadcategoryid = (id) => {
  const url = `https://openapi.programming-hero.com/api/categories/${id}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

// -----------------------------------display category list-------------------------------

const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-section");
  //   categoryContainer.innerHTML = "";
  for (let categori of categories) {
    // console.log(categori);
    const btndiv = document.createElement("div");
    btndiv.innerHTML = `
    <button onclick="loadcategoryid('${categori.category_id}')" class=" hover:bg-[#15803d] hover:text-white p-2 hover:rounded-md hover:text-left hover:w-full font-semibold hover:btn-wide"">${categori.category_name}</button>`;
    categoryContainer.append(btndiv);
    // categoryContainer.innerHTML = "";
  }
};

loadCategory();
displayDetailsCategory();
