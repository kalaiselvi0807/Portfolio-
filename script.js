// ===============================
// DARK / LIGHT MODE
// ===============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ===============================
// SIMPLE SCROLL ANIMATION
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(function(section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.7s";

    observer.observe(section);

});
