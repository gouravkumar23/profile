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


  function unmuteVideo() {
    let video = document.getElementById('bgVideo');

    if (video) {
        video.muted = false;
        video.play().catch(error => {
            console.log('Autoplay with sound is blocked, user interaction needed.');
        });

        // Remove event listeners after the first interaction
        document.removeEventListener('click', unmuteVideo);
        document.removeEventListener('touchstart', unmuteVideo);
    }
}

// Listen for both click and touchstart for better mobile compatibility
document.addEventListener('click', unmuteVideo);
document.addEventListener('touchstart', unmuteVideo);


    // Listen for either a click or scroll event
    document.addEventListener('click', enableVideoPlayback, { once: true });
    window.addEventListener('scroll', enableVideoPlayback, { passive: true, once: true });
});
