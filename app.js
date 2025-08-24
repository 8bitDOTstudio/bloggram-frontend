(function () {
  const tg = window.Telegram ? window.Telegram.WebApp : null;

  // Theme toggle for testing outside Telegram
  const themeBtn = document.getElementById('themeBtn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  // If opened inside Telegram client
  if (tg) {
    tg.ready();
    tg.expand(); // use more vertical space
    try {
      // Match Telegram theme
      const colorScheme = tg.colorScheme; // 'light' | 'dark'
      if (colorScheme === 'dark') document.body.classList.add('dark');

      // Show Telegram user (unsafe on client—server will verify later)
      const u = tg.initDataUnsafe?.user;
      if (u) {
        document.getElementById('userSlot').textContent = u.username || `${u.first_name || ''} ${u.last_name || ''}`.trim() || `ID:${u.id}`;
      }
    } catch (e) {
      console.warn('Mini App init warning:', e);
    }
  }
})();
