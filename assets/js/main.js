// ===================================
// ENGINEERING COLLEGE - MAIN JAVASCRIPT
// ===================================

'use strict';

// ===================================
// 1. GLOBAL UTILITIES
// ===================================

/**
 * showAlert - small helper to render bootstrap-style alerts into a container.
 * If the target container doesn't exist it will silently warn and return.
 */
function showAlert(containerId, type, message) {
    const container = document.getElementById(containerId);
    if (!container) {
        // Not all pages include alert containers; don't throw.
        // Log so developers can add the container if desired.
        // console.warn(`showAlert: container not found: ${containerId}`);
        return;
    }

    // Create alert markup (Bootstrap 5-ish)
    container.innerHTML = `\n        <div class="alert alert-${type} alert-dismissible" role="alert">\n            ${message}\n            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n        </div>\n    `;

    const alertEl = container.querySelector('.alert');
    if (alertEl && typeof alertEl.classList.add === 'function') {
        alertEl.classList.add('show');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ===================================
// 2. PROGRAM FILTER (Interactive Feature #1)
// ===================================

const programFilterButtons = document.querySelectorAll('.filter-btn');
const programItems = document.querySelectorAll('.program-item');

if (programFilterButtons.length > 0) {
    programFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            programFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter programs with animation
            programItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===================================
// 3. EVENT FILTER (Interactive Feature #2)
// ===================================

const eventFilterButtons = document.querySelectorAll('.event-filter');
const eventItems = document.querySelectorAll('.event-item');

if (eventFilterButtons.length > 0) {
    eventFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            eventFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter events with animation
            eventItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===================================
// 4. FAQ ACCORDION (Interactive Feature - Bonus)
// ===================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const toggle = this.querySelector('.faq-toggle');

        // Defensive checks: some pages may not include faq markup exactly as expected
        if (!answer) return;

        // Toggle answer visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            if (toggle) toggle.textContent = '+';
        } else {
            // Close other answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            document.querySelectorAll('.faq-toggle').forEach(t => {
                t.textContent = '+';
            });

            // Open clicked answer
            answer.style.display = 'block';
            if (toggle) toggle.textContent = '−';
        }
    });
});

// ===================================
// 5. CONTACT FORM VALIDATION & SUBMISSION
// ===================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Generate random numbers for anti-spam
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;

    // Guarded DOM writes — the contact page may not include the small anti-spam spans on every build
    const num1El = document.getElementById('num1');
    const num2El = document.getElementById('num2');
    if (num1El) num1El.textContent = num1;
    if (num2El) num2El.textContent = num2;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous validation
        this.classList.remove('was-validated');
        
        // Check anti-spam answer (defensive)
        const antiSpamField = document.getElementById('antiSpam');
        const userAnswer = antiSpamField ? parseInt(antiSpamField.value, 10) : NaN;

        if (!antiSpamField || userAnswer !== correctAnswer) {
            if (antiSpamField) {
                antiSpamField.setCustomValidity('Incorrect answer');
                antiSpamField.classList.add('is-invalid');
            }
        } else {
            antiSpamField.setCustomValidity('');
            antiSpamField.classList.remove('is-invalid');
            antiSpamField.classList.add('is-valid');
        }
        
        // Validate form
        if (!this.checkValidity()) {
            e.stopPropagation();
            this.classList.add('was-validated');
            
            // Show error alert
            showAlert('contactAlert', 'danger', 'Please correct the errors in the form.');
            return;
        }
        
    // Show loading (defensive)
    const submitBtn = this.querySelector('button[type="submit"]');
    const spinner = submitBtn ? submitBtn.querySelector('.spinner-border') : null;
    const submitText = submitBtn ? submitBtn.querySelector('.submit-text') : null;

    if (submitText) submitText.textContent = 'Sending...';
    if (spinner) spinner.classList.remove('d-none');
    if (submitBtn) submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            // Success
            showAlert('contactAlert', 'success', '✓ Thank you! Your message has been sent successfully. We\'ll respond within 24 hours.');
            
            // Reset form
            this.reset();
            this.classList.remove('was-validated');

            // Reset button (defensive)
            if (submitText) submitText.textContent = 'Send Message';
            if (spinner) spinner.classList.add('d-none');
            if (submitBtn) submitBtn.disabled = false;

            // Scroll to alert if present
            const contactAlertEl = document.getElementById('contactAlert');
            if (contactAlertEl) contactAlertEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1500);
    });
    
    // Real-time validation
    const contactFormInputs = contactForm.querySelectorAll('input, select, textarea');
    contactFormInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('is-invalid') || this.classList.contains('is-valid')) {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            }
        });
    });
}

// ===================================
// 6. REGISTRATION FORM VALIDATION & SUBMISSION
// ===================================

const registrationForm = document.getElementById('registrationForm');

if (registrationForm) {
    const progressBar = document.getElementById('registrationProgress');
    
    // Update progress bar based on filled fields
    function updateProgress() {
        if (!progressBar) return;

        const totalFields = registrationForm.querySelectorAll('[required]').length;
        if (totalFields === 0) {
            // No required fields; set to 0
            progressBar.style.width = '0%';
            const span = progressBar.querySelector('span');
            if (span) span.textContent = '0%';
            return;
        }

        let filledFields = 0;

        registrationForm.querySelectorAll('[required]').forEach(field => {
            if (field.type === 'checkbox' || field.type === 'radio') {
                const name = field.name;
                const checkedInput = registrationForm.querySelector(`[name="${name}"]:checked`);
                if (checkedInput) filledFields++;
            } else if (field.value.trim() !== '' && field.checkValidity()) {
                filledFields++;
            }
        });

        const progress = Math.round((filledFields / totalFields) * 100);
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);
        const span = progressBar.querySelector('span');
        if (span) span.textContent = progress + '%';
    }
    
    // Real-time validation and progress update
    const registrationInputs = registrationForm.querySelectorAll('input, select');
    registrationInputs.forEach(input => {
        input.addEventListener('input', updateProgress);
        input.addEventListener('change', updateProgress);
        
        input.addEventListener('blur', function() {
            // Password match validation
            if (this.id === 'confirmPassword' || this.id === 'password') {
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                const confirmField = document.getElementById('confirmPassword');
                
                if (confirmPassword !== '' && password !== confirmPassword) {
                    confirmField.setCustomValidity('Passwords do not match');
                    confirmField.classList.add('is-invalid');
                    confirmField.classList.remove('is-valid');
                } else if (confirmPassword !== '' && password === confirmPassword) {
                    confirmField.setCustomValidity('');
                    confirmField.classList.remove('is-invalid');
                    confirmField.classList.add('is-valid');
                }
            }
            
            // Regular validation
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
    });
    
    // Form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous validation
        this.classList.remove('was-validated');
        
        // Password match validation
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const confirmField = document.getElementById('confirmPassword');
        
        if (password !== confirmPassword) {
            confirmField.setCustomValidity('Passwords do not match');
        } else {
            confirmField.setCustomValidity('');
        }
        
        // Validate form
        if (!this.checkValidity()) {
            e.stopPropagation();
            this.classList.add('was-validated');
            
            // Show error alert
            showAlert('registrationAlert', 'danger', '⚠ Please correct the errors in the form before submitting.');
            
            // Scroll to first error
            const firstError = this.querySelector('.is-invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Show loading (defensive)
        const submitBtn = document.getElementById('submitBtn');
        const spinner = submitBtn ? submitBtn.querySelector('.spinner-border') : null;
        const submitText = submitBtn ? submitBtn.querySelector('.submit-text') : null;

        if (submitBtn) submitBtn.disabled = true;
        if (spinner) spinner.classList.remove('d-none');
        if (submitText) submitText.classList.add('d-none');

        // Simulate form submission
        setTimeout(() => {
            // Hide loading (defensive)
            if (spinner) spinner.classList.add('d-none');
            if (submitText) submitText.classList.remove('d-none');
            if (submitBtn) submitBtn.disabled = false;

            // Show success alert
            showAlert('registrationAlert', 'success', '✅ Registration successful!');
        }, 2000);
    });
}
