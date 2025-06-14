function checkAnswer() {
    // 1. Identify the correct answer.
    const correctAnswer = "4";

    //Retrieve the user's answer
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');

    // compare user answer with correct answer
    const feedbackElement = document.getElementById('feedback');

    if (!selectedRadioButton) {
        feedbackElement.textContent = "Please select an answer.";
        return; // Exit the function if no answer is selected
    }
    
    const userAnswer = selectedRadioButton.value;

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = 'red';
    }
}
 //add event listener to the submit button
const submitButton = document.getElementById('submit-answer');

submitButton.addEventListener('click', checkAnswer);
