function scrollToProjects() {
  const el = document.getElementById("projects");
  const offset = 80;

  const top = el.offsetTop - offset;

  window.scrollTo({
    top: top,
    behavior: "smooth"
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');


      if (entry.target.id === "about") {
        const skills = document.querySelectorAll('.progress');

        skills.forEach(el => {
          if (el.classList.contains('html')) el.style.width = '90%';
          if (el.classList.contains('css')) el.style.width = '85%';
          if (el.classList.contains('js')) el.style.width = '75%';
          if (el.classList.contains('python')) el.style.width = '70%';
        });
      }
    }
  });
}, { threshold: 0.3 });


const hiddenElements = document.querySelectorAll('section, .card');

hiddenElements.forEach(el => observer.observe(el));

const text = "Frontend Web Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

typeEffect();



const toggleBtn = document.getElementById("themeToggle");

// load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.onclick = () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
};

(function() {
  emailjs.init("D0E-nlcBuCcN_HpF8");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_enbbu0h", "template_vpcv46m", this)
   .then(() => {
  const successMsg = document.getElementById("success-message");

  this.reset();
  successMsg.classList.add("show");

  setTimeout(() => {
    successMsg.classList.remove("show");
  }, 3000);
})
.catch((error) => {
  const errorMsg = document.getElementById("error-message");

  errorMsg.classList.add("show");

  setTimeout(() => {
    errorMsg.classList.remove("show");
  }, 3000);
});
});

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
  toggle.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  toggle.classList.remove("active");
});

document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    toggle.classList.remove("active");
  });
});



window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

function goToProject() {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href =  "/portfolio.io/task-manager/indexTM.html";
  }, 400);
}


document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    if (href && href.includes("task-manager")) {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  });
});

window.addEventListener("storage", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
});
