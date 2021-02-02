(function () {
  const j = 74;
  const k = 75;
  const INCREMENT = 100;
  document.addEventListener("keydown", (e) => {
    // first, verify that I'm not in some sort of input field
    // otherwise I won't be able to enter "j" or "k"
    if (e.keyCode === j) {
      window.scrollBy(0, INCREMENT);
      // scroll down
    } else if (e.keyCode === k) {
      window.scrollBy(0, INCREMENT * -1);
    }
  });
})();
