const questionsSet = new Set([
    'define html',
    'uses of html',
    'what is css and its uses',
    'what is javascript',
    'diff between java and javacript',
    'diff between div and span',
    'diff between inline and block',
    'what is python',
    'diff between c and c++',
    'what is pseudo classes'

]);
function acceptQuestion() {
    const questionInput = document.getElementById('questionInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (questionsSet.has(questionInput)) {
        errorMessage.style.display = 'none';
        alert('Question accepted: ' + questionInput);
    } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Error: Question does not meet the condition.';
    }
}

function declineQuestion() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
    alert('Question declined.');
}




