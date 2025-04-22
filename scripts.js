
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

    function isMobileDevice() {
      return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
    
    function isPortraitMode() {
      return window.innerHeight > window.innerWidth;
    }
    
    function isDesktopSiteEnabledOnMobile() {
      const pixelRatio = window.devicePixelRatio || 1;
      const wideViewport = window.innerWidth > 1024; 
      const isMobile = isMobileDevice();
      const isPortrait = isPortraitMode();
    
      return isMobile && wideViewport && isPortrait;
    }
    
   
    window.onload = () => {
      if (isDesktopSiteEnabledOnMobile()) {
        fillHeight.style.height = "1000vh";
      } else {
        
      }
    };
    

    window.addEventListener("resize", () => {
      if (isDesktopSiteEnabledOnMobile()) {
        fillHeight.style.height = "1000vh";
      }
    });
