 window.onerror = function (name) {     
     let contentEr = document.getElementById('content');     
     let markEr = document.createElement('mark');
         markEr.classList.add('mark-error');
         markEr.innerHTML = `Увага! Помилка:  ${name} у JavaScript коді.`;       
         contentEr.appendChild(markEr); 
};

const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

const showList = () => {
    results.innerHTML = "";
    const filteredData = data.filter((item) => {
        return (
            item.number.toLowerCase().includes(search_term) ||
            item.brand.toLowerCase().includes(search_term)
        );
    });

    if (filteredData.length === 0) {
        const li = document.createElement("li");
        li.innerHTML = `<span style="display:block;color: yellow; font-size: 16px; color: yellow; text-align: center; padding: 10px;">Об'єктів не знайдено.</span>`;
        results.appendChild(li);
    } else {
        filteredData.reverse();

        filteredData.forEach((e) => {
            const li = document.createElement("li");
            li.innerHTML = `<img onclick="openImg('${e.img}')" class="img-size cursor-pointer" src="${e.img}" alt=" " title="${e.number}"><br>
                            <span title="${e.brand}"> <a href=" https://www.google.com/search?q=${e.brand} "  target="_blank">${e.brand}</a></span><br>
                            <strong  title="${e.number}" class="color-primary cursor-pointer"  onclick="openMsg('${e.msg}')">${e.number}</strong>`;
            results.appendChild(li);
        });
    }
};

try {      
      showList();     
} catch (e) {
     let contentError = document.getElementById('content');     
     let mark = document.createElement('mark');
         mark.classList.add('mark-error');
         mark.innerHTML = `Увага! Помилка:  ${e.name} у JavaScript коді.`;       
         contentError.appendChild(mark);  
}

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

/* Запрет на ввода всех символов кроме цифр */
function keyUp() {
    this.value = this.value.replace(/[\D+]/g, '');
}
search.addEventListener('keyup', keyUp);

/* Поле ввода после потери фокуса */
function inputBlur() {
    this.setAttribute('placeholder', 'Шукати по орієнтуванням');
} 
search.addEventListener('blur', inputBlur);

/* Поле ввода во время фокуса*/
function inputFocus() {
    this.setAttribute('placeholder', 'Введіть цифри державного знаку');
}
search.addEventListener('focus', inputFocus);

/* Отмена вызова контекстного меню */
document.documentElement.oncontextmenu = function() {
    return false;
}
