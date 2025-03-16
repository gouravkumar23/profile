let lastSparkleTime = 0;

function createSparkles(event) {
  const now = Date.now();

  // Limit sparkle creation rate (once every 50ms)
  if (now - lastSparkleTime < 60) return;
  lastSparkleTime = now;

  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  // Use pageX and pageY to keep sparkles in sync with cursor
  sparkle.style.top = `${event.pageY - 15}px`;
  sparkle.style.left = `${event.pageX - 5}px`;

  document.getElementById('sparkle-container').appendChild(sparkle);

  // Remove sparkle after animation ends
  setTimeout(() => {
    sparkle.remove();
  }, 800);
}

// Apply effect when mouse moves
document.addEventListener('mousemove', createSparkles);




document.addEventListener('click', enableVideoPlayback);
document.addEventListener('touchstart', enableVideoPlayback);

function enableVideoPlayback() {
    let video = document.getElementById('bgVideo');

    if (video) { // Only play if the video is paused
        video.muted = false;
        video.play()=true;
        video.play().catch(error => {
            console.log('Autoplay with sound is blocked, user interaction needed.');
        });

        // Remove event listeners to prevent multiple triggers
        document.removeEventListener('click', enableVideoPlayback);
        document.removeEventListener('touchstart', enableVideoPlayback);
    }

    /* if(video.paused){
      
document.addEventListener('click', enableVideoPlayback);
document.addEventListener('touchstart', enableVideoPlayback);
      video.muted = false;
      video.play().catch(error => {
          console.log('Autoplay with sound is blocked, user interaction needed.');
      });
      video.play()=true;
      // Remove event listeners to prevent multiple triggers
      document.removeEventListener('click', enableVideoPlayback);
      document.removeEventListener('touchstart', enableVideoPlayback);
    } */
}



