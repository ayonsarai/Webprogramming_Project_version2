// Sarai Ayon
// 10/12/2024
// Rock, Paper, Scissors game
//Project 2



// Event listeners for user choices
document.getElementById('rock').addEventListener('click', function() {
    playGame(1); // Rock is represented by 1
});
document.getElementById('paper').addEventListener('click', function() {
    playGame(2); // Paper is represented by 2
});
document.getElementById('scissors').addEventListener('click', function() {
    playGame(3); // Scissors is represented by 3
});
// Function to handle button click
function handleChoiceButtonClick(event) {
    // Remove 'selected' class from all buttons
    document.querySelectorAll('.choice-button').forEach(button => {
        button.classList.remove('selected');
    });

    // Toggle 'selected' class on the clicked button
    event.target.classList.toggle('selected');
}

// Add event listeners to the choice buttons
document.querySelectorAll('.choice-button').forEach(button => {
    button.addEventListener('click', handleChoiceButtonClick);
});

/**
 * Function to play the Rock-Paper-Scissors game
 * @param {number} userChoice - The user's choice (1 for Rock, 2 for Paper, 3 for Scissors)
 * 
 * This function uses higher-order functions as described in:
 * https://eloquentjavascript.net/05_higher_order.html
 */
function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors']; // Array of choices
    const randomNumber = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2
    const cowboyChoice = randomNumber + 1; // Map 0, 1, 2 to 1, 2, 3

    let resultMessage = "Cowboy draws " + choices[cowboyChoice - 1] + "!<br>"; // Display "Cowboy draws [cowboy's choice]!"

    if (userChoice === cowboyChoice) {
        resultMessage += "It's a draw, partner! Another round?"; // Display "It's a draw, partner! Another round?"
    } else if (userChoice === 1) { // Rock
        if (cowboyChoice === 3) { // Scissors
            resultMessage += "Rock crushes scissors! You win this round, partner!"; // Display "Rock crushes scissors! You win this round, partner!"
        } else {
            resultMessage += "Paper covers rock! The cowboy wins this duel!"; // Display "Paper covers rock! The cowboy wins this duel!"
        }
    } else if (userChoice === 2) { // Paper
        if (cowboyChoice === 1) { // Rock
            resultMessage += "Paper covers rock! You win this round, partner!"; // Display "Paper covers rock! You win this round, partner!"
        } else {
            resultMessage += "Scissors cut paper! The cowboy wins this duel!"; // Display "Scissors cut paper! The cowboy wins this duel!"
        }
    } else if (userChoice === 3) { // Scissors
        if (cowboyChoice === 2) { // Paper
            resultMessage += "Scissors cut paper! You win this round, partner!"; // Display "Scissors cut paper! You win this round, partner!"
        } else {
            resultMessage += "Rock crushes scissors! The cowboy wins this duel!"; // Display "Rock crushes scissors! The cowboy wins this duel!"
        }
    }

    document.getElementById('resultMessage').innerHTML = resultMessage; // Display the result in the result div

 // Add a prompt for replay or quit
    document.getElementById('resultMessage').innerHTML += `
        <br><br>Would you like to play again?
        <button onclick="playGamePrompt(true)">Yes</button>
        <button onclick="playGamePrompt(false)">No</button>
    `;
}

// Function to handle the play again or quit logic
function playGamePrompt(playAgain) {
    if (playAgain) {
        document.getElementById('resultMessage').innerHTML = ""; // Clear message for the next round
        document.querySelectorAll('.choice-button').forEach(button => {
            button.classList.remove('selected'); // Deselect previous choice button
            button.disabled = false; // Enable buttons for the next round
        });
    } else {
        document.getElementById('resultMessage').innerHTML = "Thanks for playing, partner!";
    }
}