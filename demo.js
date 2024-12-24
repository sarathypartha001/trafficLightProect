let results = document.querySelector(".result");
let lightRed  = document.querySelector(".red");
let lightYellow  = document.querySelector(".yellow");
let lightGreen  = document.querySelector(".green");
let btncontainer = document.querySelector(".btn-container");

function red(){
    lightRed.style.backgroundColor = "rgb(124, 2, 2)";
    lightYellow.style.backgroundColor = "rgb(252, 252, 154)";
    lightGreen.style.backgroundColor= "rgb(159, 255, 159)";
    results.innerHTML = "Stop a Vehicle";
}
function yellow(){
    lightRed.style.backgroundColor = "rgb(255, 112, 112)";
    lightGreen.style.backgroundColor= "rgb(159, 255, 159)";
    lightYellow.style.backgroundColor = "rgb(255, 255, 0)";
    results.innerHTML = "Ready to start Vehicle";
}
function Green(){
    lightGreen.style.backgroundColor = "rgb(0, 255, 0)";
    lightYellow.style.backgroundColor = "rgb(252, 252, 154)";
    lightRed.style.backgroundColor = "rgb(255, 112, 112)";
    results.innerHTML = "Go";
}

let [seconds]=[1] ;
let timer = document.querySelector(".timer")
let time = null;

function Clock(){
    let displaySeconds ;
     seconds++;
     if(seconds== 60){
        seconds=0;
     }
     if(seconds <= 30){
        displaySeconds = seconds;
        timer.textContent = `${displaySeconds}`;
        lightRed.style.backgroundColor = "rgb(124, 2, 2)";
        lightYellow.style.backgroundColor = "rgb(252, 252, 154)";
        lightGreen.style.backgroundColor= "rgb(159, 255, 159)";
        results.innerHTML = "Stop a Vehicle";
     }else if(seconds <= 35){
        displaySeconds = seconds - 30;
        timer.textContent = `${displaySeconds}`;
        lightRed.style.backgroundColor = "rgb(255, 112, 112)";
        lightGreen.style.backgroundColor= "rgb(159, 255, 159)";
        lightYellow.style.backgroundColor = "rgb(255, 255, 0)";
        results.innerHTML = "Ready to start Vehicle";
     }else if(seconds <= 60){
        displaySeconds = seconds - 35
        timer.textContent = `${displaySeconds}`;
        lightGreen.style.backgroundColor = "rgb(0, 255, 0)";
        lightYellow.style.backgroundColor = "rgb(252, 252, 154)";
        lightRed.style.backgroundColor = "rgb(255, 112, 112)";
        results.innerHTML = "Go";
     }
}
function startClock(){
    btncontainer.style.display = "none";
    if(time !==null){
        clearInterval(time)
    }
    time = setInterval(Clock,1000);
}
