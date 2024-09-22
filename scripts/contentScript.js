

window.addEventListener('load', () => {
    console.log("Page fully loaded2");
    

    // Check the DOM every 2 seconds (2000 milliseconds)
    const intervalId = setInterval(() => {
        checkForMessagesDiv();
    }, 2000);

    // Optional: Stop checking after a certain amount of time, e.g., 1 minute
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped checking for messages div");
    }, 60000); // 60000 ms = 1 minute
});