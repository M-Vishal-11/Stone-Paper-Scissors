let user;
function clicked(a){
    user = a;
    document.getElementById("user's").innerHTML = user;
}
function started(){
    let timer = 5;
    document.getElementById("timer").innerHTML = timer;
    let interval1 = setInterval(()=>{
        timer--;
        document.getElementById("timer").innerHTML = timer;
    }, 1000);

    let index = 0
    let intervalP1 = setInterval(()=>{
        let values = ['Stone', 'Paper', 'Scissors'];
        let p1 = document.getElementById("computer's");
        p1.innerHTML = values[index];
        if(index < 2){
            index++;
        }else{
            index = 0;
        }        
    }, 300);

    setTimeout(()=>{
        clearInterval(interval1);
        clearInterval(intervalP1);
        let computer = rand();
        finalResult(computer);
    }, 5001);
    
    function rand(){
        let p1 = document.getElementById("computer's");
        let values = ['Stone', 'Paper', 'Scissors'];
        let ranval = Math.floor(Math.random()*values.length);
        let computer = values[ranval];
        p1.innerHTML = computer;
        return computer;
    }

    function finalResult(computer){
        if(user == undefined){
            document.getElementById("timer").innerHTML = "Please Click any button";
        }else{
            if(user == computer){
                document.getElementById("timer").innerHTML = "Draw";
            }else if(user=='Stone' && computer == 'Scissors' || user=='Paper' && computer == 'Stone' || user=='Scissors' && computer=='Paper'){
                document.getElementById("timer").innerHTML = "User Won";
            }else{
                document.getElementById("timer").innerHTML = "Computer Won";
            }
        }
    }
}