function showStudentForm() {
    document.getElementById('studentForm').style.display = 'block';
    document.getElementById('teacherForm').style.display = 'none';
}

function showTeacherForm() {
    document.getElementById('teacherForm').style.display = 'block';
    document.getElementById('studentForm').style.display = 'none';
    document.getElementById('courseForm').style.display = 'none';
    document.getElementById('quizForm').style.display = 'none';
}

function submitCourse(event) {
    event.preventDefault();
    const courseTitle = document.getElementById('courseTitle').value;
    const courseDescription = document.getElementById('courseDescription').value;

    // TODO: Send data to the server to handle course upload
    console.log('Course Title:', courseTitle);
    console.log('Course Description:', courseDescription);
}

function submitQuiz(event) {
    event.preventDefault();
    const quizTitle = document.getElementById('quizTitle').value;
    const quizQuestions = document.getElementById('quizQuestions').value.split(',');

    // TODO: Send data to the server to handle quiz upload
    console.log('Quiz Title:', quizTitle);
    console.log('Quiz Questions:', quizQuestions);
}
