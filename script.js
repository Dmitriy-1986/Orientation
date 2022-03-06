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
                    li.innerHTML = `${e.brand}  -  ${e.number}`;
                    results.appendChild(li);
                });
        };

        showList();

        search.addEventListener("input", (event) => {
            search_term = event.target.value.toLowerCase();
            showList();
        });