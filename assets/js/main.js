// ============================================
// Engineering College - Main JavaScript
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // INTERACTIVE FEATURE #1: Program Filter
    // ============================================
    const filterButtons = document.querySelectorAll('[data-filter]');
    const programCards = document.querySelectorAll('.program-card');
    
    if (filterButtons.length > 0 && programCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter programs
                programCards.forEach(card => {
                    const programType = card.getAttribute('data-program');
                    
                    if (filter === 'all' || programType.includes(filter)) {
                        card.style.display = '';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ============================================
    // INTERACTIVE FEATURE #2: Program Details Toggle
    // ============================================
    const toggleButtons = document.querySelectorAll('.toggle-details');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('aria-controls');
            const target = document.getElementById(targetId);
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (target) {
                if (isExpanded) {
                    target.classList.remove('show');
                    this.setAttribute('aria-expanded', 'false');
                } else {
                    target.classList.add('show');
                    this.setAttribute('aria-expanded', 'true');
                }
            }
        });
    });

    // ============================================
    // CONTACT FORM VALIDATION & SUBMISSION
    // ============================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Validate anti-spam
            const antispamInput = document.getElementById('antispam');
            if (antispamInput && antispamInput.value !== '8') {
                antispamInput.setCustomValidity('Incorrect answer');
            } else if (antispamInput) {
                antispamInput.setCustomValidity('');
            }

            // Check if form is valid
            if (contactForm.checkValidity()) {
                // Hide any previous messages
                document.getElementById('contactSuccess').classList.remove('d-none');
                document.getElementById('contactError').classList.add('d-none');
                
                // Scroll to success message
                document.getElementById('contactSuccess').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Reset form after short delay
                setTimeout(() => {
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                }, 2000);
            } else {
                // Show error message
                document.getElementById('contactError').classList.remove('d-none');
                document.getElementById('contactSuccess').classList.add('d-none');
            }

            contactForm.classList.add('was-validated');
        });

        // Clear custom validity on input
        const antispamInput = document.getElementById('antispam');
        if (antispamInput) {
            antispamInput.addEventListener('input', function() {
                this.setCustomValidity('');
            });
        }
    }

    // ============================================
    // REGISTRATION FORM VALIDATION & SUBMISSION
    // ============================================
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const emailInput = document.getElementById('email');
        
        // Real-time password matching validation
        function validatePasswordMatch() {
            if (confirmPasswordInput.value === '') {
                confirmPasswordInput.setCustomValidity('');
                return;
            }
            
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordInput.setCustomValidity('Passwords do not match');
                confirmPasswordInput.classList.add('is-invalid');
                confirmPasswordInput.classList.remove('is-valid');
            } else {
                confirmPasswordInput.setCustomValidity('');
                confirmPasswordInput.classList.remove('is-invalid');
                confirmPasswordInput.classList.add('is-valid');
            }
        }

        if (passwordInput && confirmPasswordInput) {
            passwordInput.addEventListener('input', validatePasswordMatch);
            confirmPasswordInput.addEventListener('input', validatePasswordMatch);
        }

        // Real-time validation for other fields
        const requiredInputs = registrationForm.querySelectorAll('input[required], select[required]');
        requiredInputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.checkValidity()) {
                    this.classList.add('is-valid');
                    this.classList.remove('is-invalid');
                } else {
                    this.classList.add('is-invalid');
                    this.classList.remove('is-valid');
                }
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
                    if (this.checkValidity()) {
                        this.classList.add('is-valid');
                        this.classList.remove('is-invalid');
                    } else {
                        this.classList.add('is-invalid');
                        this.classList.remove('is-valid');
                    }
                }
            });
        });

        // Radio button validation for study mode
        const studyModeRadios = document.querySelectorAll('input[name="studyMode"]');
        const studyModeError = document.getElementById('studyModeError');
        
        function validateStudyMode() {
            const isChecked = Array.from(studyModeRadios).some(radio => radio.checked);
            if (!isChecked && studyModeError) {
                studyModeError.style.display = 'block';
                return false;
            } else if (studyModeError) {
                studyModeError.style.display = 'none';
                return true;
            }
            return isChecked;
        }

        studyModeRadios.forEach(radio => {
            radio.addEventListener('change', validateStudyMode);
        });

        // Form submission
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();

            // Validate password match
            validatePasswordMatch();
            
            // Validate study mode
            const studyModeValid = validateStudyMode();

            // Check if form is valid
            if (registrationForm.checkValidity() && studyModeValid) {
                // Generate application ID
                const applicationId = 'APP-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
                
                // Get email for confirmation
                const email = emailInput.value;
                
                // Show success message
                document.getElementById('confirmEmail').textContent = email;
                document.getElementById('applicationId').textContent = applicationId;
                document.getElementById('registrationSuccess').classList.remove('d-none');
                document.getElementById('registrationError').classList.add('d-none');
                
                // Scroll to success message
                document.getElementById('registrationSuccess').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
                
                // Disable form after successful submission
                const formElements = registrationForm.elements;
                for (let i = 0; i < formElements.length; i++) {
                    formElements[i].disabled = true;
                }
                
                // Hide submit buttons
                registrationForm.querySelectorAll('button[type="submit"], button[type="reset"]').forEach(btn => {
                    btn.style.display = 'none';
                });
                
            } else {
                // Show error message
                document.getElementById('registrationError').classList.remove('d-none');
                document.getElementById('registrationSuccess').classList.add('d-none');
                
                // Scroll to error
                document.getElementById('registrationError').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }

            registrationForm.classList.add('was-validated');
        });

        // Reset button handler
        const resetButton = registrationForm.querySelector('button[type="reset"]');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                setTimeout(() => {
                    registrationForm.classList.remove('was-validated');
                    registrationForm.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                        el.classList.remove('is-valid', 'is-invalid');
                    });
                    document.getElementById('registrationSuccess').classList.add('d-none');
                    document.getElementById('registrationError').classList.add('d-none');
                    if (studyModeError) {
                        studyModeError.style.display = 'none';
                    }
                }, 10);
            });
        }
    }

    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or if it's a Bootstrap toggle
            if (href === '#' || this.hasAttribute('data-bs-toggle')) {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
        
        lastScroll = currentScroll;
    });

    // ============================================
    // FORM INPUT ANIMATIONS
    // ============================================
    const formInputs = document.querySelectorAll('.form-control, .form-select');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // ============================================
    // ACCESSIBILITY: KEYBOARD NAVIGATION
    // ============================================
    // Ensure all interactive elements are keyboard accessible
    document.querySelectorAll('.card, .hover-lift').forEach(element => {
        if (element.querySelector('a')) {
            element.setAttribute('tabindex', '0');
            
            element.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const link = this.querySelector('a');
                    if (link) {
                        link.click();
                    }
                }
            });
        }
    });

    // ============================================
    // LOADING ANIMATION
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections for fade-in animation
    document.querySelectorAll('.card, section').forEach(element => {
        observer.observe(element);
    });

    // ============================================
    // EMAIL VALIDATION ENHANCEMENT
    // ============================================
    const emailInputs = document.querySelectorAll('input[type="email"]');
    
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailPattern.test(this.value)) {
                this.setCustomValidity('Please enter a valid email address');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                if (this.value) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            }
        });
    });

    // ============================================
    // PHONE NUMBER FORMATTING
    // ============================================
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Remove all non-numeric characters
            let value = this.value.replace(/\D/g, '');
            
            // Format as (XXX) XXX-XXXX
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = `(${value}`;
                } else if (value.length <= 6) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                } else {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                }
            }
            
            this.value = value;
        });
    });

    // ============================================
    // PREVENT MULTIPLE FORM SUBMISSIONS
    // ============================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn && this.checkValidity()) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Submitting...';
            }
        });
    });

    // ============================================
    // CONSOLE GREETING (Easter Egg)
    // ============================================
    console.log('%cWelcome to Engineering College! 🎓', 'color: #0d6efd; font-size: 20px; font-weight: bold;');
    console.log('%cInterested in our code? Check out our Computer Engineering program!', 'color: #6c757d; font-size: 14px;');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Generate random ID
function generateId(prefix = 'ID') {
    return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

// Format date
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
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