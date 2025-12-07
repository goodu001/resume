// Main JavaScript file

// Dark mode toggle functionality
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
darkModeToggle.className = 'fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors z-50';
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');

document.body.appendChild(darkModeToggle);

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.classList.toggle('dark', currentTheme === 'dark');

// Update button icon based on current theme
function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    darkModeToggle.innerHTML = isDark
        ? '<span class="material-symbols-outlined">light_mode</span>'
        : '<span class="material-symbols-outlined">dark_mode</span>';
}

updateThemeIcon();

// Toggle theme on button click
darkModeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form submission handler (for demonstration)
document.querySelector('form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Show success message
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successMessage.textContent = 'Message sent successfully!';
    document.body.appendChild(successMessage);

    // Remove message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);

    // Reset form
    e.target.reset();
});

// Go to Top Button functionality
const goToTopBtn = document.getElementById('goToTopBtn');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile menu toggle (if needed in the future)
const mobileMenuBtn = document.createElement('button');
mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
mobileMenuBtn.className = 'md:hidden fixed top-4 right-4 p-2 text-gray-900 dark:text-white z-50';
mobileMenuBtn.setAttribute('aria-label', 'Toggle menu');

// Add mobile menu button to header (commented out for now, can be enabled if needed)
// document.querySelector('header').appendChild(mobileMenuBtn);

console.log('Portfolio website loaded successfully!');