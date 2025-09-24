document.addEventListener("DOMContentLoaded", () => {
  // ⏳ Loader
  setTimeout(() => {
    document.getElementById("loader-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 5000); // 5 segundos

  // 📱 Toggle menú en móvil
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-center ul");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
