(function () {
  function onReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    }
  }

  onReady(function () {
    var siteNav = document.querySelector('.site-nav');
    if (!siteNav) {
      return;
    }

    var menuToggle = siteNav.querySelector('.menu-toggle');
    var menu = siteNav.querySelector('.trigger');
    var dropdown = siteNav.querySelector('.dropdown');
    var dropdownButton = dropdown ? dropdown.querySelector('.dropdown-title') : null;

    function closeDropdown() {
      if (!dropdown || !dropdownButton) {
        return;
      }
      dropdown.classList.remove('is-open');
      dropdownButton.setAttribute('aria-expanded', 'false');
    }

    function setActiveLink() {
      var links = siteNav.querySelectorAll('.page-link');
      if (!links.length) return;

      var currentPath = window.location.pathname.replace(/\/+$/, '/');
      var bestMatch = null;

      links.forEach(function (link) {
        var linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/+$/, '/');
        if (currentPath === linkPath || currentPath.startsWith(linkPath)) {
          if (!bestMatch || linkPath.length > bestMatch.path.length) {
            bestMatch = { el: link, path: linkPath };
          }
        }
      });

      if (bestMatch) {
        bestMatch.el.classList.add('is-active');
        var dropdownParent = bestMatch.el.closest('.dropdown');
        if (dropdownParent) {
          var dropdownTitle = dropdownParent.querySelector('.dropdown-title');
          dropdownTitle && dropdownTitle.classList.add('is-active');
        }
      }
    }

    setActiveLink();

    if (menuToggle && menu) {
      function closeMenu() {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        closeDropdown();
      }

      menuToggle.addEventListener('click', function () {
        var isOpen = siteNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        if (!isOpen) {
          closeDropdown();
        }
      });

      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (siteNav.classList.contains('is-open')) {
            closeMenu();
          }
        });
      });

      document.addEventListener('click', function (event) {
        if (!siteNav.contains(event.target) && siteNav.classList.contains('is-open')) {
          closeMenu();
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
          closeMenu();
          menuToggle.focus();
        }
      });
    }

    if (dropdown && dropdownButton) {
      var dropdownContent = dropdown.querySelector('.dropdown-content');
      if (!dropdownContent) {
        return;
      }

      dropdownButton.addEventListener('click', function (event) {
        event.stopPropagation();
        var isOpen = dropdown.classList.toggle('is-open');
        dropdownButton.setAttribute('aria-expanded', String(isOpen));
      });

      dropdownButton.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && dropdown.classList.contains('is-open')) {
          closeDropdown();
        }
      });

      document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
          closeDropdown();
        }
      });

      dropdownContent.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeDropdown();
          dropdownButton.focus();
        }
      });
    }
  });
})();
