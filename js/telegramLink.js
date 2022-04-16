let bodyElement = document.querySelector('body');

let telegramLink = document.createElement('a');
    telegramLink.setAttribute('title', 'Telegram');
    telegramLink.setAttribute('href', 'https://t.me/patrol_police_zp');
    telegramLink.setAttribute('target', '_blank');
    telegramLink.classList.add('messenger-links');
    telegramLink.id = "telegramLink";
    bodyElement.appendChild(telegramLink);

let telegramImg = document.createElement('img');
    telegramImg.setAttribute('src', './images/telegram-icon.svg');
    telegramImg.setAttribute('alt', 'Telegram');
    telegramLink.appendChild(telegramImg);                 
                    
//myrotvorets
let myrotvoretsLink = document.createElement('a');
    myrotvoretsLink.setAttribute('title', 'Миротворець');
    myrotvoretsLink.setAttribute('href', 'https://myrotvorets.center/');
    myrotvoretsmLink.setAttribute('target', '_blank');
    myrotvoretsLink.classList.add('myrotvorets-links');
    myrotvoretsLink.id = "telegramLink";
    bodyElement.appendChild(myrotvoretsLink);

let myrotvoretsImg = document.createElement('img');
    myrotvoretsImg.setAttribute('src', './images/myrotvorets.svg');
    myrotvoretsImg.setAttribute('alt', 'Миротворець');
    myrotvoretsLink.appendChild(myrotvoretsImg);  
