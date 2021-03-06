let header = document.getElementById('header');

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
