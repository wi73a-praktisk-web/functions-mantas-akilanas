var x = 25
var y = 5;
var result = 0;
function plus(tal){
    result += tal;
    console.log(result);
}
function minus(tal){
    result -= tal;
    console.log(result);
}
function gange(tal){
    result *= tal;
    console.log(result);
}
function divider(tal){
    result /= tal;
    console.log(result);
}
plus(5);
minus(4);
gange(3);
divider(2);
console.log(result);