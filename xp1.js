let user1 = "Rock";
function pressed1(message){
    user1 = message;
    document.getElementById("user1").innerHTML = user1;
}

import { status2 } from "./xp2.js";
export let status1 = false;
function start1(){
    let s1 = document.getElementById("status1");
    if(status2 == false){
        s1.innerHTML = "Waiting for player 2";
    }else{
        status1 = true;
        s1.innerHTML = "Ready To Play";
    }
}