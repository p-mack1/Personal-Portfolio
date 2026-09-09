document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('a[href$=".html"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var destination = new URL(link.href, window.location.href);
      var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (destination.origin !== window.location.origin || destination.href === window.location.href) {
        return;
      }

      e.preventDefault();
      document.body.classList.add("is-leaving");

      setTimeout(function () {
        window.location.href = destination.href;
      }, reducedMotion ? 0 : 450);
    });
  });

  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();

    // No backend is wired up here — this just simulates a send
    // so the form is fully interactive. Swap this for a real
    // fetch() call to your API or a service like Formspree.
    status.textContent = "Thanks, " + name + " — your message has been sent!";
    form.reset();

    setTimeout(function () {
      status.textContent = "";
    }, 4000);
  });
});
