document.getElementById("year").textContent = new Date().getFullYear();

const root = document.documentElement;
document.getElementById("themeToggle").addEventListener("click", () => {
  root.setAttribute(
    "data-theme",
    root.getAttribute("data-theme") === "dark" ? "light" : "dark",
  );
});

const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
navToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
  navToggle.textContent = isOpen ? "✕" : "☰";
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.textContent = "☰";
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("cname").value;
  const email = document.getElementById("cemail").value;
  const subject =
    document.getElementById("csubject").value || "Portfolio inquiry";
  const message = document.getElementById("cmessage").value;
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`,
  );
  window.location.href = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
