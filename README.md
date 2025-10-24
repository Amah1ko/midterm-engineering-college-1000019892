# Engineering College - Static Multi-Page Website

## 📋 Project Overview

A comprehensive, responsive, and accessible static website for "Engineering College" - an educational institution offering various engineering programs. The website provides prospective students with information about programs, admissions, campus life, and includes functional registration and contact forms.

**Live URL:** `[Your GitHub Pages URL will go here]`

**Repository:** `[Your GitHub Repository URL will go here]`

---

## 🗺️ Page Map

### Main Pages (6 HTML Pages)

1. **Home (index.html)**
   - Hero section with call-to-action
   - Quick statistics
   - Featured programs preview
   - Why choose us section
   - Call-to-action section

2. **About & Programs (about.html)**
   - College mission and history
   - Core values
   - Comprehensive program listings (9 programs)
   - Interactive program filter (Bachelor's/Master's)
   - Accreditation information

3. **Admissions (admissions.html)**
   - Admissions overview
   - Step-by-step application process (accordion)
   - Detailed tuition and fees table
   - Admission requirements
   - Interactive FAQ section

4. **Student Life (student-life.html)**
   - Campus life overview
   - Student organizations and clubs (6 featured)
   - Campus news and events with category filter
   - Campus facilities showcase
   - Student testimonials

5. **Contact (contact.html)**
   - Contact information cards
   - Fully functional contact form with validation
   - Anti-spam verification
   - Campus map placeholder
   - Quick answers section

6. **Registration (registration.html)**
   - Advanced multi-section registration form
   - Real-time progress indicator
   - Comprehensive field validation
   - Password strength requirements
   - Success confirmation display

---

## ✨ Features Implemented

### Core Requirements

#### ✅ Multi-Page Structure
- 6 distinct HTML pages with consistent navigation
- Fixed top navigation bar on all pages
- Logical information architecture

#### ✅ Responsive Design
- Mobile-first approach
- Fully responsive layouts (320px - 1920px+)
- Collapsible navigation for mobile devices
- Optimized content display across all breakpoints

#### ✅ Forms with Advanced Validation

**Registration Form (Advanced):**
- Full name, email, phone validation
- Date of birth with age verification (minimum 15 years)
- Program selection dropdown
- Study mode radio buttons (Full-Time/Part-Time/Online)
- Intended intake date picker
- Password with strength requirements (8+ chars, uppercase, lowercase, number)
- Confirm password with match validation
- Terms & conditions checkbox (required)
- Scholarship interest (optional)
- Referral source (optional)
- Real-time inline validation
- Progress bar tracking completion
- Success confirmation with user details

**Contact Form (Basic):**
- Name, email, subject, message (all required)
- Anti-spam math challenge
- Real-time validation
- Success/error feedback messages
- Form reset with confirmation

#### ✅ Accessibility Features
- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- ARIA labels and roles
- Alt text for decorative elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Skip to main content link
- Form labels properly associated

#### ✅ UI/UX Quality
- Consistent color system and spacing scale
- Professional typography scale
- Smooth transitions and animations
- Hover/focus/active states
- Loading spinners for form submissions
- Clear visual hierarchy
- Realistic, professional copy
- Intuitive navigation

### Interactive JavaScript Features

#### 🎯 Feature #1: Program Filter System
**Location:** About & Programs page
**Description:** Dynamic filtering of engineering programs by degree level
- Filter buttons: All Programs, Bachelor's, Master's
- Smooth fade and slide animations
- Maintains active button state
- 9 total programs dynamically filtered

#### 🎯 Feature #2: Event Category Filter
**Location:** Student Life page  
**Description:** Filter campus events by category
- Filter options: All Events, Academic, Social, Sports
- Smooth scale animations on filter
- Visual feedback with active states
- 6 events showcased with filtering

#### 🎯 Bonus Feature #3: FAQ Accordion
**Location:** Admissions page
**Description:** Collapsible FAQ section
- Click to expand/collapse answers
- Auto-close other answers when opening new one
- Smooth transitions
- Toggle indicator (+ / −)

### Additional Interactive Enhancements
- Form validation with real-time feedback
- Progress bar for registration form
- Smooth scroll for anchor links
- Navbar shadow on scroll
- Card hover effects
- Toast notifications system
- Form reset confirmation dialogs
- Accordion for application steps

---

## 🛠️ Technologies Used

- **HTML5:** Semantic markup, forms, accessibility features
- **CSS3:** Custom properties, flexbox, grid, animations, transitions
- **Bootstrap 5.3.2:** Grid system, components, utilities
- **JavaScript (ES6+):** Form validation, filters, DOM manipulation, event handling
- **CDN Resources:** Bootstrap, no external dependencies

---

## 📁 File Structure

```
engineering-college/
│
├── index.html              # Home page
├── about.html              # About & Programs page
├── admissions.html         # Admissions information
├── student-life.html       # Student life & events
├── contact.html            # Contact form & info
├── registration.html       # Advanced registration form
│
├── css/
│   └── styles.css          # Main stylesheet
│
├── js/
│   └── main.js             # All JavaScript functionality
│
└── README.md               # This file
```

---

## 🎨 Design System

### Color Palette
- **Primary:** #2563eb (Blue)
- **Primary Dark:** #1e40af
- **Secondary:** #0ea5e9 (Sky Blue)
- **Accent:** #f59e0b (Amber)
- **Success:** #10b981 (Green)
- **Danger:** #ef4444 (Red)
- **Dark:** #1e293b
- **Light Background:** #f8fafc

### Typography
- **Font Family:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Base Size:** 16px
- **Line Height:** 1.6
- **Heading Weight:** 700 (Bold)

### Spacing Scale
- XS: 0.5rem (8px)
- SM: 1rem (16px)
- MD: 1.5rem (24px)
- LG: 2rem (32px)
- XL: 3rem (48px)
- 2XL: 4rem (64px)

---

## 🚀 Deployment Instructions

### GitHub Pages Deployment

1. **Create Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Engineering College website"
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/engineering-college.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages section
   - Select source: main branch
   - Save and wait for deployment
   - Your site will be live at: `https://YOUR-USERNAME.github.io/engineering-college/`

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/engineering-college.git
   cd engineering-college
   ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Access:**
   - Navigate to `http://localhost:8000`

---

## 🧪 Testing Checklist

### Responsiveness
- ✅ Mobile (320px - 480px)
- ✅ Tablet (481px - 768px)
- ✅ Desktop (769px - 1920px+)
- ✅ No horizontal scrolling
- ✅ Readable text at all sizes

### Forms
- ✅ All required fields validated
- ✅ Email format validation
- ✅ Phone number format validation
- ✅ Password strength requirements
- ✅ Password match validation
- ✅ Date of birth age check
- ✅ Anti-spam challenge works
- ✅ Success/error messages display
- ✅ Form reset confirmation

### Navigation
- ✅ All internal links work
- ✅ Active page highlighted
- ✅ Mobile menu collapses properly
- ✅ Smooth scrolling for anchors
- ✅ Skip to main content link

### Accessibility
- ✅ Keyboard navigation works
- ✅ Focus states visible
- ✅ Screen reader friendly
- ✅ Proper heading hierarchy
- ✅ Alt text present
- ✅ ARIA labels implemented
- ✅ Color contrast sufficient

### Interactive Features
- ✅ Program filter works smoothly
- ✅ Event filter functions properly
- ✅ FAQ accordion expands/collapses
- ✅ Forms validate in real-time
- ✅ Progress bar updates correctly
- ✅ Animations perform smoothly

---

## ⚠️ Known Limitations

1. **No Backend:** Forms simulate submission (no actual data storage)
2. **Static Content:** All content is hardcoded (no CMS)
3. **Image Placeholders:** Using emoji/gradient placeholders instead of actual images
4. **No Authentication:** Login/signup links are placeholders
5. **Limited Browser Support:** Optimized for modern browsers (Chrome, Firefox, Safari, Edge)
6. **No Search Functionality:** Site-wide search not implemented

---

## 📸 Screenshots

*Screenshots should be included in your PDF submission showing:*
1. Home page - Desktop and mobile views
2. Navigation - Mobile collapsed state
3. Registration form - Invalid state
4. Registration form - Valid state with success message
5. Contact form - Submission feedback
6. Program filter - In action
7. Event filter - Category selection

---

## 🎓 Credits & Attributions

### Resources Used
- **Bootstrap 5.3.2:** Framework (MIT License)
- **Icons:** Emoji characters (Unicode standard)
- **Fonts:** System fonts (no external fonts)
- **Images:** Gradient placeholders (original design)

### Development
- **Developer:** Amal Kurbanov
- **Project:** Midterm Project - Engineering College Website
- **Course:** Web Development
- **Date:** October 2025

---

## 📝 Future Enhancements

Potential improvements for future versions:
- Real backend integration with database
- User authentication system
- Content management system (CMS)
- Blog/news section with pagination
- Faculty directory with profiles
- Student portal dashboard
- Online payment integration
- Live chat support
- Multi-language support
- Advanced search functionality
- Email notification system
- Social media integration
- Analytics dashboard

---

## 📞 Support & Contact

For questions or issues:
- **Email:** info@engineeringcollege.edu
- **Phone:** +1 (555) 123-4567
- **GitHub Issues:** (https://github.com/YOUR-USERNAME/engineering-college/issues)

---

## 📄 License

This project is created for educational purposes as part of a web development course.

---

**Built with ❤️ by Amal Kurbanov**  
*Engineering College - Shaping Tomorrow's Innovators*