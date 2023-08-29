



let startingPage = document.querySelector('#startingPage')  //Todo ====> First page
let player1 = document.querySelector('#player1')    //Todo ====> Second page
let playerTwo = document.querySelector('#startingPage1')    //Todo ====> Third page
let player2= document.querySelector('#player2')     //Todo======> Fourth page
let last = document.querySelector('#last')    //Todo ====> Last page 1(Game-over)
let winner = document.querySelector('#winner')    //Todo ====> Last page 2(Winner)


let startGame = document.querySelector('.startGame')        //Button
let letsPlay = document.querySelector('.letsPlay')            //Button
let startGame2 = document.querySelector('.startGame2')      //Button
let letsPlay2= document.querySelector('.letsPlay2')         //Button


let inputBox = document.querySelector('.input-box')     
let inputBox2 = document.querySelector('.input-box2')
let inputBox3 = document.querySelector('.input-box3')
let inputBox4 = document.querySelector('.input-box4')   


let playerName = document.querySelector('.playerName')
let playerName2= document.querySelector('.playerName2')
let winnerPlayer= document.querySelector('.winnerPlayer')
let gameOver= document.querySelector('.g-over')
let chances= document.querySelector('.chances')             
let chances2= document.querySelector('.chance5')             

           




startGame.addEventListener('click', function () {

    if (inputBox.value == '') {
        alert('Please enter a name')
 
    }
    else {
        player1.style.display = 'block'
        startingPage.style.display = 'none'
        let text='Player-1: '
        playerName.innerHTML = text + inputBox.value
        playerName.style.textTransform = 'capitalize'
 
    }

})

//!Unfixed

let count=5


letsPlay.addEventListener('click', function () {
    
    if (inputBox2.value < 1 || inputBox2.value > 10 || inputBox2.value == '') {
        alert('Please Pick a number from 1 to 10')
        inputBox2.value=''
    }
    else {
        if (inputBox2.value - 100) {
            playerTwo.style.display='block'
            player1.style.display = 'none'
            chances.innerHTML=count
        }
        else {
            alert('Please Pick a number from 1 to 10')
            inputBox2.value=''
        }
        
    }

})


startGame2.addEventListener('click', function () {
    if (inputBox3.value == '' ||inputBox3.value==inputBox.value) {
        alert('Please enter a name or different name')
        inputBox3.value=''
 
    }
    else {
        player2.style.display = 'block'
        playerTwo.style.display = 'none'
        let text2='Player-2: '
        playerName2.innerHTML = text2 + inputBox3.value
        playerName2.style.textTransform = 'capitalize'
       chances2.innerHTML=count
 
    }
})



letsPlay2.addEventListener('click', function () {
    if (inputBox2.value == inputBox4.value) {
        
        winner.style.display='block'
        player2.style.display = 'none'

        let word = inputBox3.value

                    let firstLetter = word.charAt(0)
                    
                    let firstLetterCap = firstLetter.toUpperCase(0)
                    
                    let remainingLetters = word.slice(1)
                    
                    let capitalizedWord = firstLetterCap + remainingLetters
            
                    winnerPlayer.innerHTML = capitalizedWord +' you Winner!!!'
                    winnerPlayer.style.color='#7041D3'

        
    } else {
        count--
        chances2.innerHTML = count
        inputBox4.value = ''
        if (count == 0) {
            winner.style.display='block'
            player2.style.display = 'none'
            
            let word2 = inputBox.value

            let firstLetter2 = word2.charAt(0)
            
            let firstLetterCap2 = firstLetter2.toUpperCase(0)
            
            let remainingLetters2 = word2.slice(1)
            
            let capitalizedWord2 = firstLetterCap2 + remainingLetters2
    
            winnerPlayer.innerHTML = capitalizedWord2 +' you Winner!!!'
            winnerPlayer.style.color='#7041D3'

        }

    }
})




//!Next

    
    
// startGame2.addEventListener('click', function () {
    
//     if (inputBox3.value == '') {
//     alert ('Please enter your name')
//     }
//     else {
//         let randomNumber;
//         for (let i = 1; i <= 5; i++){
//             randomNumber = Math.floor(Math.random() * 10 + 1)

//            console.log('My-Number is '+ inputBox2.value)
//             console.log(randomNumber)
//         }
//         if (inputBox2.value == randomNumber ) {
            
//             playerTwo.style.display='none'
//             last.style.display = 'block'
//             gameOver.innerHTML = 'Game over!!!'
//             gameOver.style.color='red'
//             console.log('found')
//             console.log(inputBox2.value == randomNumber)
           
//         }
//         else {
//             let word = inputBox.value

//             let firstLetter = word.charAt(0)
            
//             let firstLetterCap = firstLetter.toUpperCase(0)
            
//             let remainingLetters = word.slice(1)
            
//             let capitalizedWord = firstLetterCap + remainingLetters
//             winner.style.display='block'
//             playerTwo.style.display = 'none'
//             winnerPlayer.innerHTML = capitalizedWord +' you Winner!!!'
//             winnerPlayer.style.color='#7041D3'
//         }


       

//     }

// })




