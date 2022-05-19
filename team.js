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
let act2 = document.getElementById("tact2");
let act1 = document.getElementById("tact1");
var flag = 0;

function toscroll(x, y) {

    act2.classList.add("active");
    act2.classList.remove("btn-secondary");
    act2.classList.add("btn-primary");
    act1.classList.remove("btn-primary");
    act1.classList.add("btn-secondary");

    if (act1.classList.contains("active")) {
        act1.classList.remove("active");
    }

    window.scrollBy(x, y);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toactivate() {
    if (act1.classList.contains("active") == false) {
        act1.classList.remove("btn-secondary");
        act1.classList.add("btn-primary");
        act2.classList.remove("active");
        act2.classList.remove("btn-primary");
        act2.classList.add("btn-secondary");

        act1.classList.add("active");
    }



}

let variable = document.getElementById("tact1");
variable.addEventListener("click", toactivate);
mybutton.addEventListener("click", backToTop);