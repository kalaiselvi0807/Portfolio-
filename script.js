
// ================= MOBILE MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// Close menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("active");

    });

});


// ================= CURRENT YEAR =================

// Automatically updates footer year

const currentYear = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        "© " + currentYear +
        " Kalaiselvi V. All Rights Reserved.";

}
