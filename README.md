<a href="https://dmitriy-1986.github.io/Orientation/">www.orientation.pp.ua</a>
<pre>

const heightOutput = document.querySelector("#height");
        const widthOutput = document.querySelector("#width");

function resizeListener() {
        heightOutput.textContent = window.innerHeight;
        widthOutput.textContent = window.innerWidth;
}

window.addEventListener("resize", resizeListener);
</pre>
