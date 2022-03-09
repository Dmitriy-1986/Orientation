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
                    li.innerHTML = `<span class="size-id">${e.id} </span> <img class="img-size" src="${e.img}">  ${e.brand},  <b class="text-primary"> ${e.number}</b>`;
                    results.appendChild(li);
                });
        };

        showList();

        search.addEventListener("input", (event) => {
            search_term = event.target.value.toLowerCase();
            showList();
        });
