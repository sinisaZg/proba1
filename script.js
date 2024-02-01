function openImage(imageUrl) {
    document.getElementById('largerImage').src = imageUrl;
    document.getElementById('overlay').style.display = 'block';
    document.getElementsByClassName('larger-image')[0].style.display = 'block';
    document.getElementsByClassName('close-button')[0].style.display = 'block';
    document.getElementsByClassName('larger-image-wrapper')[0].style.display = 'block';
    largerImage.src = imageUrl;



}

// Function to close the larger image
function closeImage() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementsByClassName('close-button')[0].style.display = 'none';
    document.getElementsByClassName('larger-image-wrapper')[0].style.display = 'none';


}