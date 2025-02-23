function typeEffect(element, texts, typeSpeed, backSpeed, loop) {
    let i = 0;
    let j = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[j];
        element.innerHTML = currentText.substring(0, i);

        if (!isDeleting && i++ === currentText.length) {
            if (loop) isDeleting = true;
        } else if (isDeleting && i-- === 0) {
            isDeleting = false;
            j = (j + 1) % texts.length;
            if (!loop && j === 0) return;
        }

        setTimeout(type, isDeleting ? backSpeed : typeSpeed);
    }

    type();
}


// Map in in contact secction
// Usage example:
const element = document.getElementById('yourElementId');
typeEffect(element, ['Full-Stack Developer.','Python Developer.'], 150, 40, true);


// leaflet
var map = L.map('map').setView([10.77293447237681, 78.6867141852845], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([10.77293447237681, 78.6867141852845]).addTo(map);

marker.bindPopup("<b>Hi There!</b><br>contact me.").openPopup();

var circle = L.circle([10.77293447237681, 78.6867141852845], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon(
    [10.77293447237681, 78.6867141852845],
    [10.77293447237681, 78.6867141852845],
    [10.77293447237681, 78.6867141852845]
    
).addTo(map);


// download resume
function downloadResume() {
    
    const link = document.createElement('a');

    // 2️⃣ Set the 'href' attribute to the resume file path
    link.href = 'assets/resume/my_resume.pdf'; // Change this to your actual file path

    // 3️⃣ Set the 'download' attribute to specify the downloaded file name
    link.download = 'My_Resume.pdf'; // Change this to your preferred file name

    // 4️⃣ Append the link to the document body (not necessary, but safer)
    document.body.appendChild(link);

    // 5️⃣ Programmatically click the link to trigger the download
    link.click();

    // 6️⃣ Remove the link element after the download starts
    document.body.removeChild(link);
}

