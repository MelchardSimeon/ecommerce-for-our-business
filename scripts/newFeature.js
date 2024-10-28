document.addEventListener("DOMContentLoaded", () => {
  const productSets = document.querySelectorAll('.product-set');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let currentIndex = 0;
  const productTitle = document.querySelector('#product-title')
  const titles = ['BOUQUETS', 'KEYCHAINS', 'MINI POTS', 'SHADOW BOX (NEW)']

  function updateDisplay() {
      productSets.forEach((set, index) => {
          set.style.display = index === currentIndex ? 'block' : 'none';
          dots[index].classList.toggle('active', index === currentIndex);

          productTitle.textContent = titles[currentIndex]
      });
  }

  function showNext() {
      currentIndex = (currentIndex + 1) % productSets.length;
      updateDisplay();
  }

  function showPrev() {
      currentIndex = (currentIndex - 1 + productSets.length) % productSets.length;
      updateDisplay();
  }

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index;
          updateDisplay();
      });
  });   

  nextButton.addEventListener('click', showNext);
  prevButton.addEventListener('click', showPrev);

  // Swipe functionality
  let startX;
  let endX;

  const touchStart = (event) => {
      startX = event.touches[0].clientX;
  };

  const touchEnd = (event) => {
      endX = event.changedTouches[0].clientX;
      handleSwipe();
  };

  const handleSwipe = () => {
      if (startX - endX > 50) {
          showNext(); // Swipe left
      } else if (endX - startX > 50) {
          showPrev(); // Swipe right
      }
  };

  // Add touch event listeners to the catalog track
  const catalogTrack = document.querySelector('.catalog-track');
  catalogTrack.addEventListener('touchstart', touchStart);
  catalogTrack.addEventListener('touchend', touchEnd);

  // Initial display setup
  updateDisplay();
});
