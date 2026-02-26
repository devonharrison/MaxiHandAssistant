// /assets/js/main.js

// 1. Keep Maxwell's number in ONE place
// Format: country code + number, no "+" and no leading 0
const maxwellNumber = "27837000258"; // 🔁 <-- update to his real number

document.addEventListener("DOMContentLoaded", () => {
  // 2. Generic WhatsApp buttons/links (anywhere on any page)
  //    Use: class="whatsapp-link" and optional data-message=""
  const whatsappElements = document.querySelectorAll(".whatsapp-link");

  whatsappElements.forEach((el) => {
    el.addEventListener("click", (event) => {
      // If it's a pure CTA that should always go via JS, prevent default
      event.preventDefault();

      // If element has a data-message, use that, else use fallback
      const message =
        el.dataset.message ||
        "Hi Maxwell, I found your website and would like to book a job.";

      const whatsappUrl =
        "https://wa.me/" +
        maxwellNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappUrl, "_blank");
    });
  });

  // 3. Contact / quote form -> WhatsApp
  //    Only runs on pages where #quote-form exists
  const form = document.getElementById("quote-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = form.querySelector("#fullName")?.value.trim() || "";
      const phone = form.querySelector("#phone")?.value.trim() || "";
      const email = form.querySelector("#email")?.value.trim() || "";
      const suburb = form.querySelector("#suburb")?.value.trim() || "";
      const serviceType = form.querySelector("#serviceType")?.value || "";
      const projectDescription =
        form.querySelector("#projectDescription")?.value.trim() || "";

      const messageLines = [
        "Hi Maxwell, I'd like a quote for some work.",
        "",
        fullName ? `Name: ${fullName}` : "",
        phone ? `Phone: ${phone}` : "",
        email ? `Email: ${email}` : "",
        suburb ? `Suburb: ${suburb}` : "",
        serviceType ? `Service type: ${serviceType}` : "",
        "",
        "Job details:",
        projectDescription || "[No description provided]",
        "",
        "Sent from your website.",
      ].filter(Boolean);

      const message = messageLines.join("\n");
      const encodedMessage = encodeURIComponent(message);

      const whatsappUrl =
        "https://wa.me/" + maxwellNumber + "?text=" + encodedMessage;

      window.open(whatsappUrl, "_blank");
    });
  }
});
