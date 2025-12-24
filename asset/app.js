/* ===== ANIMATION ===== */
document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

/* ===== MULTI LANGUAGE ===== */
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyLang();
}

function applyLang() {
  const lang = localStorage.getItem("lang") || "id";

  if (lang === "en") {
    document.getElementById("tagline").innerText = "One Action, Endless Achievements";
    document.getElementById("aboutTitle").innerText = "About Us";
    document.getElementById("aboutText").innerText =
      "OSIS Insan Terpadu is a professional, Nasional-standard student council.";
    document.getElementById("programTitle").innerText = "Featured Programs";
  }
}
applyLang();

/* ===== LOGIN SYSTEM ===== */
function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  fetch("data/users.json")
    .then(res => res.json())
    .then(data => {
      const found = data.find(x => x.user === u && x.pass === p);
      if (found) {
        localStorage.setItem("login", "true");
        location.href = "admin/";
      } else {
        alert("Login gagal");
      }
    });
}

/* ===== PROTECT ADMIN ===== */
if (location.pathname.includes("/admin")) {
  if (localStorage.getItem("login") !== "true") {
    location.href = "../login.html";
  }
}

function logout() {
  localStorage.clear();
  location.href = "../login.html";
}
