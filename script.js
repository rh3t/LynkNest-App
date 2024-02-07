// Fetch Elements from DOM
const keyInput = document.getElementById('keyInput');
const submitButton = document.getElementById('submitButton');

// Submit Button
submitButton.addEventListener('click', function(){

    // Fetch Button
    fetch('assets/private/pin.json').then(response => response.json()).then(data => {
    
        // Check for Password
        if(keyInput.value == data.pin){
            localStorage.setItem('loggedIn?', true);
            console.log('[DEBUG] User Logged In!');
            location.href = '/home';
        } else {
            location.reload();
        }

    });

});