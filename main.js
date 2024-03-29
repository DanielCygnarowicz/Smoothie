const list = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("section");
const btn = document.querySelector("input.send")
const input = document.querySelector("input.email")
let sectionsHeight = [];
sections.forEach((section, index) => { sectionsHeight[index] = section.offsetHeight })

list.forEach((li, i) => {
  li.addEventListener("click", function () {
    list.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
    scrollPosition = 0;
    const index = i;
    sections.forEach((section, index) => { sectionsHeight[index] = section.offsetHeight })
    for (let i = 0; i < index; i++) {
      scrollPosition += sectionsHeight[i];
    }

    window.scrollTo(0, scrollPosition);
    if (window.outerWidth < 767) $(".fas, nav").toggleClass("off");
  })

})

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  sections.forEach((section, index) => { sectionsHeight[index] = section.offsetHeight })
  list.forEach((li) => li.classList.remove("active"));
  if (scroll < (sectionsHeight[0] / 1.3 - list[0].offsetHeight)) {
    list[0].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] / 1.3 - list[0].offsetHeight)) {
    list[1].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] / 1.3 - list[0].offsetHeight)) {
    list[2].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] + sectionsHeight[3] / 1.3 - list[0].offsetHeight)) {
    list[3].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] + sectionsHeight[3] + sectionsHeight[4] / 1.3 - list[0].offsetHeight)) {
    list[4].classList.add("active");
    sections[4].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] + sectionsHeight[3] + sectionsHeight[4] + sectionsHeight[5] / 3 - list[0].offsetHeight)) {
    list[5].classList.add("active");
  }
  else {
    list[6].classList.add("active");
  }

})

btn.addEventListener("click", (event) => {

  input.value ? alert("Thanks for your email! ") : alert("Write email before sending!");

})

$(".burger").on("click", function () {
  $(".fas, nav").toggleClass("off");
})

if (window.outerWidth > 767) {
  {
    $(".fas, nav").removeClass("off");
  }
}


