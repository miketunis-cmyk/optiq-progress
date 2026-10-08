'use strict';
(() => {
  const storageKey = 'optiq-progress-theme';
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const validTheme = value => value === 'light' || value === 'dark' ? value : null;
  let preference = null;
  try {
    preference = validTheme(localStorage.getItem(storageKey));
  } catch {
    // Theme selection still works when browser storage is unavailable.
  }

  function applyTheme() {
    const dark = (preference || (systemTheme.matches ? 'dark' : 'light')) === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111a29' : '#183fbb');
    const toggle = document.querySelector('#theme-toggle');
    if (toggle) {
      toggle.hidden = false;
      toggle.setAttribute('aria-pressed', String(dark));
    }
  }

  applyTheme();
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    document.querySelector('#theme-toggle')?.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Keep the selected theme for this page even without persistent storage.
      }
      applyTheme();
    });
  });
  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme();
  });
  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) {
      preference = validTheme(event.newValue);
      applyTheme();
    }
  });
})();
