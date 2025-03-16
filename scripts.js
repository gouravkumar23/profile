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

document.addEventListener('click', enableVideoPlayback);
document.addEventListener('touchstart', enableVideoPlayback);

function enableVideoPlayback() {
    let video = document.getElementById('bgVideo');

    if (video) { // Only play if the video is paused
        video.muted = false;
        video.play().catch(error => {
            console.log('Autoplay with sound is blocked, user interaction needed.');
        });

        // Remove event listeners to prevent multiple triggers
        document.removeEventListener('click', enableVideoPlayback);
        document.removeEventListener('touchstart', enableVideoPlayback);
    }

    if(video.paused){
      
      video.muted = false;
      video.play().catch(error => {
          console.log('Autoplay with sound is blocked, user interaction needed.');
      });

      // Remove event listeners to prevent multiple triggers
      document.removeEventListener('click', enableVideoPlayback);
      document.removeEventListener('touchstart', enableVideoPlayback);
    }
}
