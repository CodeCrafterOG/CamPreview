const video = document.getElementById('video');

async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
    } catch (error) {
        console.error('Error accessing camera:', error);
    }
}

startCamera();