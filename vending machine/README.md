# VendoPharmacy - Automated Pharmacy Vending Website

**"Our Medicine, Your Convenience"**

A professional, responsive web application for VendoPharmacy's automated pharmacy vending solution in Singapore. Featuring 24/7 access, tele-pharmacy services, and AI-assisted recommendations.

## 🚀 Key Features

### Core Services
- **24/7 Tele-Pharmacy**: Mandatory real-time pharmacist counselling for P and POM medications via live video
- **POM Secure Lockers**: Prescription medicine collection with Singpass verification
- **VendAI Assistant**: AI-powered medication recommendations based on symptoms
- **Travel Med Kits**: Customised medication packages for different trip durations
- **Hospital Collection**: Reduce NUH waiting times by collecting from residential locations
- **Temperature Controlled**: HSA-compliant storage with continuous monitoring

### Medication Categories
- **GSL (General Sales List)**: No prescription required - instant purchase
- **P (Pharmacy-Only)**: Requires mandatory tele-pharmacy counselling
- **POM (Prescription-Only)**: Secure locker collection with Singpass authentication

### Technology Features
- **Responsive Design**: Works seamlessly on all devices
- **Modern UI/UX**: Clean, professional interface using Tailwind CSS
- **Interactive Elements**: Smooth animations and user interactions
- **Product Filtering**: Browse by category (GSL, P Medicines, Travel Kits, First Aid)
- **Location Finder**: Find VendoPharmacy machines across Singapore
- **Contact System**: Get in touch with 24/7 support

## 📁 Project Structure

```
vending machine/
├── index.html              # Main website file
├── vending machine.txt     # Complete business plan documentation
├── assets/
│   ├── css/
│   │   └── style.css      # Custom VendoPharmacy styles
│   └── js/
│       └── script.js      # Interactive features & VendAI integration
├── Products-image/         # Product images directory
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)**: Modern JavaScript with async/await
- **Font Awesome 6.5.1**: Medical and pharmacy icons
- **Google Fonts**: Inter font family for professional typography

## 📦 Installation & Setup

### Quick Start (No Installation Required)

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The application uses CDN links - no build process needed!

### Local Development Server

For better development experience:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎨 Sections Overview

### 1. **Navigation Bar**
- Sticky navigation with smooth scroll
- Mobile-responsive menu
- Active link highlighting

### 2. **Hero Section**
- VendoPharmacy branding and tagline
- Mission statement
- Call-to-action buttons

### 3. **Services Section**
- 6 core services with icons
- Tele-pharmacy, POM lockers, VendAI
- Medication category overview (GSL, P, POM)

### 4. **Value Proposition**
- 24/7 convenience
- Clinical excellence
- Safety & compliance
- Cost-effectiveness

### 5. **Products Section**
- VendAI assistant banner
- Product filtering system
- 8 sample products across categories
- POM locker information panel

### 6. **Locations Section**
- Singapore-specific locations:
  - NUH Hospital Hub
  - MRT stations (Jurong East, Raffles Place)
  - HDB estates (Tampines, Ang Mo Kio, Bedok)
- Feature badges (POM Locker, Tele-Pharmacy, VendAI)

### 7. **About Section**
- Mission and vision statements
- Partnerships (NUH, Hyphens Pharma)
- Statistics and compliance badges

### 8. **Contact Section**
- Contact form with validation
- Singapore phone number
- Email support
- Partnership information

### 9. **Footer**
- Company information
- Quick links and support
- Newsletter subscription
- Social media links
- HSA compliance notice

## ⚡ JavaScript Features

### VendoPharmacy-Specific
- **VendAI Integration**: Click handler for AI assistant
- **Tele-Pharmacy**: Video consultation button handlers
- **POM Locker Access**: Singpass verification flow
- **Product Categories**: Advanced filtering system

### Core Features
- Mobile menu toggle
- Smooth scrolling navigation
- Active section highlighting
- Scroll to top button
- Toast notification system
- Add to cart with animations
- Form validation and submission
- Intersection Observer animations

## 🎯 Customization Guide

### Update Branding

Search and replace in `index.html`:
- Company name: "VendoPharmacy"
- Tagline: "Our Medicine, Your Convenience"

### Update Contact Info

In the Contact section:
```html
<p class="text-gray-600">+65 6XXX XXXX</p>
<p class="text-gray-600">support@vendopharmacy.sg</p>
```

### Add Product Images

Replace icon placeholders with images:
```html
<!-- Replace -->
<div class="h-48 bg-gradient-to-br from-blue-200 to-blue-300">
    <i class="fas fa-capsules text-white text-6xl"></i>
</div>

<!-- With -->
<img src="Products-image/product-name.jpg" alt="Product" class="h-48 w-full object-cover">
```

### Update Locations

Modify location cards in the Locations section with actual addresses and coordinates.

## 🏥 Integration Points

### Singpass Integration
```javascript
// POM Locker access - integrate with actual Singpass API
pomLockerBtn.addEventListener('click', async function() {
    // Redirect to Singpass authentication
    window.location.href = 'https://singpass.gov.sg/...';
});
```

### Tele-Pharmacy Video
```javascript
// Integrate with video consultation platform
function startTelePharmacy(productId) {
    // Launch video consultation
    // Connect to pharmacist on duty
}
```

### VendAI Backend
```javascript
// Connect to AI recommendation engine
async function getVendAIRecommendation(symptoms) {
    const response = await fetch('/api/vendai/recommend', {
        method: 'POST',
        body: JSON.stringify({ symptoms })
    });
    return response.json();
}
```

## 🔒 Compliance & Security

- **HSA Regulated**: Health Sciences Authority compliance
- **PDPA Compliant**: Personal Data Protection Act
- **Singpass Verified**: Secure government authentication
- **Temperature Monitored**: Real-time quality control
- **Pharmacist Oversight**: Professional gatekeeping for P & POM

## 🤝 Partnerships

- **NUH (National University Hospital)**: Hospital integration for POM collection
- **Hyphens Pharma**: Pharmaceutical supply and distribution

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Color Scheme

```css
--primary-color: #2563eb;    /* Blue - Primary brand */
--secondary-color: #1e40af;  /* Dark Blue */
--success-color: #10b981;    /* Green - Availability */
--purple-color: #9333ea;     /* Purple - VendAI */
--warning-color: #f59e0b;    /* Orange - Alerts */
--danger-color: #ef4444;     /* Red - Singpass */
```

## 📊 Future Enhancements

- [ ] Real Singpass API integration
- [ ] Live tele-pharmacy video consultation
- [ ] VendAI chatbot with NLP
- [ ] Interactive Singapore map with all locations
- [ ] Real-time inventory display
- [ ] SMS notification system
- [ ] Multi-language support (EN, ZH, MS, TA)
- [ ] Mobile app integration
- [ ] Electronic Prescription System (EPS) connection
- [ ] AI stock prediction and FEFO rotation

## 📝 License

© 2026 VendoPharmacy. All rights reserved.

## 📞 Support

- **Hotline**: +65 6XXX XXXX (24/7)
- **Email**: support@vendopharmacy.sg
- **Partners**: NUH, Hyphens Pharma

## 🎉 Credits

- **Tailwind CSS**: https://tailwindcss.com/
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/

---

**Healthcare doesn't stop. Neither do we.**

*Built for Singapore's future of accessible, safe, and convenient pharmacy access*
