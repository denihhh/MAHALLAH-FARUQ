  function toggleWindow() {
    var modal = document.getElementById('notibar');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}
function toggleWindow2() {
    var modal = document.getElementById('profilebar');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    
const pickerList = document.getElementById('pickerList');
let selectedItemIndex = Math.floor(pickerList.children.length / 2);

function updatePicker() {
// Check if the screen width is greater than 1024px
const isWideScreen = window.innerWidth > 1024;

// Remove 'magnified' class from all items
Array.from(pickerList.children).forEach((item) => {
item.classList.remove('magnified');
});

// Add 'magnified' class to the selected item
pickerList.children[selectedItemIndex].classList.add('magnified');

// Calculate the translation to center the selected item
const translateY = (pickerList.children.length / 2 - selectedItemIndex) * pickerList.children[0].clientHeight;

// Adjust scrolling direction based on screen width
pickerList.style.transform = isWideScreen ? `translateY(${translateY}px)` : `translateX(${translateY}px)`;

// Hide all images
Array.from(document.querySelectorAll('.imageholder img')).forEach((image) => {
image.style.display = 'none';
});

// Show the images for the magnified text
const magnifiedImages = document.querySelectorAll(`.anbox${selectedItemIndex + 1} img`);
magnifiedImages.forEach((image) => {
image.style.display = 'block';
});
}


function handleWheel(event) {
        // Calculate the direction of the scroll for the pickerList
        const direction = Math.sign(event.deltaY);

        // Update the selected item index
        selectedItemIndex += direction;

        // Ensure the index stays within the bounds of the list
        selectedItemIndex = Math.max(0, Math.min(selectedItemIndex, pickerList.children.length - 1));

        // Update the picker view
        updatePicker();
}

// Attach the wheel event listener to the picker container
pickerList.addEventListener('wheel', handleWheel);

// Initial update to center the selected item
updatePicker();

});