let header = document.getElementById('header');
let marquee = document.createElement('marquee');
marquee.setAttribute('loop', '3');
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

let small = document.createElement('small');
small.style.color = 'white';
small.innerHTML = '*Пошук здійснюється по цифрах, фото та номер клікабельні';
header.appendChild(small);

let inputSearch = document.createElement('input');
inputSearch.id = "search"; 
inputSearch.autofocus = true;
inputSearch.placeholder =  'Шукати по орієнтуванням...';
inputSearch.setAttribute('autocomplete', 'off');
inputSearch.setAttribute('type', 'search');
header.appendChild(inputSearch);
