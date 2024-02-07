var lastClickedButton = null;

function animateBox(day) {
    var existingBox = document.querySelector('.box');
    if (existingBox) {
        existingBox.style.transition = 'transform 0.5s ease';
        existingBox.style.transform = 'translateY(-200%)';

        setTimeout(function () {
            existingBox.style.transition = 'none';
            existingBox.remove();
        }, 500);
    }
    
    var newBox = document.createElement('div');
    newBox.className = 'box';
    newBox.style.opacity = '0'; 
    newBox.style.top = '-100%'; 
    newBox.style.backgroundColor = getRandomColor(day); 
    document.body.appendChild(newBox);


    newBox.offsetHeight;

    setTimeout(function () {
        newBox.style.transition = 'opacity 0.5s ease, top 0.5s ease'; 
        newBox.style.opacity = '1'; 
        newBox.style.top = '0'; 
    }, 50);

 
    lastClickedButton = day;
}

function getRandomColor(day) {
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
