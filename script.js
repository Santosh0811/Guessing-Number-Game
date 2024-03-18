let a; // The randomly generated number
    let guess = 0;

    // Function to start or restart the game
    function startGame() {
        a = Math.floor(Math.random() * 100) + 1;
        guess = 0;

        document.getElementById("result").innerHTML = "";
        document.getElementById("userInput").disabled = false;
        document.querySelector('button[type="submit"]').disabled = false;
    }

    // Call the startGame function when the page loads
    startGame();

    // Function to check the user's guess
    function checkGuess() {
        let userInput = parseInt(document.getElementById("userInput").value);

        if (isNaN(userInput)) {
            alert("Please enter a valid number.");
            return;
        }

        if (a < userInput) {
            document.getElementById("result").innerHTML = "Please enter a smaller number.";
        } else if (a > userInput) {
            document.getElementById("result").innerHTML = "Please enter a bigger number.";
        } else {
            guess++;
            document.getElementById("result").innerHTML = "Great! You guessed the correct number with " + guess + " guesses.<br>Your Score is " + (100 - guess) + " out of 100.<br>Computer Number was " + a + ".";
            document.getElementById("result").style.color = "Black";
            document.getElementById("userInput").disabled = true;
            document.querySelectorAll('button[type="submit"]').forEach(button => button.disabled = true);
        }

        // Reset the input field after each attempt
        document.getElementById("userInput").value = "";

        guess++;
    }

    // Function to restart the game
    function restartGame() {
        startGame();
    }