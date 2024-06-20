const listofbut = document.querySelectorAll('.button');

listofbut.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = button.id;
    });
});