const now = new Date().toLocaleString();
let modified = document.lastModified;

let footer = document.getElementById('footer');
let footerInfo = document.createElement('p');
footerInfo.innerHTML = 'Всього орієнтувань: <b style=\'color: #dc3545;\'>' + data.length + '</b>. ';
footerInfo.innerHTML += 'Останні зміни сайту були здійсненні: <b style=\'color: #dc3545;\'>' + modified + '</b>. ';
footerInfo.innerHTML += 'Веб сторінка була завантажена: <b style=\'color: #dc3545;\'>' + now + '</b>. ';
footerInfo.innerHTML += 'Для перевірки оновлень орієнтувань, будь ласка перезавантажте сайт.';
footer.appendChild(footerInfo);
