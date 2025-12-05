document.addEventListener("DOMContentLoaded", (event) => {
  // Stellt sicher, dass die Swiper-Bibliothek geladen ist
  if (typeof Swiper === "undefined") {
    console.error(
      "Swiper-Bibliothek nicht gefunden. Bitte prüfen Sie die Verlinkung in Ihrer HTML-Datei."
    );
    return;
  }

  const swiper = new Swiper(".swiper", {
    // Hauptkonfiguration
    loop: true,
    mousewheel: true,

    // Freier Modus für flüssiges, nicht-einrastendes Scrollen
    freeMode: true,

    // Geschwindigkeit (wird im Free Mode oft ignoriert)
    speed: 800,

    // Die Slides sollen die Breite ihres Inhalts annehmen (für freigestellte Bilder)
    slidesPerView: "auto",

    // WICHTIG: Auf 0 setzen, da der Abstand jetzt im CSS (padding-right) geregelt wird!
    spaceBetween: 30,

    // Navigation Arrows (Pfeile)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Die Pagination (Punkte) ist komplett auskommentiert, da sie im CSS ausgeblendet wurde
    /*
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      */
  });
});
