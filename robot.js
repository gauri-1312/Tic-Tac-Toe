const gridElement=document.querySelectorAll(".grid-item");
const playerstat=document.querySelector(".player-status");
const chooseButtonX=document.getElementById('chose-x');
const chooseButtonO=document.getElementById('chose-o');


// Javascript program to find the
// next optimal move for a player

let isMax=false;
let gameOver=false;


chooseButtonX.addEventListener('click',handleChooseButtonX)
function handleChooseButtonX() {document.querySelector('.option-page').classList.add('hide');xisnext=true;playerstat.innerHTML="It's X's turn !";}
chooseButtonO.addEventListener('click',handleChooseButtonO)
function handleChooseButtonO() {document.querySelector('.option-page').classList.add('hide');xisnext=false;playerstat.innerHTML="It's O's turn !";}


function checkGameStatus() {
  const one=gridElement[0].classList[2];
  const two=gridElement[1].classList[2];
  const three=gridElement[2].classList[2];
  const four=gridElement[3].classList[2];
  const five=gridElement[4].classList[2];
  const six=gridElement[5].classList[2];
  const seven=gridElement[6].classList[2];
  const eight=gridElement[7].classList[2];
  const nine=gridElement[8].classList[2];
  if(one&&one===two&&one===three){
      gameOver=true;
      playerstat.innerHTML=one+" has won !";
      gridElement[0].classList.add('change-color');gridElement[1].classList.add('change-color');gridElement[2].classList.add('change-color');
      return;
    }
  if(one&&one===four&&one===seven){
      gameOver=true;
      playerstat.innerHTML=one+" has won !";
      gridElement[0].classList.add('change-color');gridElement[3].classList.add('change-color');gridElement[6].classList.add('change-color');
      return;
    }
  if(one&&one===five&&one===nine){
      gameOver=true;
      playerstat.innerHTML=one+" has won !";
      gridElement[0].classList.add('change-color');gridElement[4].classList.add('change-color');gridElement[8].classList.add('change-color');
      return;
    }
  if(two&&two===five&&two===eight){
      gameOver=true;
      playerstat.innerHTML=two+" has won !";
      gridElement[1].classList.add('change-color');gridElement[4].classList.add('change-color');gridElement[7].classList.add('change-color');
      return;
    }
  if(three&&three===six&&three===nine){
      gameOver=true;
      playerstat.innerHTML=three+" has won !"; 
      gridElement[2].classList.add('change-color');gridElement[5].classList.add('change-color');gridElement[8].classList.add('change-color');
      return;
    }
  if(three&&three===five&&three===seven){
      gameOver=true;
      playerstat.innerHTML=three+" has won !";
      gridElement[2].classList.add('change-color');gridElement[4].classList.add('change-color');gridElement[6].classList.add('change-color');
      return;
    }
  if(four&&four===five&&four===six){
      gameOver=true;
      playerstat.innerHTML=four+" has won !";
      gridElement[3].classList.add('change-color');gridElement[4].classList.add('change-color');gridElement[5].classList.add('change-color');
      return;
    }
  if(seven&&seven===eight&&seven===nine){
      gameOver=true;
      playerstat.innerHTML=seven+" has won !";
      gridElement[6].classList.add('change-color');gridElement[7].classList.add('change-color');gridElement[8].classList.add('change-color');
      return;
    }
  else if(one&&two&&three&&four&&five&&six&&seven&&eight&&nine){
      gameOver=true;
      playerstat.innerHTML="It's a Draw !";
      return;
  }

}






function evaluate() {
  const one=gridElement[0].classList[2];
  const two=gridElement[1].classList[2];
  const three=gridElement[2].classList[2];
  const four=gridElement[3].classList[2];
  const five=gridElement[4].classList[2];
  const six=gridElement[5].classList[2];
  const seven=gridElement[6].classList[2];
  const eight=gridElement[7].classList[2];
  const nine=gridElement[8].classList[2];
  if(one&&one===two&&one===three){
      if(one==='x'){return 10;}
      if(one==='o'){return -10;}
    }
  if(one&&one===four&&one===seven){
      if(one==='x'){return 10;}
      if(one==='o'){return -10;}
    }
  if(one&&one===five&&one===nine){
      if(one==='x'){return 10;}
      if(one==='o'){return -10;}
    }
  if(two&&two===five&&two===eight){
      if(two==='x'){return 10;}
      if(two==='o'){return -10;}
    }
  if(three&&three===six&&three===nine){
      if(three==='x'){return 10;}
      if(three==='o'){return -10;}
    }
  if(three&&three===five&&three===seven){
      if(three==='x'){return 10;}
      if(three==='o'){return -10;}
    }
  if(four&&four===five&&four===six){
      if(four==='x'){return 10;}
      if(four==='o'){return -10;}
    }
  if(seven&&seven===eight&&seven===nine){
      if(seven==='x'){return 10;}
      if(seven==='o'){return -10;}
    }
  else if(one&&two&&three&&four&&five&&six&&seven&&eight&&nine){
      return 0;
  }

}



 
 
 
// This is the minimax function. It
// considers all the possible ways
// the game can go and returns the
// value of the board
function minimax(depth, isMax)
{
    let score = evaluate();
  
    // If Maximizer has won the game
    // return his/her evaluated score
    if (score === 10)
        return score;
  
    // If Minimizer has won the game
    // return his/her evaluated score
    if (score === -10)
        return score;
  
    // If there are no more moves and
    // no winner then it is a tie
    if (score === 0)
        return 0;
  
    // If this maximizer's move
    if (isMax)
    {
        let best = -1000;
  
        // Traverse all cells
        for(let i=0;i<gridElement.length;i++){
          // Check if cell is empty
          if(gridElement[i].classList[2]!='x'&&gridElement[i].classList[2]!='o')
          {
            //Make the move
            gridElement[i].classList.add('x');
                    // Call minimax recursively
                    // and choose the maximum value
                    best = Math.max(best, minimax(depth + 1, !isMax));
  
                    // Undo the move
                    gridElement[i].classList.remove('x');
                }
            }

        return best;
        }
    // If this minimizer's move
    else
    {
        let best = 1000;
        // Traverse all cells
        for(let i=0;i<gridElement.length;i++){
          // Check if cell is empty
          if(gridElement[i].classList[2]!='x'&&gridElement[i].classList[2]!='o')
          {
            //Make the move
            gridElement[i].classList.add('o');
                    // Call minimax recursively and
                    // choose the minimum value
                    best = Math.min(best, minimax(depth + 1, !isMax));
  
                    // Undo the move
                    gridElement[i].classList.remove('o');
                }
            }
        return best;
    }
}
 
// This will return the best possible
// move for the player
function findBestMove()
{
    let bestVal = -1000;
    let indexofbestMove=0;
  
    // Traverse all cells, evaluate
    // minimax function for all empty
    // cells. And return the cell
    // with optimal value.
    for(let i=0;i<gridElement.length;i++){
      // Check if cell is empty
      if(gridElement[i].classList[2]!='x'&&gridElement[i].classList[2]!='o')
      {
        //Make the move
        gridElement[i].classList.add('x');

        // compute evaluation function
                // for this move.
                let moveVal = minimax(0, true);

                // Undo the move
                gridElement[i].classList.remove('x');

                // If the value of the current move
                // is more than the best value, then
                // update best
                if (moveVal >= bestVal)
                {
                    indexofbestmove=i;
                    bestVal = moveVal;
                }
            }
        }    
    return indexofbestMove;
}

let j;

function clickCell(event){
  if(gameOver===false){
  if(event.target.classList[2]!='x'&&event.target.classList[2]!='o'){
      if(isMax===false){
          event.target.classList.add('o');
          j=findBestMove();
          gridElement[j].classList.add('x');
          if(gameOver===false){isMax=false;}
      }
    }
  }
}
 
// Driver code
for(let i=0;i<gridElement.length;i++){
  gridElement[i].addEventListener('click',clickCell);
  }
 
