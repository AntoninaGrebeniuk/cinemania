(()=>{const e=document.querySelector(".mobile-menu__button"),t=document.querySelector(".mobile-menu__nav-list"),s=document.querySelector(".backdrop");e.addEventListener("click",(()=>{const o="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-open"),e.setAttribute("aria-expanded",!o),document.body.classList.add("modal-open"),t.classList.toggle("is-open"),s.classList.toggle("is-hidden")})),document.addEventListener("click",(o=>{s.contains(o.target)&&(e.classList.toggle("is-open"),document.body.classList.remove("modal-open"),t.classList.toggle("is-open"),s.classList.toggle("is-hidden"))}))})();
//# sourceMappingURL=my-library.96fec522.js.map