var lastClickedButton = null;

function animateBox(day) {
    var existingBox = document.querySelector('.box');
    if (existingBox) {
        // Animate the existing box to move upward
        existingBox.style.transition = 'transform 0.5s ease';
        existingBox.style.transform = 'translateY(-200%)';

        // Remove the transition after animation completes
        setTimeout(function () {
            existingBox.style.transition = 'none';
            existingBox.remove();
        }, 500);
    }

    // Create a new box element
    var newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.style.opacity = '0'; // Initially hide the new box
    newBox.style.top = '-100%'; // Position the new box above the viewport
    newBox.style.backgroundColor = getRandomColor(day); // Set the background color based on the selected day
    document.body.appendChild(newBox);

    // Trigger reflow to ensure CSS transitions work
    newBox.offsetHeight;

    // Animate the new box to fade in and move down
    setTimeout(function () {
        newBox.style.transition = 'opacity 0.5s ease, top 0.5s ease'; // Apply transition for opacity and top position
        newBox.style.opacity = '1'; // Make the box visible
        newBox.style.top = '0'; // Move the box down to its final position
    }, 50);

    // Store the current day as the last clicked button
    lastClickedButton = day;
}

function getRandomColor(day) {
    // Specific color spectrums for each day
    switch (day) {
        case 'Monday':
            return '#69132d';
        case 'Tuesday':
            return '#5ca01d';
        case 'Wednesday':
            return '#0a173b';
        case 'Thursday':
            return '#0f1c52';
        case 'Friday':
            return '#17236a';
        case 'Saturday':
            return '#71788f';
        case 'Sunday':
            return '#eaf0f7';
        default:
            return '#ccc';
    }
}

function changeButtonStyle(button) {
    button.style.backgroundColor = '#666';
    button.style.color = '#fff';
}

function restoreButtonStyle(button) {
    var day = button.id;
    button.style.backgroundColor = getRandomColor(day);
    button.style.color = '#fff';
}
