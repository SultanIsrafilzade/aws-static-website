// Display current date and time
function updateTimestamp() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById('timestamp').textContent = 
        'Last updated: ' + now.toLocaleDateString('en-US', options);
}

// Update timestamp when page loads
updateTimestamp();

// Update timestamp every second
setInterval(updateTimestamp, 1000);

// Log to console
console.log('Static website loaded successfully!');
console.log('Hosted on: Amazon S3');
console.log('Distributed via: CloudFront CDN');