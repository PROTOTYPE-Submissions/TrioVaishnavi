// Example course content data (replace with actual data fetched from the server)
const courseContentData = [
    { section: 'Getting Started', content: 'Welcome to the course!' },
    { section: 'Introduction to Programming', content: 'Programming is the process of creating a set of instructions that tell a computer how to perform a task.' },
    { section: 'Variables and Data Types', content: 'In programming, variables are used to store and manipulate data.' },
    // Add more sections and content as needed
];

// Function to dynamically create content sections
function createContentSection(sectionData) {
    const sectionElement = document.createElement('div');
    sectionElement.classList.add('section');

    const sectionTitleElement = document.createElement('h2');
    sectionTitleElement.textContent = sectionData.section;

    const contentElement = document.createElement('p');
    contentElement.textContent = sectionData.content;

    sectionElement.appendChild(sectionTitleElement);
    sectionElement.appendChild(contentElement);

    document.getElementById('content').appendChild(sectionElement);
}

// Function to calculate and display progress
function displayProgress() {
    const progressElement = document.getElementById('progress');
    const completedSections = document.getElementsByClassName('completed').length;
    const totalSections = courseContentData.length;

    const progressText = `Progress: ${completedSections} out of ${totalSections} sections completed`;
    progressElement.textContent = progressText;
}

// Populate content on page load
window.onload = function () {
    for (const sectionData of courseContentData) {
        createContentSection(sectionData);
    }

    // Simulate marking the first section as completed
    const firstSection = document.querySelector('.section');
    if (firstSection) {
        firstSection.classList.add('completed');
    }

    displayProgress();
};
