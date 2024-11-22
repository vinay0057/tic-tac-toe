let allDivs = document.querySelectorAll(".box");


let turnO = 0;
let indexForP1 = [];
let indexForP2 = [];

let winningPattern = [[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]];


allDivs.forEach((val, idx) => {
  val.addEventListener("click", () => {
    if (val.innerText == "") {
      if (turnO == 0) {
        val.innerText = "O";
        turnO = 1;
        indexForP1.push(idx);

      } else {
        val.innerText = "X";
        turnO = 0;
        indexForP2.push(idx);
      }
    }
    winner();
  })
})
function winner() {
  let count = 0;
  for (let position of winningPattern) {
    //console.log(position[0],position[1],position[2]);
    let ps1 = allDivs[position[0]].innerText;
    let ps2 = allDivs[position[1]].innerText;
    let ps3 = allDivs[position[2]].innerText;



    if (ps1 != "" && ps2 != "" && ps3 != "") {
      if (ps1 == ps2 && ps2 == ps3) {
        reset(ps1);
      }
    }
  }

  allDivs.forEach((val) => {
    val.addEventListener("click", () => {
      count++;
      if (count == 8) {
        reloads();
      }

    })
  })
}




function reset(name) {
  let winBox = document.querySelector("#winner-div");
  let msg = document.querySelector("#msg");


  winBox.style.justifyContent = "center";
  msg.innerText = `Winner is ${name}`
  winBox.style.display = "block";

  let resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    location.reload();
  })

}

function reloads(value) {

  setTimeout(() => {
    let looseBox = document.querySelector("#no-winner-banner");
    looseBox.style.display = "flex";
    looseBox.innerText = "Game Will Restart";
  }, 2000);
    setTimeout(()=>{
      location.reload()
    },3000);
}