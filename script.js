const form = document.getElementById('qrForm');
const urlInput = document.getElementById('urlInput');
const qrResult = document.getElementById('qrResult');
const qrImage = document.getElementById('qrImage');
const downloadLink = document.getElementById('downloadLink');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const url = urlInput.value.trim();

    if (url) {
        // Generate the QR code using the QRCode library
        QRCode.toDataURL(url, { errorCorrectionLevel: 'H' }, function (err, qrCodeUrl) {
            if (err) {
                console.error('Error generating QR Code:', err);
                alert('Failed to generate QR Code. Please try again.');
                return;
            }

            // Display the QR code image
            qrImage.src = qrCodeUrl;

            // Update the download link with the QR code URL
            downloadLink.href = qrCodeUrl;
            downloadLink.download = 'qr_code.png';

            // Show the QR result section
            qrResult.style.display = 'block';
        });
    } else {
        alert('Please enter a valid URL.');
    }
});

function createStar() {
    const star = document.createElement('div');
    star.classList.add('stars');

    // Randomize position, size, opacity, and animation duration
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.opacity = `${Math.random() * 0.8 + 0.2}`;

    // Set random size (between 2px and 8px)
    const size = Math.random() * 6 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    document.body.appendChild(star);

    // Remove the star after 5 seconds
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Create a new star every 100 milliseconds
setInterval(createStar, 100);