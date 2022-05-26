export function hideHeader() {
  const header = document?.getElementById("header");
  if (header) {
    header.style.display = "none";
  }
}

export function showHeader() {
  const header = document?.getElementById("header");
  header.style.display = "block";
}
// show/hide comic control on screen click on mobile
export function onComicClick(buttonsVisible, setButtonsVisible) {
  // on mobile device
  if (window.screen.width < 768) {
    setButtonsVisible(!buttonsVisible);
  }
}
