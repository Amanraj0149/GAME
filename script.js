let userScore=0;
let compScore=0;

// sab choice ko acces karenge //
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const generateComputerchoice=() =>{ 
    const options=["rock","paper","scissors"];
  const randomidx=  Math.floor(Math.random()*3); // 0,1 ,2 dega 
  return options[randomidx];
  }

  const showwinner = (userwin,userscorechoice,compchoice) =>{
    if(userwin){
        console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`You win! Your ${userscorechoice} beats ${compchoice}`;;
        msg.style.backgroundColor = "green";
    } else{
      compScore++;
      compScorePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText=`You lost. ${compchoice} beats your ${userscorechoice}`;;
        msg.style.backgroundColor = "red";
    }
  
}

const drawgame = () =>{
    msg.innerText="game was draw";
    msg.style.backgroundColor = "#081b31";
}

const playgame=(userscorechoice) =>{   // play game ko pta hoga user ka choice isliye dale hai
  console.log("user choice=", userscorechoice);
  //generate computer choice -> modularway of prograaming //
  const compchoice=generateComputerchoice();
  console.log("comp choice=", compchoice);

  if(userscorechoice === compchoice){
    drawgame();
  }
  else {
    let userwin =true;
    if(userscorechoice=== "rock"){
      userwin =compchoice==="paper" ? false : true;
    }
    else if(userscorechoice=== "paper"){
         // ya to computer rock chose karega ya to scissor //
         userwin =compchoice==="scissors" ? false : true;
    }
    else{
        userwin =compchoice==="rock" ? false : true; // agar user ke pass scissor hua rock jitega
    }
    showwinner(userwin,userscorechoice,compchoice);
  }
};





choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // ID KO ACCES KARNE KE LIYE
        const userscorechoice=choice.getAttribute("id");
        playgame(userscorechoice);
    });
});