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
            li.innerHTML = `<img onclick="openImg('${e.img}')" class="img-size cursor-pointer" src="${e.img}" alt=" " title="${e.number}"><br>
                            <span title="${e.brand}"> <a href=" https://www.google.com/search?q=${e.brand} "  target="_blank">${e.brand}</a></span><br>
                            <strong  title="${e.number}" class="color-primary cursor-pointer"  onclick="openMsg('${e.msg}')">${e.number}</strong>`;            
            results.appendChild(li);
     });
};

/* Выгружает showList() через 2 секунды */
setTimeout(showList, 2000);

search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase();
    showList();
});

/* Открыть картинку в новой вкладке */
function openImg(img) {
     openWin = open(img);
}

/* Открыть сообщение в алерт */
function openMsg(message) {
    alert(message);
}

/* Перезагрузка страницы через час */
setTimeout(function(){
    location.reload();
}, 3600000);

/* Запрет на ввод спец символов и алфавита */
function keyUp() {
    //let regValue = /[\А-Я+\а-я+\A-z+\a-z+\D+\s+\-+\=+\№+\_+\.+\,+\/+\!+\@+\#+\$+\%+\^+\&+\*+\(+\)+\:+\;+\'+\"+\?+\<+\>+\~+\`+]/gi;
    let regValue = /[\D+]/g;
    search.value = this.value.replace(regValue, '');
}
search.addEventListener('keyup', keyUp);

/* Поле ввода после потери фокуса */
function inputBlur() {
    search.setAttribute('placeholder', 'Шукати по орієнтуванням');
} 
search.addEventListener('blur', inputBlur);

/* Поле ввода во время фокуса*/
function inputFocus() {
    search.setAttribute('placeholder', 'Введіть цифри державного знаку');
}
search.addEventListener('focus', inputFocus);

