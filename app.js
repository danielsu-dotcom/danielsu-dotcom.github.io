function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        
        dropbtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 812) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
});

document.addEventListener('click', function (event) {
    const mobileMenu = document.querySelector(".mobile-menu");
    const hamburger = document.querySelector(".hamburger");

    if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove("active");
    }
});

function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        message : document.getElementById("message").value
    }

    const button = document.querySelector('.contact-button');
    button.textContent = 'Sending...';
    button.disabled = true;

    emailjs.send("service_ru22am2", "template_bf6e6uk", params)
        .then(() => {
            alert('Thank you! Your message has been sent.');
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Error:", error);
            alert('Oops! Something went wrong. Please try again.');
        })
        .finally(() => {
            button.textContent = 'Send Message';
            button.disabled = false;
        });
}

function sendeMail(){
    let params = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        address : document.getElementById("address").value,
        message : document.getElementById("message").value
    }

    const button = document.querySelector('.contact-button');
    button.textContent = 'Sending...';
    button.disabled = true;

    emailjs.send("service_ru22am2", "template_bf6e6uk", params)
        .then(() => {
            alert('Thank you! Your message has been sent.');
            document.getElementById("form").reset();
        })
        .catch((error) => {
            console.error("Error:", error);
            alert('Oops! Something went wrong. Please try again.');
        })
        .finally(() => {
            button.textContent = 'Send Message';
            button.disabled = false;
        });
}

// Two-stage quote form logic
(function initTwoStageForm() {
    const stage1 = document.getElementById('stage-1');
    if (!stage1) return;

    const stage2 = document.getElementById('stage-2');
    const nextBtn = document.getElementById('next-btn');
    const backBtn = document.getElementById('back-btn');
    const stage1Error = document.getElementById('stage1-error');
    const stage2Error = document.getElementById('stage2-error');
    const servicesInput = document.getElementById('selected-services-input');
    const addressInput = document.getElementById('address-input');

    function updateServicesInput() {
        const selected = Array.from(document.querySelectorAll('.service-card.active'))
            .map(c => c.dataset.service);
        servicesInput.value = selected.join(', ');
    }

    function fadeOut(el, cb) {
        el.style.transition = 'opacity 0.22s ease';
        el.style.opacity = '0';
        setTimeout(function () {
            el.style.display = 'none';
            el.style.opacity = '';
            el.style.transition = '';
            if (cb) cb();
        }, 230);
    }

    function fadeIn(el) {
        el.style.display = 'block';
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.22s ease';
        setTimeout(function () { el.style.opacity = '1'; }, 10);
        setTimeout(function () { el.style.opacity = ''; el.style.transition = ''; }, 240);
    }

    document.querySelectorAll('.service-card').forEach(function (card) {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
            updateServicesInput();
        });
    });

    nextBtn.addEventListener('click', function () {
        const selected = document.querySelectorAll('.service-card.active');
        const address = addressInput ? addressInput.value.trim() : '';

        if (selected.length === 0 && !address) {
            stage1Error.textContent = 'Please select at least one service and enter your property address.';
            return;
        }
        if (selected.length === 0) {
            stage1Error.textContent = 'Please select at least one service.';
            return;
        }
        if (!address) {
            stage1Error.textContent = 'Please enter your property address.';
            return;
        }

        stage1Error.textContent = '';
        fadeOut(stage1, function () { fadeIn(stage2); });
    });

    backBtn.addEventListener('click', function () {
        stage2Error.textContent = '';
        fadeOut(stage2, function () { fadeIn(stage1); });
    });

    const form = stage1.closest('form');
    const submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', function () {
        const nameInput = form.querySelector('[name="name"]');
        const phoneInput = form.querySelector('[name="phone"]');

        if (!nameInput.value.trim()) {
            stage2Error.textContent = 'Please enter your name.';
            return;
        }
        if (!phoneInput.value.trim()) {
            stage2Error.textContent = 'Please enter your phone number.';
            return;
        }

        stage2Error.textContent = '';
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        var services = servicesInput.value;
        var message = form.querySelector('[name="message"]').value;
        if (services) message = 'Services: ' + services + (message ? '\n\n' + message : '');

        var params = {
            name: nameInput.value,
            phone: phoneInput.value,
            email: form.querySelector('[name="email"]').value,
            address: addressInput ? addressInput.value : '',
            message: message
        };

        emailjs.send('service_ru22am2', 'template_bf6e6uk', params)
            .then(function () {
                alert("Thank you! We'll be in touch soon.");
                form.reset();
                document.querySelectorAll('.service-card').forEach(function (c) {
                    c.classList.remove('active');
                });
                servicesInput.value = '';
                fadeOut(stage2, function () { fadeIn(stage1); });
            })
            .catch(function (error) {
                console.error('EmailJS error:', error);
                stage2Error.textContent = 'Something went wrong. Please call us at (778) 512-8078.';
            })
            .finally(function () {
                submitBtn.textContent = 'Get My Free Quote';
                submitBtn.disabled = false;
            });
    });
})();

// Gallery Lightbox Functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" id="modal-image">
    `;
    document.body.appendChild(modal);
    
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');
    
    // Open modal when image is clicked
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });
    
    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close when clicking outside image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});