// Function to get the current time in a readable format
function getCurrentTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return now.toLocaleDateString('en-US', options);
}

// Set the last updated time
document.getElementById('last-updated').textContent = `Last updated: ${getCurrentTime()}`;

// Show the confirmation dialog
document.getElementById('download-cv').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    
    // // Show a confirmation dialog
    // const userConfirmed = confirm("Are you sure you want to download the CV?");
    
    // if (userConfirmed) {
        // Redirect to the PDF file or start the download
        window.location.href = 'showMessage.html'; // Replace with your actual PDF file path
    // }
});
