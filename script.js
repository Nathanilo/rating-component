const appreciationCard = document.querySelector(".Appreciation-card-container");
const cardContainer = document.querySelector(".card-container");
const button = document.querySelector("button");
const ratings = document.querySelectorAll("span");
const selection = document.querySelector(".selection");
console.log(ratings);

let selected;

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function () {
    selected = this.outerText;
    console.log(selected);
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].style.backgroundColor = "";
    }
    ratings[i].style.backgroundColor = "hsl(0, 0%, 75%)";
  });
}

button.addEventListener("click", function () {
  console.log("clicked");
  if (selected) {
    appreciationCard.style.display = "block";
    cardContainer.style.display = "none";
    selection.textContent = `You Selected ${selected} out of ${ratings.length}`;
  }
});
