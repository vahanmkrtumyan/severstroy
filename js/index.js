scrollTo = (element) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
};

document.getElementById("head").addEventListener("click", () => {
  scrollTo(document.getElementById("header"));
});

document.getElementById("about").addEventListener("click", () => {
  scrollTo(document.getElementById("aboutNew"));
});

document.getElementById("service").addEventListener("click", () => {
  scrollTo(document.getElementById("serviceNew"));
});

document.getElementById("contactUs").addEventListener("click", () => {
  scrollTo(document.getElementById("contactUsNew"));
});

var backToTop = document.getElementById("back-top");

window.addEventListener("scroll", function () {
  var Y = window.scrollY;
  if (Y > 500) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});
