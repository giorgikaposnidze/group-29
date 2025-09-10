 let paragraph = document.getElementById("myParagraph");

    paragraph.addEventListener("click", function() {
     
      if (paragraph.style.textAlign === "" || paragraph.style.textAlign === "left") {
        paragraph.style.textAlign = "center";
      } 

      else if (paragraph.style.textAlign === "center") {
        paragraph.style.textAlign = "left";
      }
    });