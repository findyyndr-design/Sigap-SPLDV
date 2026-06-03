/**
 * Load Navbar Component (Literasi version)
 * Loads navbar-literasi.html and inserts it at the beginning of the page
 */
function loadNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  
  if (navbarContainer) {
    fetch('./components/navbar-literasi.html')
      .then(response => response.text())
      .then(html => {
        navbarContainer.innerHTML = html;
        setActiveNav();
      })
      .catch(error => console.error('Error loading navbar:', error));
  }
}

/**
 * Set Active Navigation Link (Literasi version)
 * Marks the current page's nav link as active
 */
function setActiveNav() {
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Map page names to nav link IDs (literasi version)
  const navMap = {
    'index.html': 'nav-beranda-lit',
    'karakter.html': 'nav-beranda-lit',
    'literasi.html': 'nav-literasi-lit',
    'materi.html': 'nav-materi-lit',
    'evaluasi.html': 'nav-evaluasi-lit',
    'developer.html': 'nav-developer-lit',
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
