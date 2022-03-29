<a href="https://dmitriy-1986.github.io/Orientation/">www.orientation.pp.ua</a>
<br><br>
<h2>Высота, ширина окна</h2>
<pre>

<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
    
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function resizeListener() {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
}

window.addEventListener("resize", resizeListener);

</pre>

<hr>
<h2>Чтение объекта</h2>
<pre>
const dataTest = [
    {test: "1 - test lorem ipsum dolor sit amet ...."},
    {test: "2 - test lorem ipsum dolor sit amet ...."},
    {test: "3 - test lorem ipsum dolor sit amet ...."},
    {test: "4 - test lorem ipsum dolor sit amet ...."},
];

let objTest = document.createElement('div');
win.appendChild(objTest);

let dataCopy = dataTest;

for(let i = 0; i < dataCopy.length; i++) {
        let test = dataTest[i].test;
        let objTestParagrtaph = document.createElement('p');
        objTestParagrtaph.style.fontWeight = "bold";
        objTestParagrtaph.innerHTML = test;  
        objTest.appendChild(objTestParagrtaph);
}       
</pre>
