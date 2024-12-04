// Select images with "data-src"
const images = document.querySelectorAll("img[data-src]");

// Create an IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Load the image
      observer.unobserve(img);   // Stop observing after loading
    }
  });
});

// Observe each image
images.forEach((img) => observer.observe(img));
