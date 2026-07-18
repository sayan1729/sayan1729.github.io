// Source - https://stackoverflow.com/a/48692730
// Posted by Javier Gonzalez
// Retrieved 2026-07-16, License - CC BY-SA 3.0

var index = 0;
slideshow();

function slideshow() {
  var i, x;
  x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = "block";
  setTimeout(slideshow, 2000);
  console.log('changed image')

}