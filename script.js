document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll(".nav-links li a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (hamburger && navLinks) {
          hamburger.classList.remove("active")
          navLinks.classList.remove("active")
        }
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Animate skill bars on scroll
    const skillSection = document.querySelector(".skills")
    const skillLevels = document.querySelectorAll(".skill-level")
  
    if (skillSection && skillLevels.length) {
      const animateSkills = () => {
        const sectionPos = skillSection.getBoundingClientRect().top
        const screenPos = window.innerHeight / 1.3
  
        if (sectionPos < screenPos) {
          skillLevels.forEach((level) => {
            level.style.width = level.style.width
          })
          window.removeEventListener("scroll", animateSkills)
        }
      }
  
      window.addEventListener("scroll", animateSkills)
      // Trigger once on load
      animateSkills()
    }
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll("section")
    const navLinksElements = document.querySelectorAll(".nav-links a")
  
    function highlightNavLink() {
      const scrollPosition = window.scrollY
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinksElements.forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    }
  
    window.addEventListener("scroll", highlightNavLink)
    // Trigger once on load
    highlightNavLink()
  })
  