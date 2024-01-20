

let secretNum = (Math.floor(Math.random()*20)+1);

let val = 20; 
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if (!guess){
        document.querySelector('.message').textContent="No number";
    }else if (guess === secretNum){
            document.querySelector('.message').textContent ="You Win";
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent=secretNum;

            if (val > highScore){
                highScore = val;
                document.querySelector('.highscore').textContent = highScore;
            }

    }else if (guess > secretNum){
        if (val>1){
            document.querySelector('.message').textContent ="Too High";
            val--;
            document.querySelector('.score').textContent = val;
        }else{
            document.querySelector('.message').textContent ="You lose the Game";
            document.querySelector('.score').textContent = 0;
        }
        
    }else if (guess < secretNum){
        if (val>1){
            document.querySelector('.message').textContent ="Too Low";
            val--;
            document.querySelector('.score').textContent = val;
        }else{
            document.querySelector('.message').textContent ="You lose the Game";
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click',()=>{
    val = 20;
    secretNum = (Math.floor(Math.random()*20)+1);

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = val;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent= '?';
    document.querySelector('.message').textContent = 'Start guessing...';
})