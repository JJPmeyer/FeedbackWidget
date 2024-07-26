document
  .getElementById('feedbackForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    // Here you can add code to send the form data to your server using AJAX or fetch.
    // For now, we'll just show the thank you message.

    document.getElementById('feedbackForm').reset()
    document.getElementById('feedbackMessage').classList.remove('hidden')
  })
