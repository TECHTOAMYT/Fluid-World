document.addEventListener("DOMContentLoaded", function () {
    let audio = document.createElement("audio");
    audio.src = "Song.mp3"; // Change this to your audio file path
    audio.loop = true; // Enables looping
    audio.autoplay = true;

    // Try to play audio, handle autoplay restrictions
    audio.play().catch(error => {
        console.log("Autoplay blocked. User interaction required.");
    });

    document.body.appendChild(audio); // Adds the audio element to the page
});
