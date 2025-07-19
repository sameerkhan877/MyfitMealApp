  const cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    // Only apply on screens ≥ 1024px
    if (window.innerWidth >= 1024) {
      const cursorSize = 24; // if w-6 h-6 (6 x 4 = 24px)
      const offset = cursorSize / 2;

      gsap.to(cursor, {
        x: e.clientX - offset,
        y: e.clientY - offset,
        duration: 0.15,
        ease: "power2.out"
      });
    }
  });


// Scale up on hover
document.querySelectorAll('h1, button, a').forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        gsap.to(cursor, { scale: 2, duration: 0.3 });
    });
    elem.addEventListener("mouseleave", () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
    });
});
