
    const toogle = document.getElementById("toogle-panel");
    
    let scrolledDown = false;

    function toggleScroll() {

      if (!scrolledDown) {
    
        toogle.style.display = "block";

        window.scrollBy({
            // scroll down
          top: 900, 
          left: 0,
          behavior: 'smooth'   
        });
      } 
      else {
        toogle.style.display = "none";

        window.scrollBy({
            // scroll up
          top: -900, 
          left: 0,
          behavior: 'smooth'
        });  
      }

      scrolledDown = !scrolledDown;
    }

    function isMobile() {
      return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }

    function isLandscape() {
      return window.innerWidth > window.innerHeight;
    }

    function orientationChange() {
      if (isMobile() && isLandscape()) {
      location.reload();
    }
  } 

    window.addEventListener("orientationchange", orientationChange);
   
