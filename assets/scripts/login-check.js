// Check if User is Logged In
document.addEventListener('DOMContentLoaded', function(){

    // Find State
    console.log(`[DEBUG] Logged In?: ${localStorage.getItem('loggedIn?')}`);
    if(!localStorage.getItem('loggedIn?')){
        this.location.href = '/';
    }

});