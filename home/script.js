// Get Elements From DOM
const urlInput = document.getElementById('urlInput');
const linkList = document.getElementById('linkList');
const addButton = document.getElementById('addButton');
const importButton = document.getElementById('importButton');
const exportButton = document.getElementById('exportButton');

// Events
addButton.addEventListener('click', function(){

    // Check Value of urlInput
    if(urlInput.value.includes('https://') && urlInput.value.length > 8){

        // Create Element
        var element = document.createElement('p');
        element.innerHTML = urlInput.value;
        element.classList.add('link');

        // Open Link On Click
        element.addEventListener('click', function(){
            window.open(element.innerHTML);
        })

        // Append Element
        linkList.appendChild(element);

    } else {

        window.alert('Invalid URL');

    }

})