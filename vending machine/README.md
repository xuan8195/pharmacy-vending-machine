# PharmaMatic - 24/7 Automated Pharmacy Web Application

A professional, responsive web application for an automated pharmacy vending machine service. Built with modern web technologies and best practices.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface using Tailwind CSS
- **Interactive Elements**: Smooth animations, transitions, and user interactions
- **Product Catalog**: Browse and filter pharmacy products by category
- **Location Finder**: Find nearby vending machine locations
- **Contact Form**: Get in touch with customer support
- **Newsletter Subscription**: Stay updated with latest news
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Performance Optimized**: Fast loading and smooth scrolling

## 📁 Project Structure

```
vending machine/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css      # Custom CSS styles and animations
│   └── js/
│       └── script.js      # JavaScript functionality
├── Products-image/         # Product images directory (placeholder)
└── README.md              # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)**: Modern JavaScript features
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## 📦 Installation & Setup

### Option 1: Direct Use (No Installation Required)

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The application uses CDN links for all dependencies

### Option 2: Local Development Server

For a better development experience with live reload:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx serve

# Using PHP (if installed)
php -S localhost:8000
```

Then open your browser to `http://localhost:8000`

## 🎨 Customization

### Colors

Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Main brand color */
    --secondary-color: #1e40af;  /* Secondary brand color */
    --accent-color: #3b82f6;     /* Accent color */
    /* ... more colors */
}
```

### Content

- **Company Name**: Search and replace "PharmaMatic" in `index.html`
- **Contact Info**: Update phone, email, and address in the Contact section
- **Products**: Modify product cards in the Products section
- **Locations**: Update location cards with your actual locations

### Images

Replace placeholder icons with actual images:

1. Add your product images to the `Products-image/` folder
2. Update the image paths in the product cards:

```html
<!-- Replace this: -->
<div class="h-48 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
    <i class="fas fa-capsules text-white text-6xl"></i>
</div>

<!-- With this: -->
<img src="Products-image/your-product.jpg" alt="Product Name" class="h-48 w-full object-cover">
```

## 📱 Sections Overview

### 1. Navigation Bar
- Sticky navigation with smooth scroll
- Mobile-responsive hamburger menu
- Active link highlighting

### 2. Hero Section
- Eye-catching gradient background
- Call-to-action buttons
- Responsive layout

### 3. Services Section
- 24/7 Availability
- Instant Access
- Safe & Secure
- Convenient Locations

### 4. Products Section
- Product grid with filtering
- Category-based navigation
- Add to cart functionality

### 5. Locations Section
- Multiple location cards
- "Get Directions" integration ready
- Location details

### 6. About/Vision Section
- Company mission and vision
- Statistics display
- Brand story

### 7. Contact Section
- Contact form with validation
- Contact information
- Multiple contact methods

### 8. Footer
- Company information
- Quick links
- Newsletter subscription
- Social media links

## ⚡ JavaScript Features

### Interactive Elements
- Mobile menu toggle
- Smooth scrolling navigation
- Active link highlighting
- Scroll to top button

### Product Filtering
```javascript
// Products can be filtered by:
- All Products
- Pain Relief
- Cold & Flu
- Vitamins
- First Aid
```

### Form Handling
- Contact form submission
- Newsletter subscription
- Form validation
- Success notifications

### Animations
- Fade-in on scroll (Intersection Observer)
- Hover effects
- Card animations
- Button ripple effects

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development Tips

### Adding New Products

```html
<div class="product-card" data-category="your-category">
    <div class="h-48 bg-gradient-to-br from-blue-200 to-blue-300">
        <!-- Your image or icon -->
    </div>
    <div class="p-6">
        <span class="text-xs font-semibold text-blue-600 uppercase">Category</span>
        <h3 class="text-lg font-bold text-gray-800 mt-2 mb-2">Product Name</h3>
        <p class="text-gray-600 text-sm mb-4">Product description</p>
        <div class="flex justify-between items-center">
            <span class="text-2xl font-bold text-blue-600">$19.99</span>
            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">
                <i class="fas fa-shopping-cart mr-2"></i>Add
            </button>
        </div>
    </div>
</div>
```

### Adding New Sections

1. Create a new `<section>` with a unique `id`
2. Add navigation link: `<a href="#your-section">Your Section</a>`
3. Style as needed in `style.css`

### Integrating Backend

To connect to a backend API:

```javascript
// In assets/js/script.js

// Contact form example
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: this.querySelector('input[type="text"]').value,
        email: this.querySelector('input[type="email"]').value,
        message: this.querySelector('textarea').value
    };
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showToast('Message sent successfully!', 'success');
        }
    } catch (error) {
        showToast('Error sending message', 'error');
    }
});
```

## 📊 Performance Optimization

- **Lazy Loading**: Implement for images when adding actual photos
- **Minification**: Minify CSS/JS for production
- **CDN**: Already using CDN for external libraries
- **Caching**: Implement service worker for offline support

## 🔒 Security Considerations

When deploying to production:

1. Implement proper form validation on the backend
2. Add CSRF protection for forms
3. Use HTTPS
4. Sanitize user inputs
5. Implement rate limiting for API endpoints

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📞 Support

For questions or issues:
- Email: support@pharmamatic.com (placeholder)
- Phone: +1 (555) 123-4567 (placeholder)

## 🎉 Credits

- **Tailwind CSS**: https://tailwindcss.com/
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/

---

**Built with ❤️ for better healthcare accessibility**
