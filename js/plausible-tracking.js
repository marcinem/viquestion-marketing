// Click tracking of Demo Book buttons
document.addEventListener("DOMContentLoaded", function () {
  var clickers = document.querySelectorAll("a[data-track]");
  clickers.forEach(function (clicker) {
    clicker.addEventListener("click", function (event) {
      plausible("Click", { props: { CTA: clicker.dataset.track } });
    }, {once: true});
  });
});


function isCalendlyEvent(e) {
  return e.origin === "https://calendly.com" && e.data.event && e.data.event.indexOf("calendly.") === 0;
};
 
window.addEventListener("message", function(e) {
  if(isCalendlyEvent(e) && e.data.event === "calendly.event_scheduled") {
    plausible("Demo Booked");
  }
});