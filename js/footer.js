const now = new Date().toLocaleString();

let footer = document.getElementById('footer');
let footerInfo = document.createElement('p');
footerInfo.innerHTML = 'Всього: <span style=\'color: #dc3545;\'>' + data.length + '</span> орієнтування, ';
footerInfo.innerHTML += 'станом на: ' + now + ', для перевірки оновлень орієнтувань, будь ласка перезавантажте веб-сторінку.';
footer.appendChild(footerInfo);
