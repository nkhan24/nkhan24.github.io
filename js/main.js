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