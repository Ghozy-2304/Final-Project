const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle ketika tombol hamburger ditekan
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // mencegah click bubble ke document
  mobileMenu.classList.toggle("hidden");
});

// Tutup menu jika klik di luar menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu = mobileMenu.contains(e.target);
  const isClickOnButton = menuBtn.contains(e.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    mobileMenu.classList.add("hidden");
  }
});

window.addEventListener("load", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 80;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString("id-ID");
      }
    };
    updateCount();
  });
});
