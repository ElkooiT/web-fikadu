//the menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
    // Show alert when menu is toggled
    if (navList.classList.contains('active')) {
        alert('Menu opened!');
    }
});

// for dark mode
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;
const toggleIcon = document.querySelector('.toggle-icon');

// to check for saved preference( youtube guy said so)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.textContent = '☀️';
} else {
    toggleIcon.textContent = '🌙';
}

//the dark mode toggle
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    //change the mode based on current theme
    if (body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
        alert('Dark mode enabled!');
    } else {
        toggleIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
        alert('Light mode enabled!');
    }
});

//form validation: 
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const formStatus = document.getElementById('formStatus');

//error messages
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

//email form validatioon: reference youtube
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

//error message function
function showError(input, errorElement, message) {
    input.style.borderColor = '#ff3860';
    errorElement.textContent = message;
    return false;
}

//clear error message function
function clearError(input, errorElement) {
    input.style.borderColor = '';
    errorElement.textContent = '';
}

//email validation: youtube
emailInput.addEventListener('input', function() {
    if (this.value && !validateEmail(this.value)) {
        showError(this, emailError, 'Please enter a valid email address');
    } else {
        clearError(this, emailError);
    }
});

//handling form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;
    
    //make sure error is cleared. 
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(subjectInput, subjectError);
    clearError(messageInput, messageError);
    
    //name validation
    if (!nameInput.value.trim()) {
        isValid = showError(nameInput, nameError, 'Name is required');
    }
    
    //email validation
    if (!emailInput.value.trim()) {
        isValid = showError(emailInput, emailError, 'Email is required');
    } else if (!validateEmail(emailInput.value)) {
        isValid = showError(emailInput, emailError, 'Please enter a valid email address');
    }
    
(!subjectInput.value.trim()); {
        isValid = showError(subjectInput, subjectError, 'Subject is required');
    }
    
    //dont accept empty message
    if (!messageInput.value.trim()) {
        isValid = showError(messageInput, messageError, 'Message is required');
    }
    
    //valid form = submit
    if (isValid) {
        //show submited successfully message
        formStatus.textContent = 'Form submitted successfully! Thank you for your message.';
        formStatus.className = 'form-status success';
        
        //clearing form
        contactForm.reset();
        
        // Show alert
        alert('Form submitted successfully!');
        
        //we dont want the alert to stay on always, lets get rid of it automatically after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
});

// Make project links interactive
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        //this isnt working
        if (this.getAttribute('href') === '#') {
            event.preventDefault();
            alert('Project details would open here!');
        } else {
            alert('Opening project link: ' + this.getAttribute('href'));
        }
    });
});

//when u send me a message takes ur name and say hello "ur name"
const nameInput2 = document.getElementById('name');
const heroTitle = document.querySelector('.hero h2');
const originalHeroText = heroTitle.innerHTML;

nameInput2.addEventListener('input', function() {
    if (this.value.trim()) {
        heroTitle.innerHTML = `Hello, ${this.value}! I'm <span class="highlight">Fikadu</span>`;
    } else {
        heroTitle.innerHTML = originalHeroText;
    }
});

//When u touch the skill bar it alerts the percentage
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(bar => {
    bar.addEventListener('click', function() {
        const skillName = this.previousElementSibling.textContent;
        const skillLevel = this.querySelector('.skill-level').style.width;
        alert(`${skillName}: ${skillLevel}`);
    });
});
//used youtube, past works, and used a mentor for this. and used ai to perfect the codes.
