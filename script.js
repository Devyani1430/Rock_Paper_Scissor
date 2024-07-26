let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".image")
const msg=document.querySelector("#msg")
const you=document.querySelector("#user")
const Computer=document.querySelector("#comp")
const drawGame=()=>{
    console.log("It is a Draw..😋")
    msg.innerText="It is a Draw..😋"
    msg.style.backgroundColor="skyblue"
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++;
        you.innerText=userscore
        console.log("You win...🥳")
        msg.innerText=`You Win..🥳 ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor="lightgreen"
    }else{
        compscore++;
        Computer.innerText=compscore;
        console.log("you loose, better luck next time..😜")
        msg.innerText=`You loose..😜 ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor="pink"
    }
}

const gencompChoice = () => {
    const option=["rock","paper","scissor"]
    // Random rock, paper, scissor
    const idx=Math.floor(Math.random()*3)
    return option[idx];
}

const playGame = (userChoice) =>{
    // Generate comp choice
    const compChoice=gencompChoice()
    console.log("User choice : ",userChoice)
    console.log("Computer choice : ",compChoice)

    if (userChoice==compChoice){
        // draw
        drawGame();
    }
    else{
        let userwin=true;
        if (userChoice=="rock"){
            // scissor , paper
            userwin=compChoice==="paper" ? false : true;
        } else if(userChoice=="paper"){
            //rock scissor
            userwin=compChoice==="scissor" ? false : true;
        }else{
            //rock scissor
            userwin=compChoice==="rock" ? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})