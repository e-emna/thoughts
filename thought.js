document.addEventListener("DOMContentLoaded", function(){
    const envelope = document.getElementById("evnelope");
    const letter = document.querySelector(".letter");

  letter.addEventListener("click", function (e) {
      // Don't change pages if the envelope isn't open
      if (!envelope.classList.contains("open")) return;

      e.stopPropagation(); // Prevents the envelope click from firing again

      let current = document.querySelector(".content.active");
      let next = current.nextElementSibling;

      if (next && next.classList.contains("content")) {
          current.classList.remove("active");
          next.classList.add("active");
      }
      else{
        envelope.classList.add("close");
        envelope.classList.remove("open");
      }
  });
    function openEnvelope(){
      document.querySelectorAll(".content").forEach(content => {
        content.classList.remove("active");
      });
      document.getElementById("content1").classList.add("active")
      currentContent = 1
        envelope.classList.add("open");
        envelope.classList.remove("close");
    }

    envelope.addEventListener("click", openEnvelope);
    
    
});