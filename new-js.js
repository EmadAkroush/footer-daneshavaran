document.querySelectorAll(".hoverable").forEach(
    box =>  eventListener(box))
  
  function reveal(e, isEnter) {
    var element = document.getElementById("menu");
    if(isEnter) element.classList.add("open");
    else element.classList.remove("open");
    console.log('event', e.getBoundingClientRect())
  }
  
  function eventListener(box) {
    box.addEventListener("mouseenter", () => reveal(box, true))
    box.addEventListener("mouseleave", () => reveal(box, false))
    
    document.getElementById("menu").addEventListener("mouseenter", () => reveal(box, true));
    document.getElementById("menu").addEventListener("mouseleave", () => reveal(box, false));
  }