function Toggler(selector) {
    this.element = document.querySelector("" + selector + "");
}

Toggler.prototype.getElem = function () {
    return this.element;
}
Toggler.prototype.show = function () {
    this.element.style.display = "block";
}

Toggler.prototype.hide = function () {
    this.element.style.display = "none";
}
var elem = new Toggler("#section");
var button = document.querySelector("#button");



button.addEventListener("click", function () {

    if (elem.getElem().style.display == "none") {
        elem.show();
    } else {
        elem.hide();
    }

}, false);