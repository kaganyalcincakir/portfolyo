function goToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}

function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

const menuLinks = document.querySelectorAll("#navbar a");

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navbar").classList.remove("active");
    });
});

function openProject(projectName) {
    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const tech = document.getElementById("modal-tech");

    if (projectName === "portfolio") {
        title.textContent = "Kişisel Portföy Sitesi";
        description.textContent = "HTML, CSS ve JavaScript kullanılarak hazırlanmış modern, responsive ve koyu temalı bir kişisel web sitesidir.";
        tech.textContent = "Kullanılan teknolojiler: HTML, CSS, JavaScript";
    }

    if (projectName === "form") {
        title.textContent = "Giriş / Kayıt Formu";
        description.textContent = "Kullanıcı giriş ve kayıt ekranlarının modern bir arayüzle tasarlanmasını amaçlayan bir projedir.";
        tech.textContent = "Kullanılan teknolojiler: HTML, CSS";
    }

    if (projectName === "php") {
        title.textContent = "PHP İletişim Formu";
        description.textContent = "Kullanıcıdan alınan iletişim bilgilerini PHP ile işlemek için hazırlanmış basit bir backend uygulamasıdır.";
        tech.textContent = "Kullanılan teknolojiler: PHP, HTML, CSS";
    }

    modal.style.display = "flex";
}

function closeProject() {
    document.getElementById("project-modal").style.display = "none";
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("success-message").textContent =
        "Mesajınız başarıyla gönderildi.";

    form.reset();
});

const revealElements = document.querySelectorAll(".reveal");
const topButton = document.getElementById("top-btn");

function revealOnScroll() {
    revealElements.forEach(function(element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navbar a");

function setActiveLink() {
    let currentSection = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active-link");
        }
    });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);