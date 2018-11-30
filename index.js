const sqaures = document.querySelectorAll(".innerSqaure");

const conditionsToWin = [

  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 8]

];

var game = {
  first: true,
  user: '',
  computer: '',
  currentPlayer: '',
  moves: 1,
};

function start() {
  $('#myModal'.modal('show'));
}

function setFig(id) {
  if (id === 'x') {
    game.user = '<span class="fa fa-times"></span>';
    game.computer = '<span class="fa fa-circle-o"></span>';
  } else if (id === 'o') {
    game.user = '<span class="fa fa-circle-o"></span>';
    game.computer = '<span class="fa fa-times"></span>';
  }
  firstMove();
  setCurrPl('user');
}

// const cards = document.querySelectorAll(".card");
// const winner = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];
// let firstPlayer = [], secondPlayer = [], count = 0;
// /*******************************************************/
// function check(array) {
//   let finalResult = false;
//   for (let item of winner) {
//     let res = item.every(val => array.indexOf(val) !== -1);
//     if (res) {
//       finalResult = true;
//       break;
//     }
//   }
//   return finalResult;
// }
// /*******************************************************/
// function winnerpleyr(p) {
//   const modal = document.createElement("div");
//   const player = document.createTextNode(p);
//   const replay = document.createElement("button");
//   modal.classList.add("winner");
//   modal.appendChild(player);
//   replay.appendChild(document.createTextNode("Replay"));
//   replay.setAttribute("onclick", "rep()");
//   modal.appendChild(replay);
//   document.body.appendChild(modal);
// }
// /*******************************************************/
// function draw() {
//   if (this.classList == "card") {
//     count++;
//     if (count % 2 !== 0) {
//       this.classList.add("x");
//       firstPlayer.push(Number(this.dataset.index));
//       if (check(firstPlayer)) {
//         winnerpleyr("Congrats player one you win");
//       }
//     } else {
//       this.classList.add("o");
//       secondPlayer.push(Number(this.dataset.index));
//       if (check(secondPlayer)) {
//         winnerpleyr("Congrats player two you win");
//       }
//     }
//     if (count === 9) {
//       winnerpleyr("Draw");
//     }
//   }
// }
// /*******************************************************/
// function rep() {
//   const w = document.querySelector(".winner");
//   cards.forEach(card => card.classList = "card");
//   firstPlayer = [];
//   secondPlayer = [];
//   count = 0;
//   w.remove();
// }
// /*******************************************************/
// cards.forEach(card => card.addEventListener("click", draw));