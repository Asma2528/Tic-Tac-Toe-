// User input for taking player names
let player1=prompt("Enter the name of Player 1: ");
let player2=prompt("Enter the name of Player 2: ");

// Fecthing all required html elements
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");
let container = document.querySelector(".container");
let resetbtn=document.getElementById('reset');
let boxes = document.querySelectorAll(".box");
let newgamebtn = document.getElementById('new');

let turn=true; //For player1
let count=0; // to check for draw

// Winning Patters
let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const disableBtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};

const winner=(player)=>{
    disableBtns();
    msg.innerHTML=`Congratulations ${player}, You won the game!&#129395; &#127882;`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
    count=0;
}

const draw=()=>{
    disableBtns();
    msg.innerHTML=`Its a draw!`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
}

const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText; //pattern 0 gives us 1st position of pattern. boxes[pattern[0]] will give us that index button
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                if(pos1Val==='X'){
                    winner(player1);
                }
                else if(pos1Val==='O'){
                    winner(player2);
                }
                
            }
        }     
    }

    if(count==9){
        draw();
    }
};


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText='X';
            turn=false;
        }
        else{
            box.innerText='O';
            turn=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
    })
});


resetbtn.addEventListener("click",()=>{
    enableBtns();
})

newgamebtn.addEventListener("click",()=>{
    msgContainer.classList.add("hide");
    container.classList.remove("hide");
    enableBtns();
})