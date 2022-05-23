const now = new Date().toLocaleString();
let modified = document.lastModified;

let dateTime = document.getElementById('clock');
function clock() {
   dateTime.innerHTML = 'Поточна дата та час: <b style=\'color: #dc3545;\'>' + now + '</b>. ';
}

setInterval(clock, 1000);

let footer = document.getElementById('footer');
let footerInfo = document.createElement('p');
footerInfo.innerHTML = 'Всього орієнтувань: <b style=\'color: #dc3545;\'>' + data.length + '</b>. ';
footerInfo.innerHTML += 'Останні зміни сайту були здійсненні: <b style=\'color: #dc3545;\'>' + modified + '</b>. ';
footerInfo.innerHTML += 'Веб сторінка була завантажена: <b style=\'color: #dc3545;\'>' + now + '</b>. ';
footerInfo.innerHTML += '<span id=\'clock\'></span>';
footerInfo.innerHTML += 'Для перевірки оновлень орієнтувань, будь ласка перезавантажте сайт.';
footer.appendChild(footerInfo);
