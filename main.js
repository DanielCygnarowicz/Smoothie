const list = document.querySelectorAll("nav ul li");
const sections = document.querySelectorAll("section");
const btn = document.querySelector("input.send")
let sectionsHeight = [];
sections.forEach((section, index) => { sectionsHeight[index] = section.offsetHeight })

list.forEach((li, i) => {
  li.addEventListener("click", function () {
    list.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
    scrollPosition = 0;
    const index = i;
    for (let i = 0; i < index; i++) {
      scrollPosition += sectionsHeight[i];
    }
    window.scrollTo(0, scrollPosition);
  })
})

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;


  if (scroll < (sectionsHeight[0] / 1.5 - list[0].offsetHeight)) {
    list.forEach((li) => li.classList.remove("active"));
    list[0].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] / 1.5 - list[0].offsetHeight)) {
    list.forEach((li) => li.classList.remove("active"));
    list[1].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] / 1.5 - list[0].offsetHeight)) {
    list.forEach((li) => li.classList.remove("active"));
    list[2].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] + sectionsHeight[3] / 1.5 - list[0].offsetHeight)) {
    list.forEach((li) => li.classList.remove("active"));
    list[3].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] + sectionsHeight[3] + sectionsHeight[4] / 1.5 - list[0].offsetHeight)) {
    list.forEach((li) => li.classList.remove("active"));
    list[4].classList.add("active");
  }
  else if (scroll < (sectionsHeight[0] + sectionsHeight[1] + sectionsHeight[2] + sectionsHeight[3] + sectionsHeight[4] + sectionsHeight[5] / 1.5 - list[0].offsetHeight)) {
    list.forEach((li) => li.classList.remove("active"));
    list[5].classList.add("active");
  }
  else {
    list.forEach((li) => li.classList.remove("active"));
    list[6].classList.add("active");
  }

})

btn.addEventListener("click", (e) => {
  e.preventDefault;
  alert("Thanks for your email! ");
})