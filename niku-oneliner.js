/**
 * Function to toggle the visibility of the solution.
 * @param {HTMLElement} buttonElement - The button that was clicked.
 */
function toggleAnswer(buttonElement) {
  // Select the next element after the button (which is the answer paragraph)
  const answerP = buttonElement.nextElementSibling;
  
  // Check the current display status
  const isHidden = window.getComputedStyle(answerP).display === 'none';

  if (isHidden) {
    // Show Answer
    answerP.style.display = 'block';
    buttonElement.textContent = 'Hide Solution';
    buttonElement.style.background = '#f44336';
    buttonElement.style.color = '#fff';
  } else {
    // Hide Answer
    answerP.style.display = 'none';
    buttonElement.textContent = 'Show Solution';
    buttonElement.style.background = 'transparent';
    buttonElement.style.color = '#111';
  }
}
