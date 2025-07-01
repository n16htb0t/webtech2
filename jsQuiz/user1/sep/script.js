// Get DOM elements
const usernameInput = document.getElementById('username');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');
const usernameError = document.getElementById('usernameError');

// Validate username input
function validateUsername(username) {
    if (!username || username.trim() === '') {
        return 'Username cannot be empty';
    }
    if (username.length < 3) {
        return 'Username must be at least 3 characters long';
    }
    return null;
}

// Show validation error
function showValidationError(message) {
    usernameError.textContent = message;
    usernameError.style.display = 'block';
    usernameInput.style.borderColor = '#721c24';
}

// Hide validation error
function hideValidationError() {
    usernameError.style.display = 'none';
    usernameInput.style.borderColor = '#ddd';
}

// Show message
function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
}

// Hide message
function hideMessage() {
    messageDiv.style.display = 'none';
}

// Real-time validation
usernameInput.addEventListener('input', function() {
    const username = this.value;
    const error = validateUsername(username);
    
    if (error) {
        showValidationError(error);
    } else {
        hideValidationError();
    }
});

// Login function
async function loginUser(username) {
    try {
        // Show loading state
        loginBtn.disabled = true;
        loginBtn.textContent = 'Logging in...';
        showMessage('Checking user...', 'loading');

        // Fetch users from API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const users = await response.json();
        
        // Find user by username (case insensitive)
        const user = users.find(u => 
            u.username.toLowerCase() === username.toLowerCase()
        );

        if (user) {
            // User found - store in localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('loginTime', new Date().toISOString());
            
            showMessage(`Hello ${user.name}!`, 'success');
            
            // Optional: Clear the input
            usernameInput.value = '';
        } else {
            // User not found
            showMessage('We don\'t have this user', 'error');
        }

    } catch (error) {
        console.error('Login error:', error);
        showMessage('An error occurred while logging in. Please try again.', 'error');
    } finally {
        // Reset button state
        loginBtn.disabled = false;
        loginBtn.textContent = 'Log In';
    }
}

// Form submission handler
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = usernameInput.value.trim();
    const error = validateUsername(username);
    
    if (error) {
        showValidationError(error);
        return;
    }
    
    hideValidationError();
    hideMessage();
    loginUser(username);
});

// Optional: Check if user is already logged in on page load
window.addEventListener('load', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        try {
            const user = JSON.parse(currentUser);
            const loginTime = localStorage.getItem('loginTime');
            showMessage(`Welcome back, ${user.name}! (Last login: ${new Date(loginTime).toLocaleString()})`, 'success');
        } catch (error) {
            console.error('Error parsing stored user data:', error);
        }
    }
});

// Optional: Function to logout (clear localStorage)
function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('loginTime');
    hideMessage();
    usernameInput.value = '';
    console.log('User logged out');
}

// You can call logout() from browser console to test
window.logout = logout;
