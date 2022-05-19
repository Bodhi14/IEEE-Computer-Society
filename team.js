let mybutton = document.getElementById("to-top");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function toscroll(x, y) {
    let act = document.getElementById("tact2");
    act.classList.add("active");
    window.scrollBy(x, y);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toactivate() {
    let act = document.getElementById("tact1");
    act.classList.add("active");

}

let variable = document.getElementById("tact1");
variable.addEventListener("click", toactivate)
mybutton.addEventListener("click", backToTop);