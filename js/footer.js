const now = new Date().toLocaleString();
let modified = document.lastModified;

let footer = document.getElementById('footer');
let footerInfo = document.createElement('p');
footerInfo.innerHTML = 'Всього орієнтувань: <b style=\'color: #dc3545;\'>' + data.length + '</b>. ';
footerInfo.innerHTML += 'Останні зміни сайту були здійсненні: <b>' + modified + '</b>. ';
footerInfo.innerHTML += 'Веб сторінка була завантажена: <b>' + now + '</b>. ';
footerInfo.innerHTML += '<span id=\'clock\'></span>';
footerInfo.innerHTML += 'Для перевірки оновлень орієнтувань, будь ласка перезавантажте сайт.';
footer.appendChild(footerInfo);

let dateTime = document.getElementById('clock');
function clock() {
   const date = new Date();
   let time = date.toLocaleString();
   dateTime.innerHTML = 'Поточна дата та час: <b>' + time + '</b>. ';
}

setInterval(clock, 1000);
