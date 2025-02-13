let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");//accesing all the elements and tags by using queryselector
let msg = document.querySelector(".msg");
let newgame = document.querySelector(".newgame");

let turn0 = true;//playerx player0

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],// this is a 2d array which visualixe the winning patterns of any player,
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => { //adding eventlistener to each box to print the x and 0 value when it get clicked using innerText.
    box.addEventListener("click", () => {
        console.log("the box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;          //if else loop to make the condition of turn after one click by making the turn0 to false.
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;//to disable the box after one clicked to prevent the change 
        checkwinner();//function which check the winning condition
    });
}
);
const reset_btn = ()=>{
turn0 =true;
enablebox();  //function of reset button to reset the game .
msg.classList.add("hide");
}
const enablebox = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
} ;

const disablebox = ()=>{
    for(box of boxes){
        box.disabled=true;
        // box.innerText = "";
    }
} ;



showwinner = (pos1val)=>{
 msg.innerText = `winner is  ${pos1val}`;//to display the winner .
 msg.classList.remove("hide");
}

checkwinner = () => {//the main code whick checks the possibity of winning by examining all the box using loops

    for (let pattern of winpatterns) {
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        // console.log(pattern[0],pattern[1],pattern[2]);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val!="" && pos2val!="" && pos3val!="") {
            if (pos1val===pos2val&&pos2val===pos3val) {
                console.log("winner",pos1val);
                showwinner(pos1val);
                // reset_btn();

            }
            
        }

    }

}
resetbtn.addEventListener("click",reset_btn);//function call of reset and anewgame button
newgame.addEventListener("click",reset_btn);

