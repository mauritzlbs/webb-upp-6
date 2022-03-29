var pictureIndex = 0;
showPicture(pictureIndex);

function plusPicture(n) {
  showPicture(pictureIndex += n);
}

function showPicture(n) {
  var pictures = document.getElementsByClassName("picture");
  if (n > pictures.length - 1) {pictureIndex = 0}
  if (n < 0) {pictureIndex = pictures.length - 1}
  for (i = 0; i < pictures.length; i++) {
      pictures[i].style.display = "none";
  }
  pictures[pictureIndex].style.display = "block";
}