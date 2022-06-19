const search = document.getElementById("search");
const results = document.getElementById("results");
let search_term = "";

/* Класс обработки ошибок 
function ReadError(message) {
  this.message = message;
  this.name = 'ReadError';
}
*/
const showList = () => {
  results.innerHTML = "";
  
  try {
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
  } catch (e) {
    if (e.name == 'SyntaxError') {
      throw new ReadError(`Увага! Помилка:  ${e.name} в JavaScript коді.`, e);
    } if (e.name == 'TypeError') {
      throw new ReadError(`Увага! Помилка:  ${e.name} в JavaScript коді.`, e);
    } else if (e.name == 'RangeError') {
      throw new ReadError(`Увага! Помилка:  ${e.name} в JavaScript коді.`, e);
    } else if (e.name == 'EvalError') {
      throw new ReadError(`Увага! Помилка:  ${e.name} в JavaScript коді.`, e);
    } else if (e.name == 'ReferenceError') {
      throw new ReadError(`Увага! Помилка:  ${e.name} в JavaScript коді.`, e);
    } else if (e.name == 'URIError') {
      throw new ReadError(`Увага! Помилка:  ${e.name} в JavaScript коді.`, e);
    } else {
      // обработка остальных исключений
      throw new ReadError(`Увага! Помилка:  ${e.name} в JavaScript коді.`, e);
    }
  }
};

// Выгружает showList() через 2 секунды и в случае ошибки, выполняет блок catch с типом ошибки в коде 
try {
  setTimeout(showList, 2000);
} catch (e) {
  if (e.name == 'ReadError') {
    let contentError = document.getElementById('content');
    let mark = document.createElement('mark');
    mark.classList.add('mark-error');
    mark.innerHTML = `Увага! Помилка:  ${e.message} у JavaScript коді.`;
    contentError.appendChild(mark);
  } else {
    throw e;
  }
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
setTimeout(function () {
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
