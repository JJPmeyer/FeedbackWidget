document.addEventListener('DOMContentLoaded', function() {
    var popupButton = document.getElementById('popupButton');
    var popup = document.getElementById('popup');
    var closeButton = document.getElementById('closeButton');

    popupButton.addEventListener('click', function() {
        popup.classList.remove('hidden');
    });

    closeButton.addEventListener('click', function() {
        popup.classList.add('hidden');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
