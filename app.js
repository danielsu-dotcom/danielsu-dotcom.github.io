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

    emailjs.send("service_ru22am2", "template_5q64mmo", params)
        .then(() => {
            alert('Thank you! Your message has been sent.');
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("Error:", error); // Log the error
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

    emailjs.send("service_ru22am2", "template_5q64mmo", params)
        .then(() => {
            alert('Thank you! Your message has been sent.');
            document.getElementById("form").reset();
        })
        .catch((error) => {
            console.error("Error:", error); // Log the error
            alert('Oops! Something went wrong. Please try again.');
        })
        .finally(() => {
            button.textContent = 'Send Message';
            button.disabled = false;
        });
}

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