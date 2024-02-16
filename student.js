// Example course data (replace with actual data fetched from the server)
const coursesData = [
    { title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
    { title: 'Web Development Fundamentals', description: 'Explore the world of web development.' },
    { title: 'Data Science Essentials', description: 'Introduction to data science concepts.' },
    // Add more courses as needed
];

// Function to dynamically create course cards
function createCourseCard(course) {
    const courseCard = document.createElement('div');
    courseCard.classList.add('courseCard');
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = course.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = course.description;

    courseCard.appendChild(titleElement);
    courseCard.appendChild(descriptionElement);

    document.getElementById('coursesList').appendChild(courseCard);
}

// Populate course cards on page load
window.onload = function () {
    for (const course of coursesData) {
        createCourseCard(course);
    }
};
