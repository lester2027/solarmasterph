// Home section *background
var slideImg = document.getElementById("slideImg");
var Image = new Array (
    "Image/backgroundforhome.jpg",
    "Image/backgroundforhome2.jpg",
    "Image/backgroundforhome3.jpg",
    "Image/backgroundforhome4.jpg" 
);

var len = Image.length;
var i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = Image[i];
    i++;
    setTimeout(slider, 5000);
}
// Home section *background until here...


// Wacth video
document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('playVideo');
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById('myVideo');

    playBtn.addEventListener('click', function() {
        videoContainer.classList.add('active');
        video.play();
    });

    // Close video when clicking outside
    videoContainer.addEventListener('click', function(e) {
        if (e.target === videoContainer) {
            videoContainer.classList.remove('active');
            video.pause();
        }
    });
});
// Watch video until here...

// Home content animation pop-out
function handleScrollAnimation() {
    const homeContent = document.querySelector('.home-content');
    
    // Add animation when page loads
    window.addEventListener('load', () => {
        homeContent.classList.add('active');
    });

    // Add animation when scrolling near the section
    window.addEventListener('scroll', () => {
        const homeSection = document.querySelector('.home');
        const homeSectionPosition = homeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if(homeSectionPosition < screenPosition) {
            homeContent.classList.add('active');
        }
    });
}
// Call the function
handleScrollAnimation();
// Home content animation pop-out until here...