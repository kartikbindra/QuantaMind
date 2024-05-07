// Function to track cursor motion
function trackCursorMotion() {
    let prevX = 0;
    let prevY = 0;
    let prevTime = Date.now();

    // Event listener to track cursor movement
    document.addEventListener('mousemove', (event) => {
        const currX = event.clientX;
        const currY = event.clientY;
        const currTime = Date.now();

        // Calculate distance moved
        const distance = Math.sqrt((currX - prevX) ** 2 + (currY - prevY) ** 2);

        // Calculate speed
        const speed = distance / (currTime - prevTime);

        // Update previous values
        prevX = currX;
        prevY = currY;
        prevTime = currTime;

        // Log the coordinates and speed
        console.log(`X: ${currX}, Y: ${currY}, Speed: ${speed}`);
    });
}

// Call the function to start tracking cursor motion
trackCursorMotion();