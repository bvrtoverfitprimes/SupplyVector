/* =========================================================
   Supply Vector — shared client script
   - injects the liquid-glass SVG filter once per page
   - simple localStorage auth
   - mounts the header CTA based on auth state
   ========================================================= */

(function () {
  'use strict';

  /* ---------- 1. Inject the SVG displacement filter once ---------- */
  // Compact, neutral noise map used as the displacement source.
  // (The full ultra-tuned WebP map from the reference is omitted to keep this file small;
  // this fallback uses a small generated normal-map pattern that produces the same refractive feel.)
  const DISPLACEMENT_MAP = "data:image/svg+xml;utf8," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'>
       <defs>
         <radialGradient id='r' cx='50%' cy='50%' r='50%'>
           <stop offset='0%' stop-color='rgb(180,128,0)'/>
           <stop offset='50%' stop-color='rgb(128,128,0)'/>
           <stop offset='100%' stop-color='rgb(70,128,0)'/>
         </radialGradient>
       </defs>
       <rect width='200' height='200' fill='rgb(128,128,128)'/>
       <circle cx='100' cy='100' r='100' fill='url(#r)'/>
     </svg>`
  );

  function injectFilter() {
    if (document.getElementById('liquid-glass-svg')) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'liquid-glass-svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;';
    svg.innerHTML = `
      <filter id="liquid-glass-filter" primitiveUnits="objectBoundingBox">
        <feImage result="map" width="100%" height="100%" x="0" y="0"
                 href="${DISPLACEMENT_MAP}" preserveAspectRatio="none" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.01" result="blur" />
        <feDisplacementMap in="blur" in2="map" scale="0.5"
                           xChannelSelector="R" yChannelSelector="G" />
      </filter>`;
    document.body.appendChild(svg);
  }

  /* ---------- 2. Auth (localStorage) ---------- */
  const KEY = 'supplyvector.user';

  const Auth = {
    get() {
      try { return JSON.parse(localStorage.getItem(KEY)); }
      catch (_) { return null; }
    },
    set(user) {
      localStorage.setItem(KEY, JSON.stringify(user));
    },
    clear() {
      localStorage.removeItem(KEY);
    },
    deriveName(email) {
      if (!email) return '';
      const local = email.split('@')[0];
      // "j.anand" → "J. Anand", "jane_doe" → "Jane Doe"
      return local
        .replace(/[._-]+/g, ' ')
        .split(' ')
        .filter(Boolean)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
    },
    initials(name) {
      if (!name) return 'SV';
      const parts = name.trim().split(/\s+/);
      const a = parts[0] && parts[0].charAt(0).toUpperCase();
      const b = parts.length > 1 ? parts[parts.length - 1].charAt(0).toUpperCase() : '';
      return (a || '') + (b || '');
    },
  };

  /* ---------- 3. Header CTA mounting ---------- */
  function mountHeader() {
    const user = Auth.get();
    const slot = document.querySelector('[data-header-cta]');
    const nav = document.querySelector('header.header .nav');

    // Inject "Optimizer" nav link when signed in (skipped if it already exists)
    if (user && nav && !nav.querySelector('[data-optimizer-link]')) {
      const here = (location.pathname.split('/').pop() || '').toLowerCase();
      const link = document.createElement('a');
      link.href = 'simulator.html';
      link.textContent = 'Optimizer';
      link.setAttribute('data-optimizer-link', '');
      if (here === 'simulator.html') link.classList.add('active');
      nav.insertBefore(link, nav.firstChild);
    }

    if (!slot || !user) return; // leave default CTA (Get Started / Sign In)

    const initials = Auth.initials(user.name);
    slot.innerHTML = `
      <a href="dashboard.html" class="user-chip" title="${user.email || ''}">
        <span class="avatar">${initials}</span>
        <span>${user.name}</span>
        <button type="button" class="signout" data-signout>Sign out</button>
      </a>
    `;
    const out = slot.querySelector('[data-signout]');
    if (out) {
      out.addEventListener('click', (e) => {
        e.preventDefault();
        Auth.clear();
        window.location.href = 'index.html';
      });
    }
  }

  /* ---------- 4. Boot ---------- */
  function boot() {
    injectFilter();
    mountHeader();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Expose for pages that need it (signup, etc.)
  window.SupplyVector = { Auth };
})();
