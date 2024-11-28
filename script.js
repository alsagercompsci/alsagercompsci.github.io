document.querySelector('#about_alternative img[src="images/python.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/python/';
});
document.querySelector('#about_alternative img[src="images/javascript.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/js/';
});
document.querySelector('#about_alternative img[src="images/htmlcss.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/html/';
});
document.querySelector('#about_alternative img[src="images/cs50p.png"]').addEventListener('click', function() {
    window.location.href = 'https://cs50.harvard.edu';
});
document.querySelector('#about_alternative img[src="images/highseas.png"]').addEventListener('click', function() {
    window.location.href = 'https://hackclub.com/';
});
document.querySelector('#about_alternative img[src="images/github.png"]').addEventListener('click', function() {
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
//Test function for mobile
if (/Mobi|Android/i.test(navigator.userAgent)) {
    alert('The site may display differently on mobile, viewing on a PC or laptop is recommended');
}

