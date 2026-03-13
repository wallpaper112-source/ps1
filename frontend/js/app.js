// Function to handle file upload
function uploadImage(file) {
    const formData = new FormData();
    formData.append('image', file);

    fetch('https://your-backend-api/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
}

// Function to handle image preview
function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = 'Image Preview';
        document.getElementById('image-preview').appendChild(img);
    };

    reader.readAsDataURL(file);
}

// Event listener for file input
document.getElementById('image-upload').addEventListener('change', function(event) {
    previewImage(event);
    uploadImage(event.target.files[0]);
});