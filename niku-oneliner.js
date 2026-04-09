function toggleAnswer(buttonElement) {
    // Button ke turant baad wala element (p.quiz-answer)
    const answerP = buttonElement.nextElementSibling;
    
    // Check if hidden or shown
    const isHidden = window.getComputedStyle(answerP).display === 'none';

    if (isHidden) {
        answerP.style.display = 'block';
        buttonElement.textContent = 'Hide Solution';
        buttonElement.style.background = '#f44336';
        buttonElement.style.color = '#fff';
    } else {
        answerP.style.display = 'none';
        buttonElement.textContent = 'Show Solution';
        buttonElement.style.background = 'transparent';
        buttonElement.style.color = '#111';
    }
}
