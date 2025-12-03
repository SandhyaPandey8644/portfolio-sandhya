
document.addEventListener('DOMContentLoaded', () => {
  /**
   * Insert an <img> into the About section.
   * @param {Object} opts
   * @param {string} opts.src - image path (relative or absolute)
   * @param {string} [opts.alt] - alt text for accessibility
   * @param {number|string} [opts.width] - width in px or percent (e.g. 200 or '50%')
   * @param {string} [opts.insertBeforeSelector] - CSS selector to insert before (defaults to first <p> inside #about)
   * @param {string} [opts.className] - optional class name to add for styling
   */
  function addImageToAbout(opts) {
    if (!opts || !opts.src) {
      console.error('addImageToAbout: opts.src is required');
      return;
    }

    const about = document.querySelector('#about');
    if (!about) {
      console.error('addImageToAbout: #about section not found in DOM');
      return;
    }

    
    const img = document.createElement('img');
    img.src = opts.src;
    img.alt = opts.alt || '';
    if (opts.width) img.style.width = typeof opts.width === 'number' ? opts.width + 'px' : opts.width;
    // sensible defaults for appearance
    img.style.display = 'block';
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '10px';
    img.style.marginBottom = '12px';
    if (opts.className) img.classList.add(opts.className);

    
    const beforeTarget = opts.insertBeforeSelector
      ? about.querySelector(opts.insertBeforeSelector)
      : about.querySelector('p');

    if (beforeTarget) {
      about.insertBefore(img, beforeTarget);
    } else {
    
      about.appendChild(img);
    }

    
    img.addEventListener('error', () => {
      img.style.display = 'none';
      console.warn('addImageToAbout: image failed to load:', opts.src);
    });
  }

  
  addImageToAbout({
    src: 'images/myphoto.jpg',
    alt: 'Sandhya Pandey',
    width: 200
  });

  
  window.addImageToAbout =
