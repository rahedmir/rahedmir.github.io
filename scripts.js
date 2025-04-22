
    const toogle = document.getElementById("toogle-panel");
    const fillHeight = document.getElementById("fill-height");
    
    let scrolledDown = false;

    function toggleScroll() {

      if (!scrolledDown) {
        toogle.style.backgroundColor = "#FFF";
        toogle.style.display = "block";

        window.scrollBy({
            // scroll down
          top: 900, 
          left: 0,
          behavior: 'smooth'   
        });
      } 
      else {
        toogle.style.backgroundColor = "#5F3E3C";
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
    window.addEventListener("resize", orientationChange);

    function isDesktopSite() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const wideScreen = window.innerWidth > 1024;
    const pixelRatio = window.devicePixelRatio <= 1;

    return isMobile && (wideScreen || pixelRatio);
    }

    if (isDesktopSite()) {
      fillHeight.style.height = "100vh";
    }
