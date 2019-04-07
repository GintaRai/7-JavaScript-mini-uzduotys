console.log('Kintamuju inicijavimas');

console.log('***1***');

var number_1 = 3;
console.log(number_1);
var number_2 = 5;
console.log(number_2);
var number_3 = 7;
console.log(number_3);

console.log('***2***');

var text_1 = 'saule';
console.log(text_1);
var text_2 = 'dangus';
console.log(text_2);
var text_3 = 'zeme';
console.log(text_3);

console.log('***3***');

var numberArray_1 = [1, 2, 3, 4, 5];
console.log(numberArray_1);
var numberArray_2 = [5, 4, 3, 2, 1];
console.log(numberArray_2);
var numberArray_3 = [1, 2, 3, 2, 1]
console.log(numberArray_3);

console.log('***4***');

var textArray_1 = ['ab', 'bc', 'cd', 'de', 'ef'];
console.log(textArray_1);

var textArray_2 = ['bla', 'bla', 'bla', 'bla', 'bla'];
console.log(textArray_2);

var textArray_3 = ['saule', 'dangus', 'zeme', 'jura', 'pieva'];
console.log(textArray_3);

console.log('***********************');
console.log('Veiksmai su kintamaisiais');
console.log('***1***');

var numbers_1_2_3_suma = number_1 + number_2 + number_3;
console.log(numbers_1_2_3_suma);

console.log('***2***')

var text_1_2_3_su_tarpais = text_1 + ' ' + text_2 + ' ' + text_3;
console.log(text_1_2_3_su_tarpais);


console.log('***3***');

var numberArray_1sum = numberArray_1[0]-numberArray_1[1]+numberArray_1[2]-numberArray_1[3]+numberArray_1[4];
console.log(numberArray_1sum);

var numberArray_2sum = numberArray_2[0]-numberArray_2[1]+numberArray_2[2]-numberArray_2[3]+numberArray_2[4];
console.log(numberArray_2sum);

var numberArray_3sum = numberArray_3[0]-numberArray_3[1]+numberArray_3[2]-numberArray_3[3]+numberArray_3[4];
console.log(numberArray_3sum);

console.log('***4***');

var ilgas_tekstas_1 = textArray_1[4] + ', '
                        + textArray_1[3] + ', '
                        + textArray_1[2] + ', '
                        + textArray_1[1] + ', '
                        + textArray_1[0];
console.log(ilgas_tekstas_1);

var ilgas_tekstas_2 = textArray_2[4] + ', '
                        + textArray_2[3] + ', '
                        + textArray_2[2] + ', '
                        + textArray_2[1] + ', '
                        + textArray_2[0];
console.log(ilgas_tekstas_2);

var ilgas_tekstas_3 = textArray_3[4] + ', '
                        + textArray_3[3] + ', '
                        + textArray_3[2] + ', '
                        + textArray_3[1] + ', '
                        + textArray_3[0];
console.log(ilgas_tekstas_3);

console.log('***********************');
console.log('Kintamuju palyginimas');
console.log('***1***Tarpusavyje palyginti skaiciaus tip kintamuosius');

//kuris didesnis
if (number_1 > number_2) {
    console.log('Pomidoras');  
} else {
    console.log('Bandykite kita karta');
}

if (number_1 > number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 > number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 > number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 > number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 > number_2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//kuris mazesnis

if (number_1 < number_2) {
    console.log('Pomidoras');  
} else {
    console.log('Bandykite kita karta');
}

if (number_1 < number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 < number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 < number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 < number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 < number_2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//ar jie lygus
if (number_1 === number_2) {
    console.log('Pomidoras');  
} else {
    console.log('Bandykite kita karta');
}

if (number_1 === number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 === number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 === number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 === number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 === number_2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//ar jie nelygus
if (number_1 != number_2) {
    console.log('Pomidoras');  
} else {
    console.log('Bandykite kita karta');
}

if (number_1 != number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 != number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 != number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 != number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 != number_2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//kuris didesnis arba lygus
if (number_1 >= number_2) {
    console.log('Pomidoras');  
} else {
    console.log('Bandykite kita karta');
}

if (number_1 >= number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 >= number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 >= number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 >= number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 >= number_2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

//kuris mazesnis arba lygus
if (number_1 <= number_2) {
    console.log('Pomidoras');  
} else {
    console.log('Bandykite kita karta');
}

if (number_1 <= number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 <= number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_2 <= number_3) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 <= number_1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

if (number_3 <= number_2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

console.log('***2***Isvesti teksto tipo kintamuju ilgius');

var text_1 = 'saule';
var n_1 = text_1.length;
console.log(n_1);

var text_2 = 'dangus';
var n_2 = text_2.length;
console.log(n_2);

var text_3 = 'zeme';
var n_3 = text_3.length;
console.log(n_3);

console.log('***3***Tarpusavyje palyginti teksto tipo kintamuju ilgius');

//kuris didesnis
if (n_1 > n_2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}
