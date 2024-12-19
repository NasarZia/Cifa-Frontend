// JavaScript to toggle menu
const menuIcon = document.getElementById('menu-icon');
const navtxt = document.querySelector('.navtxt');

menuIcon.addEventListener('click', () => {
    navtxt.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landingPage');
    const mainContent = document.getElementById('mainContent');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    // Prevent scrolling when landing page is active
    document.body.classList.add('blur-active', 'no-scroll');


    // Show Signin Modal
    loginBtn.addEventListener('click', () => {
        document.getElementById('signinModal').style.display = 'block';
    });

    // Show Signup Modal
    signupBtn.addEventListener('click', () => {
        document.getElementById('signupModal').style.display = 'block';
    });

    // Close Modals
    const closeModal = (modalId) => {
        document.getElementById(modalId).style.display = 'none';
    };
    document.getElementById('closeSignup').addEventListener('click', () => closeModal('signupModal'));
    document.getElementById('closeSignin').addEventListener('click', () => closeModal('signinModal'));
});


document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landingPage');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    // Show Signin Modal
    loginBtn.addEventListener('click', () => {
        landingPage.style.display = 'none';
        document.body.classList.remove('blur-active');
        document.getElementById('signinModal').style.display = 'block';
    });

    // Show Signup Modal
    signupBtn.addEventListener('click', () => {
        landingPage.style.display = 'none';
        document.body.classList.remove('blur-active');
        document.getElementById('signupModal').style.display = 'block';
    });

    // Add blur effect to main content
    document.body.classList.add('blur-active');
});

document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.getElementById('landingPage');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    // Prevent scrolling when the landing page is active
    document.body.classList.add('blur-active', 'no-scroll');

    // Show Signin Modal
    loginBtn.addEventListener('click', () => {
        landingPage.style.display = 'none';
        document.body.classList.remove('blur-active', 'no-scroll');
        document.getElementById('signinModal').style.display = 'block';
    });

    // Show Signup Modal
    signupBtn.addEventListener('click', () => {
        landingPage.style.display = 'none';
        document.body.classList.remove('blur-active', 'no-scroll');
        document.getElementById('signupModal').style.display = 'block';
    });
});




// Update placeholder with chosen file name
const fileInput = document.getElementById('patientImage');
const placeholder = document.querySelector('.file-upload-label .placeholder');

fileInput.addEventListener('change', (event) => {
    const fileName = event.target.files.length > 0 ? event.target.files[0].name : 'Upload Your Image';
    placeholder.textContent = fileName; // Change the placeholder text to the file name
});

document.addEventListener('DOMContentLoaded', function () {
    // Open Signup Modal
    document.getElementById('openSignup').onclick = function () {
        document.getElementById('signupModal').style.display = 'block';
    };

    // Close Signup Modal
    document.getElementById('closeSignup').onclick = function () {
        document.getElementById('signupModal').style.display = 'none';
    };

    // Open Signin Modal
    document.getElementById('openSignin').onclick = function () {
        document.getElementById('signinModal').style.display = 'block';
    };

    // Close Signin Modal
    document.getElementById('closeSignin').onclick = function () {
        document.getElementById('signinModal').style.display = 'none';
    };

    // Open Contact Modal
    document.getElementById('openContact').onclick = function () {
        document.getElementById('contactModal').style.display = 'block';
    };

    // Close Contact Modal
    document.getElementById('closeContact').onclick = function () {
        document.getElementById('contactModal').style.display = 'none';
    };

    // Close modals when clicking outside of them
    window.onclick = function (event) {
        if (event.target == document.getElementById('signupModal') || event.target == document.getElementById('signinModal') || event.target == document.getElementById('contactModal')) {
            //do Nothing
        }
        if(event.target == document.getElementById('contactModal')){
            event.target.style.display = 'none';
        }
    };
});



// Remove any existing submit button event listeners first
const submitButton = document.getElementById('submitButton');
const resultDiv = document.getElementById('predictionResult');

// Existing code remains the same...

submitButton.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the default button behavior

    const fileInput = document.getElementById('patientImage');
    const modelType = document.getElementById('modelType').value;

    if (!fileInput.files.length) {
        resultDiv.textContent = "Please upload an image.";
        resultDiv.style.display = 'block';
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch(`http://127.0.0.1:5000/predict/${modelType}`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        
        // Redirect to result.html with prediction and model type as parameters
        window.location.href = `result.html?prediction=${encodeURIComponent(data.prediction)}&model=${encodeURIComponent(modelType)}`;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.style.display = 'block';
    }
});
