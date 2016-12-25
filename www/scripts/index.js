function upDateColor() {


    document.body.style.backgroundColor = newColor();


}
function getRandomInt() {
    return Math.floor(Math.random() * (255 + 1));
}
function newColor() {

    var num1 = getRandomInt();
    var num2 = getRandomInt();
    var num3 = getRandomInt();

    return "rgb(" + num1 + "," + num2 + "," + num3 + ")";
}