document.getElementById('open-drawer-btn').addEventListener('click', function() {
    const slideOver = document.getElementById('slide-over');
    const backdrop = document.getElementById('backdrop');
    const panel = document.getElementById('panel');
    
    // Show the slide-over by removing the hidden class and applying transitions
    slideOver.classList.remove('hidden');
    
    // Trigger backdrop fade-in
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
    }, 10);

    // Trigger panel slide-in (bottom to top)
    setTimeout(() => {
      panel.classList.remove('translate-y-full');
      panel.classList.add('translate-y-0');
    }, 10);
  });

  // Close the Slide-over panel when the close button is clicked
  document.getElementById('close-drawer-btn').addEventListener('click', function() {
    const slideOver = document.getElementById('slide-over');
    const backdrop = document.getElementById('backdrop');
    const panel = document.getElementById('panel');
    
    // Trigger panel slide-out (bottom to top)
    panel.classList.remove('translate-y-0');
    panel.classList.add('translate-y-full');

    // Trigger backdrop fade-out
    setTimeout(() => {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
    }, 200); // Matches panel animation time (slightly after panel closes)

    // Hide the slide-over panel after animations
    setTimeout(() => {
      slideOver.classList.add('hidden');
    }, 500); // Wait until animations are complete
  });
