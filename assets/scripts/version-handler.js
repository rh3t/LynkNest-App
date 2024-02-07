// Init
document.addEventListener('DOMContentLoaded', function(){

    // Fetch Version
    fetch('manifest.json').then(response => response.json()).then(data => {

        // Log Version
        console.log(`[DEBUG] App Version: ${data.build_type}-${data.build_version}`);

        // Create Element
        const versionElement = document.createElement('p');

        // Edit Element
        versionElement.classList.add('version-label');
        versionElement.innerHTML = `${data.build_type}-${data.build_version}`;

        // Append Element to DOM
        document.body.appendChild(versionElement);

    })

})