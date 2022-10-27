
function timer(){
    setTimeout(() => {
        alert("Уақыт бітті");
    }, 3 * 1000);
}

timer();

function interval(){
    let minut = 6;
    const intervalId = setInterval(() => {
        if (minut > 0) {
            console.log(minut);
            minut--;
        } else {
            console.log("Уақыт бітті");
            clearInterval(intervalId);
        }
    }, 1000);
}

interval();
