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
        
};       
</pre>
<hr>
<h2>эффект печатной машинки</h2>
<pre>
let delay = 55;
let nextm = 0;
let msg = [
    'Увага! Особи за орієнтуванням',
    'при собі можуть мати',
    'автоматичну та іншу зброю.',
    'При затриманні дотримуватися',
    'заходів особистої безпеки!'];

    function start_print() { do_print(msg[0], 0, 1); }

    function do_print(text, pos, dir) {
        let out = '<span class="start-print">' + text.substring(0, pos) + '</span>';

        document.getElementById("message").innerHTML = out;
        pos += dir;
        if (pos > text.length)
            setTimeout('do_print("' + text + '",' + pos + ',' + (-dir) + ')', delay * 10);
        else {
            if (pos < 0) {
                if (++nextm >= msg.length) nextm = 0;
                text = msg[nextm];
                dir = -dir;
            }
            setTimeout('do_print("' + text + '",' + pos + ',' + dir + ')', delay);
    }
}

start_print();
</pre>
