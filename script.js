const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

const showList = () => {
      results.innerHTML = "";
      data

      .filter((item) => {
         return (
             item.number.toLowerCase().includes(search_term) ||
             item.brand.toLowerCase().includes(search_term)
         );
})

.forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `<img class="img-size" src="${e.img}">  ${e.brand},  <b class="text-primary"> ${e.number}</b>`;
      results.appendChild(li);
   });
};

showList();

search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase();
    showList();
});

//Preloader
window.onload = function () {
      document.body.classList.add('loaded_hiding');
      window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
      }, 500);
}
