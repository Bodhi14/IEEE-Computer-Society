let mybutton = document.getElementById("to-top");

window.onscroll = function() {
    if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

let act2 = document.getElementById("tact2");
let act1 = document.getElementById("tact1");

if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    act2.classList.add("active");
    act2.classList.remove("btn-secondary");
    act2.classList.add("btn-primary");
    act1.classList.remove("btn-primary");
    act1.classList.add("btn-secondary");

} else {
    if (act1.classList.contains("active") == false) {
        act1.classList.remove("btn-secondary");
        act1.classList.add("btn-primary");
        act2.classList.remove("active");
        act2.classList.remove("btn-primary");
        act2.classList.add("btn-secondary");

        act1.classList.add("active");
    }

}

function toscroll(x, y) {



    window.scrollBy(x, y);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;



}




mybutton.addEventListener("click", backToTop);