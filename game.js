let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let turn=true;
let ngame=document.querySelector("#new");
let msgc=document.querySelector(".msgcon");
let msg=document.querySelector(".msg")
const wpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
    
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turn){   
          box.innerText="O";
          turn=false;
        }
        else{
            box.innerText="X";
          turn=true;
        }
        box.disabled=true;
        checkwinr();
    });
});
const disablebox=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const checkwinr=()=>{
  for(let pattern of wpattern){
    let val1=boxes[pattern[0]].innerText;
    let val2=boxes[pattern[1]].innerText;
    let val3=boxes[pattern[2]].innerText;
    if(val1!=""&&val2!=""&&val3!=""){
      if(val1===val2&&val2===val3){
        console.log(`the winner is ${val1}`);
        msgc.classList.remove("hide");
        disablebox();

      }
    }

  }
}

ngame.addEventListener("click",()=>{     
  msgc.classList.add("hide");
  turn=true;
  enablebox();
});
reset.addEventListener("click",()=>{
  msgc.classList.add("hide");
  turn=true;
  enablebox();
});
const enablebox=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}