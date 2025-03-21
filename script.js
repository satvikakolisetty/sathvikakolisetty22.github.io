document.addEventListener('DOMContentLoaded', () => {
    // Typed.js Animation
    const typedTextElement = document.getElementById('typed-text');
    if (typeof Typed !== 'undefined' && typedTextElement) {
        new Typed('#typed-text', {
            strings: ['Cloud Data Pipelines', 'Real-Time Streaming', 'Data Lakes', 'AI-Driven Analytics', 'GCP Solutions'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        });
    } else {
        console.error('Typed.js not loaded or element not found');
        if (typedTextElement) {
            typedTextElement.textContent = 'AWS & GCP';
        }
    }

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') 
                ? '<i class="fas fa-sun"></i>' 
                : '<i class="fas fa-moon"></i>';
        });
    }

    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Debug Button Clicks
    const resumeBtn = document.getElementById('resume-btn');
    const emailBtn = document.getElementById('email-btn');

    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            console.log('Resume button clicked from JavaScript');
            // Ensure the default behavior (download) is not prevented
        });
    }

    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            console.log('Email Me button clicked from JavaScript');
            // Ensure the default behavior (mailto) is not prevented
        });
    }

    // Particle Animation
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particlesArray = [];
        const numberOfParticles = 80;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.02;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = 'rgba(200, 210, 230, 0.6)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
                if (particlesArray[i].size <= 0.2) {
                    particlesArray.splice(i, 1);
                    i--;
                    particlesArray.push(new Particle());
                }
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    } else {
        console.error('Canvas element not found');
    }

    // Scroll Animations for Sections
    const animateSections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.animate-stagger').forEach((item, index) => {
                    item.style.transitionDelay = `${index * 0.2}s`;
                    item.classList.add('visible');
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    animateSections.forEach(section => observer.observe(section));

    // Active Nav Indicator
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => navObserver.observe(section));

    // Carousel Animation with Pause on Hover
    // Carousel Animation (Manual Navigation Only)
const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    items.forEach((item, idx) => {
        if (idx === currentIndex) {
            setTimeout(() => item.classList.add('visible'), 100);
        } else {
            item.classList.remove('visible');
        }
    });
}

if (nextBtn && prevBtn && carousel) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    updateCarousel();
}

    // Modal Functionality
    const modals = document.querySelectorAll('.modal');
    const modalLinks = document.querySelectorAll('.project-link');
    const closeButtons = document.querySelectorAll('.close');

    modalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Form Validation with Styled Response and Google Form Submission
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formResponse = document.getElementById('form-response');

    function showError(element, message) {
        if (element) {
            element.textContent = message;
            element.style.opacity = '1';
        }
    }

    function hideError(element) {
        if (element) {
            element.style.opacity = '0';
        }
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const name = nameInput.value.trim();
            if (!name || name.length < 2) {
                showError(nameError, 'Name must be at least 2 characters.');
                isValid = false;
            } else {
                hideError(nameError);
            }

            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                showError(emailError, 'Please enter a valid email.');
                isValid = false;
            } else {
                hideError(emailError);
            }

            const message = messageInput.value.trim();
            if (!message || message.length < 10) {
                showError(messageError, 'Message must be at least 10 characters.');
                isValid = false;
            } else {
                hideError(messageError);
            }
        

            if (isValid) {
                const formData = new FormData();
                formData.append('entry.662737561', name);   // Replace with actual "Name" entry ID
                formData.append('entry.1086252666', email);  // Replace with actual "Email" entry ID
                formData.append('entry.1557561086', message); // Replace with actual "Message" entry ID

                fetch('https://docs.google.com/forms/d/e/1FAIpQLSf3IvVx2d_tG26UqDkkasgOctxxOt4t0hznU6Yc-fbutpf_Mw/formResponse', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors'
                }).then(() => {
                    if (formResponse) {
                        formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
                        formResponse.style.display = 'block';
                        form.reset();
                        setTimeout(() => {
                            formResponse.style.display = 'none';
                        }, 5000);
                    }
                }).catch(error => {
                    console.error('Form submission error:', error);
                    if (formResponse) {
                        formResponse.textContent = 'Oops! Something went wrong. Please try again.';
                        formResponse.style.display = 'block';
                        setTimeout(() => {
                            formResponse.style.display = 'none';
                        }, 5000);
                    }
                });
            }
        });

        [nameInput, emailInput, messageInput].forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    const errorElement = document.getElementById(`${input.id}-error`);
                    if (input.value.trim()) {
                        hideError(errorElement);
                    }
                });
            }
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});