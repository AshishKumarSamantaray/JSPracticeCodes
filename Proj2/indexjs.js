const form = document.querySelector('form');
const result = document.querySelector('#results');

//cant be written as before clicking submit value remains 0 and it will take that value as input
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);


form.addEventListener('submit', function (e) {
    e.preventDefault();
    let bmi = 0;
    let message = '';
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please give correct height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please give correct weight';
    } else {
        bmi = (weight / ((height * height) / 10000)).toFixed(2);
    }

    if (bmi < 18.6) {
        message = 'underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        message = 'normal';
    } else {
        message = 'overweight';
    }

    result.innerHTML = `<span>${bmi} <br>${message}</span>`;
});