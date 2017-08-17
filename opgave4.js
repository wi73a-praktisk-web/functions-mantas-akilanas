function calculator() {
    var result = 0;
    return {
        add: function (x) {
            result += x;
        },
        sub: function (x) {
            result -= x;
        },
        gange: function (x) {
            result *= x;
        },
        divider: function (x) {
            result /= x;
        },
        pi: function (x) {
            result *= Math.PI;
        },
        kvadrat: function (x) {
            result = Math.sqrt(result);
        },
        result: function () {
            return result;
        }
    }
}

var calc = calculator();
calc.add(10);
calc.gange(5);
calc.divider(3);
calc.sub(4);
calc.pi();
calc.kvadrat();

console.log(calc.result().toFixed(2));

var calc2 = calculator();

calc2.add(15);
calc2.gange(7);
calc2.divider(8);
calc2.sub(1);
calc2.pi();
calc2.kvadrat();

console.log(calc2.result().toFixed(2));
console.log(calc.result().toFixed(2));
