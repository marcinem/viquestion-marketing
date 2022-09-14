// Click tracking of Demo Book buttons
document.addEventListener("DOMContentLoaded", function () {
  var clickers = document.querySelectorAll("a[data-track]");
  clickers.forEach(function (clicker) {
    clicker.addEventListener("click", function (event) {
      plausible("Click", { props: { CTA: clicker.dataset.track } });
    });
  });
});
