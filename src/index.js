module.exports = function toReadable(number) {
    const numberCount = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const numberCount2 = ["", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const numberTwo = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numberTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numberTens2 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numberBig = "hundred";

    let res = "";
    let tens54 = +`${number}`.split('').slice(1).join('');

    if (number >= 0 && number <= 10) {
        res = numberCount[number];
    } else if (number >= 11 && number <= 19) {
        res = numberTwo[number - 11];
    } else if (number < 99 && number % 10 === 0) {
        let tens = +`${number}`.split('')[0];
        res += numberTens[tens - 2];
    } else if (number >= 20 && number <= 99) {
        let tens = +`${number}`.split('')[0];
        let digits = +`${number}`.split('')[1];
        res += numberTens[tens - 2] + " " + numberCount2[digits];
    } else if (tens54 === 0) {
        let houndred = +`${number}`.split('')[0];
        res += numberCount2[houndred] + " " + numberBig;
    }
    else if (tens54 >= 1 && tens54 <= 9) {
        let houndred = +`${number}`.split('')[0];
        let digits = +`${number}`.split('')[2];
        res += numberCount2[houndred] + " " + numberBig + " " + numberCount[digits];
    } else if (number === 110) {
        res += numberCount2[1] + " " + numberBig + " " + numberCount[10];
    }
    else if (tens54 >= 11 && tens54 <= 19) {
        let houndred = +`${number}`.split('')[0];
        let tens = +`${number}`.split('').slice(2);
        res += numberCount2[houndred] + " " + numberBig + " " + numberTwo[tens - 1];
    } else if (tens54 % 10 === 0) {
        let houndred = +`${number}`.split('')[0];
        let tens = +`${number}`.split('')[1];
        res += numberCount2[houndred] + " " + numberBig + " " + numberTens2[tens - 1];
    } else {
        let houndred = +`${number}`.split('')[0];
        let tens = +`${number}`.split('')[1];
        let digits = +`${number}`.split('')[2];
        res += numberCount2[houndred] + " " + numberBig + " " + numberTens[tens - 2] + " " + numberCount2[digits];
    }

    return res
}