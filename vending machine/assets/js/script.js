// ===========================
// PharmaMatic JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // Mobile Menu Toggle
    // ===========================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
    
    // ===========================
    // Smooth Scroll for Navigation
    // ===========================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for links that are just "#"
            if (href !== '#') {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===========================
    // Active Navigation Link
    // ===========================
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = document.querySelector('nav').offsetHeight;
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current link
        const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // ===========================
    // Scroll to Top Button
    // ===========================
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ===========================
    // Product Filter
    // ===========================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-blue-600', 'text-white');
                b.classList.add('bg-gray-200', 'text-gray-700');
            });
            
            this.classList.remove('bg-gray-200', 'text-gray-700');
            this.classList.add('active', 'bg-blue-600', 'text-white');
            
            // Filter products with animation
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // ===========================
    // Contact Form Submission
    // ===========================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Show success message
            showToast('Thank you! Your message has been sent successfully.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
        });
    }
    
    // ===========================
    // Toast Notification System
    // ===========================
    function showToast(message, type = 'success') {
        // Remove existing toasts
        const existingToasts = document.querySelectorAll('.toast');
        existingToasts.forEach(toast => toast.remove());
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Icon based on type
        let icon = '';
        switch(type) {
            case 'success':
                icon = '<i class="fas fa-check-circle text-green-500 mr-3"></i>';
                break;
            case 'error':
                icon = '<i class="fas fa-exclamation-circle text-red-500 mr-3"></i>';
                break;
            case 'warning':
                icon = '<i class="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>';
                break;
            default:
                icon = '<i class="fas fa-info-circle text-blue-500 mr-3"></i>';
        }
        
        toast.innerHTML = `
            <div class="flex items-center">
                ${icon}
                <span class="text-gray-800">${message}</span>
                <button class="ml-4 text-gray-500 hover:text-gray-700" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 5000);
    }
    
    // Make showToast available globally
    window.showToast = showToast;
    
    // ===========================
    // Add to Cart Functionality
    // ===========================
    const addToCartBtns = document.querySelectorAll('.product-card button');
    let cart = [];
    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.text-2xl').textContent;
            const productCategory = productCard.querySelector('.text-xs').textContent;
            
            // Add to cart array
            cart.push({
                name: productName,
                price: productPrice,
                category: productCategory
            });
            
            // Show success message
            showToast(`${productName} added to cart!`, 'success');
            
            // Update cart count (you can add a cart icon with count in the nav)
            console.log('Cart:', cart);
            
            // Add animation to button
            this.innerHTML = '<i class="fas fa-check mr-2"></i>Added';
            this.classList.add('bg-green-600');
            this.classList.remove('bg-blue-600');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-shopping-cart mr-2"></i>Add';
                this.classList.remove('bg-green-600');
                this.classList.add('bg-blue-600');
            }, 2000);
        });
    });
    
    // ===========================
    // Intersection Observer for Animations
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe service cards, product cards, etc.
    const animatedElements = document.querySelectorAll('.service-card, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===========================
    // Navbar Background on Scroll
    // ===========================
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            nav.classList.add('shadow-lg');
        } else {
            nav.classList.remove('shadow-lg');
        }
    });
    
    // ===========================
    // Location "Get Directions" Buttons
    // ===========================
    const directionBtns = document.querySelectorAll('button:not([type])');
    
    directionBtns.forEach(btn => {
        if (btn.textContent.includes('Get Directions')) {
            btn.addEventListener('click', function() {
                const locationCard = this.closest('.bg-white');
                const locationName = locationCard.querySelector('h3').textContent;
                
                showToast(`Opening directions to ${locationName}...`, 'success');
                
                // In a real application, you would open Google Maps or similar
                console.log('Opening directions to:', locationName);
            });
        }
    });
    
    // ===========================
    // Dynamic Year in Footer
    // ===========================
    const footerYear = document.querySelector('footer p');
    if (footerYear && footerYear.textContent.includes('2026')) {
        const currentYear = new Date().getFullYear();
        if (currentYear > 2026) {
            footerYear.textContent = footerYear.textContent.replace('2026', currentYear);
        }
    }
    
    // ===========================
    // Newsletter Form
    // ===========================
    const newsletterForm = document.querySelector('footer form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            showToast('Thank you for subscribing to our newsletter!', 'success');
            
            this.reset();
            
            console.log('Newsletter subscription:', email);
        });
    }
    
    // ===========================
    // Parallax Effect on Hero Section
    // ===========================
    const heroSection = document.getElementById('home');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = heroSection.querySelector('.md\\:block');
            
            if (parallax && scrolled < heroSection.offsetHeight) {
                parallax.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }
    
    // ===========================
    // Loading Animation
    // ===========================
    window.addEventListener('load', function() {
        // Add fade-in class to main sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
            }, index * 100);
        });
    });
    
    // Set initial opacity for sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.5s ease';
    });
    
    console.log('PharmaMatic application loaded successfully!');
    
    // ===========================
    // VendoPharmacy Specific Features
    // ===========================
    
    // VendAI Assistant Button
    const vendAIBtn = document.querySelector('button:has-text("Try VendAI Now")');
    if (!vendAIBtn) {
        const vendAIButtons = Array.from(document.querySelectorAll('button')).filter(btn => 
            btn.textContent.includes('Try VendAI')
        );
        if (vendAIButtons.length > 0) {
            vendAIButtons[0].addEventListener('click', function() {
                showToast('VendAI Assistant: Please select your symptoms on the vending machine screen', 'success');
                console.log('VendAI Assistant activated');
            });
        }
    }
    
    // POM Locker Access Button
    const pomLockerButtons = Array.from(document.querySelectorAll('button')).filter(btn => 
        btn.textContent.includes('Access POM Locker')
    );
    if (pomLockerButtons.length > 0) {
        pomLockerButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                showToast('Redirecting to Singpass verification...', 'success');
                console.log('POM Locker access requested - Singpass verification needed');
            });
        });
    }
    
    // Tele-Pharmacy Consult Buttons
    const teleConsultBtns = Array.from(document.querySelectorAll('button')).filter(btn => 
        btn.querySelector('i.fa-video')
    );
    
    teleConsultBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productCard = this.closest('.product-card');
            const productName = productCard ? productCard.querySelector('h3').textContent : 'P Medicine';
            
            showToast(`Connecting you to a pharmacist for ${productName}...`, 'success');
            
            // Simulate video consultation
            setTimeout(() => {
                showToast('Pharmacist consultation session started', 'success');
            }, 2000);
            
            console.log('Tele-pharmacy consultation requested for:', productName);
        });
    });
});

// ===========================
// Utility Functions
// ===========================

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Local storage helpers
const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error('Error saving to localStorage:', e);
            return false;
        }
    },
    
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error('Error removing from localStorage:', e);
            return false;
        }
    }
};

// Make Storage available globally
window.Storage = Storage;
