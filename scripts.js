document
  .querySelector('a[href="#arxiv_today"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#arxiv_today").style.display = "block";
    document.querySelector("#cv").style.display = "none";
    document.querySelector("#research").style.display = "none";
  });

document
  .querySelector('a[href="#cv"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#arxiv_today").style.display = "none";
    document.querySelector("#cv").style.display = "block";
    document.querySelector("#research").style.display = "none";
  });

document
  .querySelector('a[href="#research"]')
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#arxiv_today").style.display = "none";
    document.querySelector("#cv").style.display = "none";
    document.querySelector("#research").style.display = "block";
  });
