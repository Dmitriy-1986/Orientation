const now = new Date().toLocaleString();
let modified = document.lastModified;

let footer = document.getElementById('footer');
let footerInfo = document.createElement('p');
footerInfo.innerHTML = 'Всього орієнтувань: <span style=\'color: #dc3545;\'><b>' + data.length + '</b></span>. ';
footerInfo.innerHTML += 'Останні зміни сайту були здійсненні: <b>' + modified + '</b>. ';
footerInfo.innerHTML += 'Веб сторінка була завантажена: <b>' + now + '</b>. ';
footerInfo.innerHTML += 'Для перевірки оновлень орієнтувань, будь ласка перезавантажте веб-сторінку.';
footer.appendChild(footerInfo);
