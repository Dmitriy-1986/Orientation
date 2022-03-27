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
