document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Dejar de observar una vez que ya apareció
            }
        });
    }, {
        threshold: 0.1, // Activar cuando el 10% de la tarjeta sea visible
        rootMargin: "0px 0px -50px 0px"
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});