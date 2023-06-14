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

var user = "yjgwak.cs";
var domain = "gmail";
var element = ".com";
var elementTag =
  '<a href="mailto:' +
  user +
  "@" +
  domain +
  element +
  '"><img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" alt="Email" style="height:20px; width:20px;"></a>';
document
  .querySelector(".profile-name")
  .insertAdjacentHTML("beforeend", elementTag);
