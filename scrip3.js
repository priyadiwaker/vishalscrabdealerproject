function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.querySelector(".close")
    var z = document.querySelector(".open")
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display ="none";
      z.style.display="flex";

    } else {
      x.style.display = "block";
      y.style.display = "flex";
      z.style.display = "none"
    }
  }

  

  v