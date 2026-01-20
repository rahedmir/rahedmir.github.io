
    document.getElementById('contactFormContent').addEventListener('submit', async function(event) {
    
    event.preventDefault();

    const form = event.target;
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
    
      const modal = bootstrap.Modal.getInstance(document.getElementById('contactForm'));
      modal.hide();
      window.location.href = 'https://rahedmir.com/thankyou.html';
    } else {
      alert('Something went wrong! Please try again.');
    }
  });
    
    
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
   
