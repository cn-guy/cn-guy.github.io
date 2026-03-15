// Handles email contact form
document.getElementById("contact-form");

addEventListener("submit", () => {
  // Hold all of the values of the different email fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("msg").value;

  // (Subject is separate from this)
  // Form the body of the email
  const body = `Name: ${name}\nEmail: ${email}\n\n${msg}`;

  // Edit the mailto: component so it has all of the user's input properly encoded as well
  const mailto = `mailto:cindynguyen7544@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  form = document.getElementById("contact-form");

  // Apply changes
  form.action = mailto;
});
