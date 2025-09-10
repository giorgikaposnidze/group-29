let heading = document.getElementById("myHeading");

    heading.addEventListener("pointerdown", (e) => {
      e.target.style.fontSize = 
        e.target.style.fontSize === "30px" ? "20px" : "30px";
    });