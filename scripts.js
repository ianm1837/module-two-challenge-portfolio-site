function navScroller(position){
	document.getElementById(position).scrollIntoView({block: "start"})
}

const main = document.querySelector("#main");
const cards = document.querySelectorAll(".card");
const navButton = document.querySelectorAll(".button");

function onScroll() {
	
  let current = "";
  cards.forEach((card) => {
    const sectionTop = card.offsetTop;
    const sectionHeight = card.clientHeight;

	console.log('section top' + sectionTop);
	console.log('scrollY' + main.scrollTop);
    if (main.scrollTop >= sectionTop - sectionHeight / 3) {
      current = card.getAttribute("id");
    }
  });

  navButton.forEach((button) => {
    button.classList.remove("button-active");
	
    if (button.classList.contains(current)) {
      button.classList.add("button-active");
    }
  });
};

// 