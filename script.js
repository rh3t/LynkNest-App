// Get Elements From DOM
const urlInput = document.getElementById('urlInput');
const linkList = document.getElementById('linkList');
const addButton = document.getElementById('addButton');
const fileInput = document.getElementById('fileInput');
const importButton = document.getElementById('importButton');
const exportButton = document.getElementById('exportButton');
const exportButtonLabel = document.getElementById('exportButtonLabel');

// Link List
var bulkLinkList = [];

// Print List Function
function printList(){
    console.log(bulkLinkList);
}

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
            console.log(`[DEBUG] Successfully Loaded Content.`);

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
    if(urlInput.value.includes('https://')){

        // Create Element
        var element = document.createElement('p');
        element.innerHTML = urlInput.value;
        element.classList.add('link');

        // Open Link On Click
        element.addEventListener('click', function(event){
            if(event.shiftKey){
                element.remove();
                // Remove the element from bulkLinkList
                var index = bulkLinkList.indexOf(element.innerHTML);
                if (index !== -1) {
                    bulkLinkList.splice(index, 1);
                    exportButtonLabel.innerHTML = `Export To File (${bulkLinkList.length})`;
                }
            } else {
                window.open(element.innerHTML);
            }
        })

        // Append Element
        linkList.appendChild(element);
        bulkLinkList.push(element.innerHTML);
        exportButtonLabel.innerHTML = `Export To File (${bulkLinkList.length}`;

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
    
    // Attempt Export
    try {

        // Create a Blob
        const blob = new Blob([JSON.stringify(bulkLinkList, null, 2)], { type: 'application/json' });

        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'export.json';
        downloadLink.click();

        // Clean up: revoke the URL object
        URL.revokeObjectURL(downloadLink.href);
        console.log('[DEBUG] Successfully Exported File!')

    } catch (error) {
        window.alert('Failed to export file.')
        console.log(`[ERROR] Failed to export file: ${error}`)
    }

})