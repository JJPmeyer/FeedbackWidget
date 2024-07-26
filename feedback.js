document.addEventListener('DOMContentLoaded', function() {
    var feedbackButton = document.getElementById('feedback-button');
    var feedbackPopup = document.getElementById('feedback-popup');
    var closePopup = document.getElementById('close-popup');

    // Show the popup
    feedbackButton.addEventListener('click', function() {
        feedbackPopup.classList.remove('hidden');
    });

    // Hide the popup
    closePopup.addEventListener('click', function() {
        feedbackPopup.classList.add('hidden');
    });

    // Close the popup if user clicks outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target === feedbackPopup) {
            feedbackPopup.classList.add('hidden');
        }
    });
});
