const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

const randomcolor = function() {
    let color = '#';
    const hex = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
 let intervalId;

start.addEventListener('click', function() {
        intervalId = setInterval(() => {
            document.body.style.background = randomcolor();
        }, 1000);


});

stop.addEventListener('click', function() {
    clearInterval(intervalId);
    intervalId=null
});


