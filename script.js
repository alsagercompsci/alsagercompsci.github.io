document.querySelector('#about1 img[src="images/python.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/python/';
});
document.querySelector('#about1 img[src="images/javascript.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/js/';
});
document.querySelector('#about1 img[src="images/htmlcss.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/html/';
});
document.querySelector('#about3 img[src="images/cs50p.png"]').addEventListener('click', function() {
    window.location.href = 'https://cs50.harvard.edu';
});
document.querySelector('#about3 img[src="images/highseas.png"]').addEventListener('click', function() {
    window.location.href = 'https://hackclub.com/';
});
document.querySelector('#about5 img[src="images/github.png"]').addEventListener('click', function() {
    window.location.href = 'https://guides.github.com/activities/hello-world/';
});

let videolist = ["https://youtu.be/4jQhnXJA7q4", "https://youtu.be/zlqLr4fa7CM"];
let videosrc = videolist[0];

function toggle_project_videos(){
    let projectVideosDiv = document.getElementById('projects_videos');
    if (projectVideosDiv.style.display === 'block') {
        projectVideosDiv.style.display = 'none';
    } else {
        projectVideosDiv.style.display = 'block';
    }
}
function hideImagesOnMobile() {
    if (window.innerWidth <= 768) { // Assuming mobile width is 768px or less
        let images = document.querySelectorAll('img');
        images.forEach(function(image) {
            image.style.display = 'none';
        });
    } else {
        let images = document.querySelectorAll('img');
        images.forEach(function(image) {
            image.style.display = 'block';
        });
    }
}

window.addEventListener('resize', hideImagesOnMobile);
window.addEventListener('load', hideImagesOnMobile);
