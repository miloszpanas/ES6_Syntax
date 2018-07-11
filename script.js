// Zadanie pierwsze

const one = 'Hello';
const two = 'World';

console.log(`${one} ${two}`);

// Zadanie drugie

const multiply = (a, b = 1) => console.log(a*b);

// Zadanie trzecie

const avg = (...data) => data.reduce((prev, curr) => prev + curr) / data.length;

console.log(avg(2,3,34,5,6));


// zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(avg(...grades));

// zadanie piąte

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, ,lastName] = data;

console.log(`${firstName} ${lastName}`);

