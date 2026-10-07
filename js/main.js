// Copy-to-clipboard for any button with a data-copy attribute
document.querySelectorAll('.copy-btn').forEach(function (btn) {
  btn.addEventListener('click', async function () {
    var status = btn.nextElementSibling;          // the <span class="copy-status"> after the button
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      status.textContent = 'Copied';
    } catch (err) {
      status.textContent = 'Copy failed. Select the address instead';
    }
    setTimeout(function () { status.textContent = ''; }, 2000);   // clear after 2 s
  });
});

// ===== Phone navigation menu =====
var toggle = document.querySelector('.nav-toggle');
var menu = document.getElementById('nav-links');

if (toggle && menu) {                       // only run on pages that have the menu
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.classList.toggle('is-open', open);
  }

  // Button opens/closes the menu
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Choosing a link closes the menu, otherwise it stays open over the section you jumped to
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  // Escape key closes it and returns focus to the button (keyboard users)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });
}