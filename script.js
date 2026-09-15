document.addEventListener("DOMContentLoaded", function () {
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
