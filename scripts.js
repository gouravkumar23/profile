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
  