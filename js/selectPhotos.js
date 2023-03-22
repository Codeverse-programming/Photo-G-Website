count = 0;

function counterFunc() {
    // count++;
    // document.getElementById("count").innerHTML = count;
    // document.getElementById("click-button").style.display = "none";

    if (typeof (Storage) !== "undefined") {
        if (localStorage.count) {
            localStorage.count = Number(localStorage.count) + 1;
        } else {
            localStorage.count = 1;
        }
        document.getElementById("count").innerHTML = localStorage.count;
        document.getElementById("click-button").style.display ="none"
        // document.getElementById("select-button").style.display ="block"
    } else {
        document.getElementById("count").innerHTML = "Sorry, the browser you used does not support web storage.";
    }
}

function hideFunc() {
    // count--;
    // document.getElementById("count").innerHTML = count;

    if (typeof (Storage) !== "undefined") {
        if (localStorage.count) {
            localStorage.count = Number(localStorage.count) - 1;
        } else {
            localStorage.count = 1;
        }
        document.getElementById("count").innerHTML = localStorage.count;
        // document.getElementById("select-button").style.display = "block"
    } else {
        document.getElementById("count").innerHTML = "Sorry, the browser you used does not support web storage.";
    }
}

// document.querySelector(".clickedButton").addEventListener("click", e => {
//     e.preventDefault();
//     document.querySelector(".showButton").style.backgroundColor = "red"
// });
// document.querySelector(".clickedBtn").addEventListener("click", e => {
//     e.preventDefault();
//     document.querySelector(".showButton").style.background = "green"
// });

function changeColor(color) {
    document.querySelector(".showM").style.background = color;
}
function moveColor(colored) {
    document.querySelector(".showS").style.background = colored;
}
function freeColor(color1) {
    document.querySelector(".showL").style.background = color1;
}
function sizeColor(color2) {
    document.querySelector(".sizeS").style.border = color2;
}
function size1Color(color3) {
    document.querySelector(".sizeL").style.border = color3;
}
function size2Color(color4) {
    document.querySelector(".sizeM").style.border = color4;
}
function size3Color(color5) {
    document.querySelector(".sizeA").style.border = color5;
}
function size4Color(color6) {
    document.querySelector(".sizeB").style.border = color6;
}
function size5Color(color7) {
    document.querySelector(".sizeC").style.border = color7;
}
function gfg_Run() {
    changeColor('red');
    moveColor('none');
    freeColor('none');
    // el_down.innerHTML = "Background Color changed";
}
function mfg_Run() {
    moveColor('red');
    changeColor('none');
    freeColor('none');
}
function ffg_Run() {
    moveColor('none');
    changeColor('none');
    freeColor('red');
}
function size3_Run() {
    size3Color('none');
    size4Color('none');
    size5Color('none');
}
function size4_Run() {
    size3Color("red");
    size4Color("none");
    size5Color("none");
}
function size5_Run() {
    size3Color("none");
    size4Color("red");
    size5Color("none");
}
function size_Run() {
    sizeColor("5px solid red");
    size1Color("1px solid black");
    size2Color("1px solid black");
}
function size1_Run() {
    sizeColor("1px solid black");
    size1Color("5px solid red");
    size2Color("1px solid black");
}
function size2_Run() {
    sizeColor("1px solid black");
    size1Color("1px solid black");
    size2Color("5px solid red");
}
