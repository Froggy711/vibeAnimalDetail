// Authentication System using LocalStorage
// Note: This is for demonstration purposes only. Not secure for production use.

// Check if user is already logged in
function checkAuthStatus() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser && window.location.pathname.includes('login.html')) {
        window.location.href = 'index.html';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuthStatus();
    initializeForms();
});

// Initialize form handlers
function initializeForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTabBtn = document.getElementById('loginTabBtn');
    const registerTabBtn = document.getElementById('registerTabBtn');

    // Tab switching
    loginTabBtn.addEventListener('click', () => switchToLogin());
    registerTabBtn.addEventListener('click', () => switchToRegister());

    // Password toggle buttons
    setupPasswordToggle('toggleLoginPassword', 'loginPassword');
    setupPasswordToggle('toggleRegisterPassword', 'registerPassword');
    setupPasswordToggle('toggleConfirmPassword', 'registerConfirmPassword');

    // Form submissions
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);

    // Real-time validation
    document.getElementById('loginEmail')?.addEventListener('blur', validateLoginEmail);
    document.getElementById('registerEmail')?.addEventListener('blur', validateRegisterEmail);
    document.getElementById('registerPassword')?.addEventListener('input', validateRegisterPassword);
    document.getElementById('registerConfirmPassword')?.addEventListener('input', validateConfirmPassword);
}

// Switch to login form
function switchToLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginTabBtn').classList.add('bg-gradient-to-r', 'from-secondary', 'to-accent', 'text-white');
    document.getElementById('loginTabBtn').classList.remove('text-gray-400');
    document.getElementById('registerTabBtn').classList.remove('bg-gradient-to-r', 'from-secondary', 'to-accent', 'text-white');
    document.getElementById('registerTabBtn').classList.add('text-gray-400');
}

// Switch to register form
function switchToRegister() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('registerTabBtn').classList.add('bg-gradient-to-r', 'from-secondary', 'to-accent', 'text-white');
    document.getElementById('registerTabBtn').classList.remove('text-gray-400');
    document.getElementById('loginTabBtn').classList.remove('bg-gradient-to-r', 'from-secondary', 'to-accent', 'text-white');
    document.getElementById('loginTabBtn').classList.add('text-gray-400');
}

// Password toggle functionality
function setupPasswordToggle(buttonId, inputId) {
    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    if (button && input) {
        button.addEventListener('click', () => {
            const icon = button.querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }
}

// Validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateLoginEmail() {
    const email = document.getElementById('loginEmail').value;
    const errorDiv = document.getElementById('loginEmailError');

    if (!email) {
        showError(errorDiv, 'กรุณากรอกอีเมล');
        return false;
    }

    if (!validateEmail(email)) {
        showError(errorDiv, 'รูปแบบอีเมลไม่ถูกต้อง');
        return false;
    }

    hideError(errorDiv);
    return true;
}

function validateRegisterEmail() {
    const email = document.getElementById('registerEmail').value;
    const errorDiv = document.getElementById('registerEmailError');

    if (!email) {
        showError(errorDiv, 'กรุณากรอกอีเมล');
        return false;
    }

    if (!validateEmail(email)) {
        showError(errorDiv, 'รูปแบบอีเมลไม่ถูกต้อง');
        return false;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(user => user.email === email)) {
        showError(errorDiv, 'อีเมลนี้ถูกใช้งานแล้ว');
        return false;
    }

    hideError(errorDiv);
    return true;
}

function validateRegisterPassword() {
    const password = document.getElementById('registerPassword').value;
    const errorDiv = document.getElementById('registerPasswordError');

    if (!password) {
        showError(errorDiv, 'กรุณากรอกรหัสผ่าน');
        return false;
    }

    if (password.length < 6) {
        showError(errorDiv, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร');
        return false;
    }

    hideError(errorDiv);
    return true;
}

function validateConfirmPassword() {
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const errorDiv = document.getElementById('registerConfirmPasswordError');

    if (!confirmPassword) {
        showError(errorDiv, 'กรุณายืนยันรหัสผ่าน');
        return false;
    }

    if (password !== confirmPassword) {
        showError(errorDiv, 'รหัสผ่านไม่ตรงกัน');
        return false;
    }

    hideError(errorDiv);
    return true;
}

function showError(element, message) {
    element.textContent = message;
    element.classList.remove('hidden');
}

function hideError(element) {
    element.textContent = '';
    element.classList.add('hidden');
}

function showMessage(elementId, message, isSuccess = false) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.remove('hidden');
    element.className = isSuccess ? 'success-message' : 'error-message';
}

// Handle login
function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Validate
    if (!validateLoginEmail()) {
        return;
    }

    if (!password) {
        showMessage('loginMessage', 'กรุณากรอกรหัสผ่าน', false);
        return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find user
    const user = users.find(u => u.email === email && u.password === btoa(password));

    if (!user) {
        showMessage('loginMessage', 'อีเมลหรือรหัสผ่านไม่ถูกต้อง', false);
        return;
    }

    // Login successful
    const userData = {
        name: user.name,
        email: user.email,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem('currentUser', JSON.stringify(userData));

    if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
    }

    showMessage('loginMessage', 'เข้าสู่ระบบสำเร็จ! กำลังนำคุณไปยังหน้าหลัก...', true);

    // Redirect after 1 second
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Handle registration
function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Validate all fields
    const isNameValid = name.trim().length > 0;
    const isEmailValid = validateRegisterEmail();
    const isPasswordValid = validateRegisterPassword();
    const isConfirmValid = validateConfirmPassword();

    if (!isNameValid) {
        showError(document.getElementById('registerNameError'), 'กรุณากรอกชื่อผู้ใช้');
        return;
    }

    if (!isEmailValid || !isPasswordValid || !isConfirmValid) {
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Create new user
    const newUser = {
        name: name,
        email: email,
        password: btoa(password), // Basic encoding (NOT secure for production!)
        registeredAt: new Date().toISOString()
    };

    // Add to users array
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto login
    const userData = {
        name: newUser.name,
        email: newUser.email,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem('currentUser', JSON.stringify(userData));

    showMessage('registerMessage', 'สมัครสมาชิกสำเร็จ! กำลังนำคุณไปยังหน้าหลัก...', true);

    // Redirect after 1 second
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Logout function (to be called from other pages)
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Get current user (to be called from other pages)
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

// Export functions for use in other pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { logout, getCurrentUser };
}
