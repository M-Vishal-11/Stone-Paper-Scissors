let user2 = "Rock";
function pressed2(message){
    user2 = message;
    document.getElementById("user2").innerHTML = user2;
}

import { status1 } from "./xp1";
export let status2 = false;
function start2(){
    let s2 = document.getElementById("status2");
    if(status1 == false){
        s2.innerHTML = "Waiting for player 1";
    }else{
        status2 = true;
        s2.innerHTML = "Ready To Play";
    }
}
