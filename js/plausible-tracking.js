// Click tracking of Demo Book
document.addEventListener("DOMContentLoaded", function () {
  var clickers = document.querySelectorAll("a[data-track]");
  clickers.forEach(function (clicker) {
    clickerName = clicker.dataset("data-track");
    clicker.addEventListener("click", function (event) {
      plausible("Click", { props: { CTA: clickerName } });
    });
  });
});
