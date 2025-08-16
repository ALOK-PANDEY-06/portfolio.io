// Resume Download
document.getElementById('downloadBtn').addEventListener('click', () => {
    window.location.href = "../files/resume.pdf"; 
});

// Contact Button
document.getElementById('contactBtn').addEventListener('click', () => {
    window.location.href = "mailto:al0kpandey6405@gmail.com";
});

// Hire Me Button
document.getElementById('hireBtn').addEventListener('click', () => {
    window.location.href = "mailto:al0kpandey6405@gmail.com?subject=Hiring Inquiry&body=Hi Alok,%0D%0A%0D%0AI would like to discuss an opportunity with you.";
});

// AOS Animation Init
AOS.init({
    duration: 1000,
    once: true
});
