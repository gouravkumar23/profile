function createSparkles(event) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Set sparkle position based on mouse coordinates
    sparkle.style.top = `${event.clientY - 10}px`;
    sparkle.style.left = `${event.clientX - 10}px`;
    
    document.getElementById('sparkle-container').appendChild(sparkle);
  
    // Remove sparkle after animation ends
    setTimeout(() => {
      sparkle.remove();
    }, 600);
  }
  
  document.addEventListener('mousemove', createSparkles);


  document.addEventListener('DOMContentLoaded', function () {
    let video = document.getElementById('bgVideo');

    function enableVideoPlayback() {
        if (video) {
            video.muted = false;
            video.play().catch(error => {
                console.log('Autoplay with sound is blocked, user interaction needed.');
            });

            // Remove both event listeners after activation
            document.removeEventListener('click', enableVideoPlayback);
            window.removeEventListener('scroll', enableVideoPlayback);
        }
    }

    // Listen for either a click or scroll event
    document.addEventListener('click', enableVideoPlayback, { once: true });
    window.addEventListener('scroll', enableVideoPlayback, { passive: true, once: true });
});
