const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

const showList = () => {
      results.innerHTML = "";
      data.reverse();//реверс массива
      data.filter((item) => {
         return (
             item.number.toLowerCase().includes(search_term) ||
             item.brand.toLowerCase().includes(search_term)
         );
      })

     .forEach((e) => {
            const li = document.createElement("li");
            li.innerHTML = `<img onclick="openImg(' ${e.img} ')" class="img-size cursor-pointer" src=" ${e.img} " alt="-" title=" ${e.number} ">
                            <span title=" ${e.brand} "> <a href="https://www.google.com/search?q=${e.brand}"  target="_blank"> ${e.brand} </a>, </span>
                            <strong  title=" ${e.number} " class="color-primary cursor-pointer"  onclick="openMsg('${e.msg}')"> ${e.number} </strong>`;            
            results.appendChild(li);
     });
};

setTimeout(showList, 2000);
//showList();

search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase();
    showList();
});

/* Open Img */
function openImg(img) {
     openWin = open(img);
}

/* Open Alert Msg */
function openMsg(message) {
    alert(message);
}

/* Reload page */
setTimeout(function(){
    location.reload();
}, 3600000);
