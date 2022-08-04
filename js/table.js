let body = document.body;
let table = document.createElement('table');
table.innerHTML = '<tr><th>№ з/п</th><th>Марка авто</th><th>Державний номер</th><th>Повідомлення</th></tr>';

for (let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');
    tr.innerHTML += `<td class="number">${(i + 1)}</td>`;
    tr.innerHTML += `<td class="brand-n-number">${data[i].brand}</td>`;
    tr.innerHTML += `<td class="brand-n-number">${data[i].number}</td>`;
    tr.innerHTML += `<td class="msg">${data[i].msg}</td>`;
    tr.innerHTML += '</tr>';
    table.append(tr);
};

body.append(table);