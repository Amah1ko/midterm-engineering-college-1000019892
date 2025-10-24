# Engineering College Website

A modern, responsive, and accessible multi-page website for Engineering College, showcasing academic programs, campus life, and providing online application capabilities.

## 🎓 Project Overview

This is a static brochure-style website built for an educational institution offering five engineering programs. The site features a fixed navigation bar, responsive design, interactive elements, and comprehensive forms with client-side validation.

**Live URL:** [Add your GitHub Pages URL here]

**Repository:** [Add your GitHub repository URL here]

## 📄 Page Map

The website consists of 6 main pages:

1. **Home (index.html)** - Hero section with college tagline, quick stats, featured programs, and call-to-action
2. **About & Programs (about.html)** - College mission, values, and detailed information about all 5 engineering programs
3. **Admissions (admissions.html)** - Application process, timeline, requirements, tuition fees, and FAQ
4. **Student Life (student-life.html)** - Campus organizations, events, facilities, and student testimonials
5. **Contact (contact.html)** - Contact information, office hours, department contacts, and contact form
6. **Registration (registration.html)** - Comprehensive student application form with validation

## ✨ Features Implemented

### Core Requirements

- **Responsive Design:** Mobile-first approach with Bootstrap 5, works seamlessly on phones, tablets, and desktops
- **Fixed Navigation:** Persistent top navigation bar with active page states and mobile-friendly collapse menu
- **Semantic HTML5:** Proper use of semantic elements (nav, section, article, footer, etc.)
- **Accessibility:** WCAG-compliant with proper heading hierarchy, ARIA labels, focus states, and keyboard navigation
- **Consistent Branding:** CSS variables for colors, typography scale, and spacing system throughout

### Forms

#### Registration Form (Advanced)
- Full Name, Email, Phone Number
- Program Selection (dropdown)
- Study Mode (radio buttons: Full-Time, Part-Time, Accelerated)
- Intended Intake Date
- Password & Confirm Password with matching validation
- Scholarship Interest (optional field)
- Terms & Conditions agreement checkbox
- Real-time client-side validation with inline error/success messages
- Prevents submission until all required fields are valid
- Visual confirmation state after successful submission
- Fully keyboard accessible

#### Contact Form (Basic)
- Name, Email, Subject, Message
- Anti-spam measure (simple math question)
- Consent checkbox
- Success/failure feedback messages
- Client-side validation

### Interactive JavaScript Features

#### Feature #1: Program Filter
- **Location:** About & Programs page
- **Description:** Filter engineering programs by study mode (All, 4-Year, Accelerated)
- **Enhancement:** Improves content discoverability and user experience

#### Feature #2: Program Details Toggle
- **Location:** About & Programs page
- **Description:** Expandable/collapsible program details with smooth animations
- **Enhancement:** Reduces visual clutter and allows users to explore content at their own pace

### Additional Interactive Elements

- Smooth scrolling for anchor links
- Form input validation with visual feedback
- Hover effects on cards and buttons
- Responsive FAQ accordion
- Phone number auto-formatting
- Email validation enhancement
- Fade-in animations on scroll
- Navbar shadow on scroll

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables, Flexbox, Grid
- **Bootstrap 5.3.2** - Responsive framework and components
- **Vanilla JavaScript (ES6+)** - Form validation and interactivity
- **SVG** - Scalable vector graphics for logos and icons

## 📁 Project Structure

```
engineering-college/
├── index.html
├── about.html
├── admissions.html
├── student-life.html
├── contact.html
├── registration.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo.svg
│       ├── hero.svg
│       ├── campus.svg
│       ├── program-computer.svg
│       ├── program-electrical.svg
│       └── program-civil.svg
```

## 🎨 Design System

### Color Palette
- **Primary:** #0d6efd (Bootstrap Blue)
- **Secondary:** #6c757d (Gray)
- **Success:** #198754 (Green)
- **Danger:** #dc3545 (Red)
- **Light Background:** #f8f9fa
- **Dark Background:** #212529

### Typography
- **Font Family:** System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Line Height:** 1.6 for body text, 1.2 for headings
- **Scale:** Consistent heading hierarchy from h1 to h6

### Spacing
- Base spacing unit: 1rem (16px)
- Consistent padding and margins using multiples of the base unit

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and roles where appropriate
- Proper heading hierarchy
- Sufficient color contrast ratios (WCAG AA compliant)
- Visible focus indicators on all interactive elements
- Keyboard navigation support
- Form labels properly associated with inputs
- Alt text for all non-decorative images
- Responsive text sizing

## 📱 Responsive Breakpoints

- **Mobile:** < 576px
- **Tablet:** 576px - 991px
- **Desktop:** ≥ 992px

The site uses Bootstrap's responsive grid system and custom media queries for optimal display across all devices.

## 🚀 Deployment

### GitHub Pages Setup

1. Push code to GitHub repository
2. Go to repository Settings
3. Navigate to Pages section
4. Select branch (main/master) and root folder
5. Save and wait for deployment
6. Access site at: `https://[username].github.io/[repository-name]`

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required - pure static site

## 🎯 Known Limitations

- Forms are client-side only (no backend submission)
- No actual user authentication system
- SVG images are placeholder paths (need to be created/replaced)
- No CMS integration for content management
- Limited browser support for older versions (targets modern browsers)

## 📸 Screenshots Guide

For the Quality Evidence PDF, capture these views:

1. **Home Page:** Desktop and mobile views showing hero section and navigation
2. **Navigation:** Mobile menu expanded state
3. **Registration Form:** 
   - Invalid state with error messages
   - Valid state with success indicators
   - Confirmation message after submission
4. **Contact Form:** Submission feedback (success message)
5. **Interactive Feature:** Program filter or details toggle in action

## 🙏 Credits

### Assets
- Bootstrap 5.3.2 - MIT License
- Icons: Unicode emoji characters (no attribution required)
- SVG Graphics: Placeholder paths (to be replaced with actual images)

### Fonts
- System font stack (no external fonts required)

### Inspiration
- Modern university websites
- Bootstrap documentation and examples

## 📝 License

This project is created for educational purposes as part of a midterm examination.

## 👤 Author

**[Your Name]**  
**Student ID:** [Your ID]  
**Course:** Web Development  
**Date:** October 2025

---

**Note:** Replace placeholder SVG paths with actual images before final submission. Ensure all links are tested and the site is fully functional on GitHub Pages.