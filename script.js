//This script is used to redirect users to educational sites when they click on the images in the about section.
//It is reccomended to update broken or old links to the latest version of the site.
//This script is only used in the about section of the website.
//If you add images anywhere in about.html, make sure to add the event listener for the image in this script.
//If you add them elsewhere in the site, adjust this file with an if clause to detect which file they are on, or create a new script file for that page.
document.querySelector('#about img[src="images/python.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/python/';
});
document.querySelector('#about img[src="images/javascript.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/js/';
});
document.querySelector('#about img[src="images/htmlcss.png"]').addEventListener('click', function() {
    window.location.href = 'https://www.w3schools.com/html/';
});
document.querySelector('#about img[src="images/cs50p.png"]').addEventListener('click', function() {
    window.location.href = 'https://cs50.harvard.edu';
});
document.querySelector('#about img[src="images/highseas.png"]').addEventListener('click', function() {
    window.location.href = 'https://hackclub.com/';
});