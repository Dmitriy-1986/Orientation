let header = document.getElementById('header');
let marquee = document.createElement('marquee');
marquee.setAttribute('loop', '1');
marquee.setAttribute('behavior', 'scroll');
header.appendChild(marquee);
let strongMarqueeStr = document.createElement('strong');
strongMarqueeStr.innerHTML = `Увага! Особи за орієнтуванням при собі можуть
                            мати автоматичну та іншу зброю. При затриманні 
                            дотримуватися заходів особистої безпеки!`;
marquee.appendChild(strongMarqueeStr);

let titleOrientation = document.createElement('h2');
titleOrientation.setAttribute('title', 'ОРІЄНТУВАННЯ');
titleOrientation.classList.add('tracking-in-expand');
titleOrientation.innerHTML = 'ОРІЄНТУВАННЯ';
header.appendChild(titleOrientation);

let fieldset = document.createElement('fieldset');
header.appendChild(fieldset);

let legend = document.createElement('legend');
fieldset.appendChild(legend);

let small = document.createElement('small');
small.innerHTML = `<span class='span-small'>*</span>Пошук здійснюється по цифрах`;
legend.appendChild(small);

let inputSearch = document.createElement('input');
inputSearch.id = "search"; 
inputSearch.autofocus = true;
inputSearch.placeholder =  'Шукати по орієнтуванням...';
inputSearch.setAttribute('autocomplete', 'off');
inputSearch.setAttribute('type', 'search');
fieldset.appendChild(inputSearch);

/* Наброски на футер

var now = new Date().toLocaleString();

let sumCar = document.createElement('span');
sumCar.style.color = 'white';
sumCar.innerHTML = 'Всього: <span style=\'color: red;\'>' + data.length + '</span> орієнтувань, ';
sumCar.innerHTML += 'на ' + now;
header.appendChild(sumCar);
*/
