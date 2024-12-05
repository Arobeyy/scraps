const animatedEyeLid = document.querySelector('.eye-lid-container');
let mouseTimeout; //To track mouse idle time

// Function to pause animation
const pauseAnimation = () => {
  animatedEyeLid.style.animationPlayState = 'paused';
  animatedEyeLid.style.opacity = '0';
}

//Function to resume animation 
const resumeAnimation = () => {
  animatedEyeLid.style.animationPlayState = 'running';
  animatedEyeLid.style.opacity = '1';
}

// Listen for mouse movement
document.addEventListener('mousemove', () => {
  // Pause the animation on mouse movement
  pauseAnimation();

  //Clear any existing timeout
  clearTimeout(mouseTimeout);

  // Resume animation if no mouse movement for 3 sec
  mouseTimeout = setTimeout(() => {
    resumeAnimation();
  },2000);  //3 second delay 
});

let mouseTimeoutP;

document.addEventListener('mousemove', () => {
  animatedPupil.classList.add('animate');
  animatedPupilContainer.classList.add('animate');

  clearTimeout(mouseTimeoutP);

  mouseTimeoutP = setTimeout(() => {
    animatedPupil.classList.remove('animate');
    animatedPupilContainer.classList.remove('animate');
  }, 30000);
});

