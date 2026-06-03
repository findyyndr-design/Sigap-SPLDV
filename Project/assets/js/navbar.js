/**
 * Load Navbar Component
 * Loads navbar and inserts it at the beginning of the page
 */
function loadNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    const html = `
<nav class="navbar">
  <div class="nav-inner">
    <a href="karakter.html" class="nav-brand">
      <div class="nav-logo">S</div>
      SPLDV Interaktif
    </a>
    
    <div class="nav-links">
      <a href="karakter.html" class="nav-link" id="nav-beranda">
        <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
        <span class="nav-text">Home</span>
      </a>
      
      <a href="materi.html" class="nav-link" id="nav-materi">
        <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div>
        <span class="nav-text">Materi</span>
      </a>
      
      <a href="evaluasi.html" class="nav-link nav-center" id="nav-evaluasi">
        <div class="nav-center-outer">
          <div class="nav-center-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
        </div>
        <span class="nav-text">Latihan</span>
      </a>
      
      <a href="literasi.html" class="nav-link" id="nav-literasi">
        <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
        <span class="nav-text">Literasi</span>
      </a>
      
      <a href="diskusi-refleksi.html" class="nav-link" id="nav-diskusi">
        <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z"></path><path d="M8 9h8M8 13h5"></path></svg></div>
        <span class="nav-text">Diskusi</span>
      </a>
      
      <a href="developer.html" class="nav-link" id="nav-developer">
        <div class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
        <span class="nav-text">Developer</span>
      </a>
    </div>
  </div>
</nav>
    `;
    navbarContainer.innerHTML = html;
    setActiveNav();
  }
}

/**
 * Set Active Navigation Link
 * Marks the current page's nav link as active
 */
function setActiveNav() {
  // Get current page filename
  let currentPage = window.location.pathname.split('/').pop();
  if (!currentPage || currentPage === 'index.html') {
      currentPage = 'karakter.html';
  }
  
  // Map page names to nav link IDs
  const navMap = {
    'karakter.html': 'nav-beranda',
    'materi.html': 'nav-materi',
    'evaluasi.html': 'nav-evaluasi',
    'literasi.html': 'nav-literasi',
    'diskusi-refleksi.html': 'nav-diskusi',
    'developer.html': 'nav-developer',
  };

  // Remove active class from all nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to current page's link
  const activeNav = navMap[currentPage];
  if (activeNav) {
    const activeLink = document.getElementById(activeNav);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);
