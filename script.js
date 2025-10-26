const score = JSON.parse(localStorage.getItem('score')) || {
Wins:0,
Losses:0,
Ties:0 
};

updateScoreElement();

function pickComputerMove()
{
    const randomNumber = Math.random()
    let compMove = '';
    if(randomNumber>=0 && randomNumber<1/3)
    {
      compMove='Rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3)
    {
      compMove='Paper';
    }
    else if(randomNumber>=2/3 && randomNumber<1)
    {
      compMove='Scissor';
    }
    return compMove;
}

function playMove(playerMove)
{
  const compMove=pickComputerMove();
    let result='';
    if(playerMove === 'Scissor')
    {
      if(compMove==='Rock')
      {
        result = 'You Lose';
      }
      else if(compMove==='Paper')
      {
        result = 'You Win';
      }
      else if(compMove==='Scissor')
      {
        result = 'Tie';
      }
    }

    if(playerMove === 'Paper')
    {
      if(compMove==='Rock')
      {
        result ='You Win';
      }
      else if(compMove === 'Paper')
      {
        result = 'Tie';
      }
      else if(compMove === 'Scissor')
      {
        result = 'You Lose';
      }
    }

    if(playerMove === 'Rock')
    {
      if(compMove==='Rock')
      {
        result = 'Tie';
      }
      else if(compMove==='Paper')
      {
        result = 'You Lose';
      }
      else if(compMove==='Scissor')
      {
        result = 'You Win';
      }
    }
    
    if(result === 'You Win')
    {
      score.Wins++;
    }
    else if(result === 'You Lose')
    {
      score.Losses++;
    }
    else if(result === 'Tie')
    {
      score.Ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    displayResult(result);

    displayMove(playerMove,compMove);

    updateScoreElement();
}


//Additional Functions
function updateScoreElement()
{
  document.querySelector('.js-score').innerHTML = `
        <div class="score-item">
          <div class="score-label">Wins</div>
          <div class="score-value">${score.Wins}</div>
        </div>
        <div class="score-item">
          <div class="score-label">Losses</div>
          <div class="score-value">${score.Losses}</div>
        </div>
        <div class="score-item">
          <div class="score-label">Ties</div>
          <div class="score-value">${score.Ties}</div>
        </div>
      `;
}

function displayResult(result)
{
  document.querySelector('.js-result').
  innerHTML = result;
}

function displayMove(playerMove,compMove)
{
  document.querySelector('.js-move').
  innerHTML = `You ${playerMove} -- ${compMove} Computer`;
}

function resetScore()
{
  document.querySelector('.js-move').
  innerHTML = '';
  document.querySelector('.js-result').
  innerHTML = '';
}


