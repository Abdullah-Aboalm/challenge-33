let cards = document.querySelectorAll(".card");
let counter = document.querySelector(".count");
let mark = document.querySelector(".mark");

mark.addEventListener("click", () => {
  cards.forEach((card) => {
    let dot = card.querySelector(".dot");
    dot.style.display = "none";
    card.style.backgroundColor = "white";
    counter.innerHTML = "0";
    card.classList.add("clicked");
  });
});

function myFunction(x) {
  if (x.matches) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      var dot = card.querySelector(".dot");
      var infoP = card.querySelector(".msg");
      card.classList.toggle("active");
      if (card.classList.contains("clicked")) {
        counter.innerHTML = counter.innerHTML;
      } else {
        counter.innerHTML -= "1";
      }
      card.classList.add("clicked");
      if (card.classList.contains("active")) {
        dot.style.display = "none";
        card.style.backgroundColor = "white";
        card.style.marginBottom = "130px";
        infoP.style.display = "block";
        infoP.style.bottom = "-110px";
      }
      if (card.classList.contains("active") === false) {
        card.style.marginBottom = "10px";
        infoP.style.display = "none";
      }
    });
  });
  } else {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      var dot = card.querySelector(".dot");
      var infoP = card.querySelector(".msg");
      card.classList.toggle("active");
      if (card.classList.contains("clicked")) {
        counter.innerHTML = counter.innerHTML;
      } else {
        counter.innerHTML -= "1";
      }
      card.classList.add("clicked");
      if (card.classList.contains("active")) {
        dot.style.display = "none";
        card.style.backgroundColor = "white";
        card.style.marginBottom = "75px";
        infoP.style.display = "block";
      }
      if (card.classList.contains("active") === false) {
        card.style.marginBottom = "10px";
        infoP.style.display = "none";
      }
    });
  });
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 767px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});
