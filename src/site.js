"use strict";

class RCP {
  constructor() {
    this.#setupSectionScrollToActions();
    this.#setupFadeEffect();
    this.#closeCollapseMenuOnLinkClick();
  }

  #setupSectionScrollToActions(){

    this.#setScrollToSection("home", "section-1");
    this.#setScrollToSection("about", "section-2");
    this.#setScrollToSection("reviews", "section-3");
    this.#setScrollToSection("aboutme", "section-4");
    this.#setScrollToSection("stats", "section-5");
    this.#setScrollToSection("gallery", "section-6");
    this.#setScrollToSection("contact", "section-7");
  }

  #setScrollToSection(linkClassName, sectionElement) {
    let links = document.getElementsByClassName(linkClassName);
    for (var i = 0; i < links.length; i++){
        var link =links[i];
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(sectionElement).scrollIntoView();
        })
    }
  }

  #setupFadeEffect() {
    document.addEventListener("scroll", () => {
      var pageBottom = window.screen.height;
      var fades = document.getElementsByClassName("fade");

      for (var i = 0; i < fades.length; i++) {
        var fade = fades[i];

        if (fade.getBoundingClientRect().top < pageBottom) {
          fade.classList.add("visible");
        } else {
          fade.classList.remove("visible");
        }
      }
    });
  }

  #closeCollapseMenuOnLinkClick() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {
      toggle: false,
    });
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (menuToggle.classList.contains("show")) {
          bsCollapse.toggle();
        }
      });
    });
  }
}

window.onload = () => new RCP();
