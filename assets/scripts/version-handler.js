// Init
document.addEventListener('DOMContentLoaded', function(){

    // Fetch Resources Relative To Location
    var manifestLocation;
    console.log(`[DEBUG] Location Path: ${window.location.pathname}`);
    if(window.location.pathname == '/'){
        manifestLocation = 'manifest.json';
    } else if (window.location.pathname == '/home/'){
        manifestLocation = '../manifest.json';
    }

    // Fetch Version
    fetch(manifestLocation).then(response => response.json()).then(data => {

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