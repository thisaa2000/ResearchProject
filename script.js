let subMenu = document.getElementById("subMenu");
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

// Get the form and all radio buttons
const emojiForm = document.getElementById('emojiForm');

// Add an event listener to the form
emojiForm.addEventListener('change', function(event) {
    // Check if the change event is from a radio input
    if (event.target && event.target.type === 'radio') {
        let selectedMood = event.target.value;

        // Redirect based on the selected mood (emoji)
        switch (selectedMood) {
            case 'all':
                window.location.href = 'secondpage.html';
                break;
            case 'happy':
                window.location.href = 'second-page-happy.html';
                break;
            case 'sad':
                window.location.href = 'second-page-happy.html';
                break;
            case 'angry':
                window.location.href = 'second-page-happy.html';
                break;
            case 'surprised':
                window.location.href = 'second-page-happy.html';
                break;
            default:
                console.log('No action for selected mood.');
        }
    }
});
