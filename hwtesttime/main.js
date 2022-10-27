// const container = document.getElementsByClassName("container");
// const btnStart = document.getElementById("btn_start");
// const startTime = document.getElementById("start_time");
// const timer = document.getElementById("timer");
// const endTime = document.getElementById("end_time");
// const time = document.getElementById("time");

const btnStart = document.querySelector('#btn_start');
const startTime = document.querySelector('#start_time');
const timer = document.querySelector('#timer');
const btnEnd = document.querySelector('#btn_end');
const endTime = document.querySelector('#end_time');


btnStart.style.color = "green";
btnStart.style.backgroundColor = "yellow";



btnStart.addEventListener("click", () => {
    let now = new Date();
    startTime.innerHTML = now;

    function interval(){
        let minut = 45;
        const intervalId = setInterval(() => {
            if (minut > 0) {
                timer.innerHTML = minut;
                minut--;
            } else {
                timer.innerHTML = "Уақыт бітті";
                clearInterval(intervalId);
            }
        }, 1000);
    }

    interval();
});

btnEnd.addEventListener("click", () => {
    let end = new Date();
    endTime.innerHTML = end;
    
    const time = document.createElement("h2");
    document.body.appendChild(time);



});


// console.log("Element: ", container, btnStart, startTime, time, endTime, time);