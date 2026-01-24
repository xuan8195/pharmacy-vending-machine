// Navigation dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown menus with improved hover behavior
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-button');
        const menu = dropdown.querySelector('.dropdown-menu');
        let hideTimeout;
        
        if (button && menu) {
            // Show dropdown on hover
            button.addEventListener('mouseenter', () => {
                clearTimeout(hideTimeout);
                menu.classList.remove('hidden');
            });
            
            // Keep dropdown open when hovering over it
            menu.addEventListener('mouseenter', () => {
                clearTimeout(hideTimeout);
                menu.classList.remove('hidden');
            });
            
            // Hide with delay when leaving button
            button.addEventListener('mouseleave', () => {
                hideTimeout = setTimeout(() => {
                    menu.classList.add('hidden');
                }, 300); // 300ms delay before hiding
            });
            
            // Hide with delay when leaving dropdown
            menu.addEventListener('mouseleave', () => {
                hideTimeout = setTimeout(() => {
                    menu.classList.add('hidden');
                }, 300);
            });
        }
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes(currentPage) || (currentPage === '' && href === 'index.html'))) {
            link.classList.add('nav-active');
        }
    });
});

// Modal functionality
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
        e.target.closest('.modal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
