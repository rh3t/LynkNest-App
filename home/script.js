// Get Elements From DOM
const urlInput = document.getElementById('urlInput');
const linkList = document.getElementById('linkList');
const addButton = document.getElementById('addButton');
const fileInput = document.getElementById('fileInput');
const importButton = document.getElementById('importButton');
const exportButton = document.getElementById('exportButton');

// File Processing
fileInput.addEventListener('change', (event) => {
    
    // Assign File To Variable
    var importItem = event.target.files[0];
    console.log(`[DEBUG] Located File: ${importItem.name}`);

    // Parse Data
    var reader = new FileReader();
    reader.onload = function(event) {
        var fileContent = event.target.result;
        try {
            var jsonData = JSON.parse(fileContent);
            console.log(`[DEBUG] Parsed JSON Data:`, jsonData);

            // Mount Each Link
            jsonData.forEach(element => {
                urlInput.innerHTML = element;
                addButton.click();
            });
            
            // Clean Mess
            urlInput.innerHTML = null;
            console.log(`[DEBUG] Successfully Loaded Content.`)
            window.alert('Successfully Loaded Data.')

        } catch (error) {
            window.alert(`Unable to parse file as valid JSON. Resubmit the file and try again.`);
            console.error(`[ERROR] Unable to parse file as JSON:`, error);
        }
    };

    // Read file as text
    reader.readAsText(importItem);

})

// Add Button
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

        // Tag User
        window.alert('Invalid URL');

    }

})

// Import Button
importButton.addEventListener('click', () => {
    fileInput.click();
})

// Export Button
exportButton.addEventListener('click', () => {

})