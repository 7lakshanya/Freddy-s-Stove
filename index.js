AOS.init({
  duration: 700,
  easing: 'ease-in',
});

//initialization
document.getElementById("Menu-section").style.display = "block";
document.getElementsByClassName("nav-link")[0].classList.add("selected");

function reserve() {
  if (confirm('You will recieve a confirmation call from us!')) {
    setTimeout(function() {
      window.location.reload();
    }, 100);
  }
}

function contact() {
  if (confirm('We will get in touch with you soon!')) {
    setTimeout(function() {
      window.location.reload();
    }, 100);
  }
}

function navClick() {
  clearAll();
  event.currentTarget.classList.add("selected");
  var txt= event.currentTarget.innerText;
  var x = txt.replace(/\s/g, "") + "-section";
  document.getElementById(x).style.display = "block";
}

function clearAll() {
  for (var a = 0; a < document.getElementsByClassName("nav-link").length; a++) {
    document.getElementsByClassName("nav-link")[a].classList.remove("selected");
  }
  for (var b = 0; b < document.getElementsByClassName("sec").length; b++) {
    document.getElementsByClassName("sec")[b].style.display = "none";
  }
}
