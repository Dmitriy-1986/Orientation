const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

const showList = () => {
      results.innerHTML = "";
      data.filter((item) => {
         return (
             item.number.toLowerCase().includes(search_term) ||
             item.brand.toLowerCase().includes(search_term)
         );
      })

     .forEach((e) => {
            const li = document.createElement("li");
            li.innerHTML = `<img class="img-size" src="${e.img}" alt="${e.number}" title="${e.number}"><span title="${e.brand}">${e.brand}, </span><strong  title="${e.number}" class="color-primary">${e.number}</strong>`;
            results.appendChild(li);
     });
};

showList();

search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase();
    showList();
});

