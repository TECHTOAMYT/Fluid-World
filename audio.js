document.addEventListener("DOMContentLoaded", function () {
    let audio = document.createElement("audio");
    audio.src = "Song.mp3";  // Change to the path of your audio file
    audio.loop = true;       // Loop the audio
    audio.autoplay = true;   // Start playing the audio automatically

    // Append the audio element to the body
    document.body.appendChild(audio);

    // Try playing the audio
    audio.play().catch(error => {
        console.log("Autoplay blocked. User interaction required.");
    });

    // Once the audio starts playing, trigger the fluid animation
    audio.onplay = function() {
        // Call the fluid animation start function
        startFluidAnimation();
    };

    // Function to start the fluid animation
    function startFluidAnimation() {
        // Insert your existing fluid animation logic here
        console.log("Fluid animation started!");
        // Example: call the fluid animation function from your WebGL code
        // startWebGLFluidSimulation();  // Replace with actual function name
    }
});
