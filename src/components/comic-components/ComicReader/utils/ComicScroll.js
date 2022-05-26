function moveUp(e, pageNumber) {
  let currImageIndex = pageNumber - 1;
  if (currImageIndex > 0) {
    currImageIndex--;
    var images = document.getElementById("comic-img-container").childNodes;
    e.stopPropagation();
    if (images[currImageIndex]) {
      images[currImageIndex].scrollIntoView(true);
    }
  }
}
function moveDown(e, pageNumber, length) {
  let currImageIndex = pageNumber - 1;
  if (currImageIndex < length) {
    currImageIndex++;
    var images = document.getElementById("comic-img-container").childNodes;
    e.stopPropagation();
    if (images[currImageIndex]) {
      images[currImageIndex].scrollIntoView(true);
    }
  }
}

export function onKeyDown(e, pageNumber, length) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveUp(e, pageNumber);
      break;
    case 38: //Up arrow key
      moveUp(e, pageNumber);
      break;
    case 39: //right arrow key
      moveDown(e, pageNumber, length);
      break;
    case 40: //down arrow key
      moveDown(e, pageNumber, length);
      break;
  }
}

export function onScroll(isScrolling, setPageNumber, length) {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    const imgHeight = document?.getElementById("img-1")?.clientHeight;
    // at bottom of page, base case
    if (window.innerHeight + window.scrollY >= document?.body?.scrollHeight) {
      setPageNumber(length);
    } else {
      // calculate page number based off image size
      const pageNumber = Math.round((window.scrollY + imgHeight) / imgHeight);
      setPageNumber(pageNumber);
    }
  }, 66);
}
