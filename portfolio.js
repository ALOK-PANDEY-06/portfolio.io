// Resume Download
document.getElementById('downloadBtn').addEventListener('click', () => {
    alert("Your resume will be downloaded.");
    window.location.href = "../files/resume.pdf"; // Ensure file exists
});

// Contact Button
document.getElementById('contactBtn').addEventListener('click', () => {
    window.location.href = "mailto:al0kpandey6405@gmail.com";
});

// Hire Me Button
document.getElementById('hireBtn').addEventListener('click', () => {
    window.location.href = "mailto:al0kpandey6405@gmail.com?subject=Hiring Inquiry&body=Hi Alok,%0D%0A%0D%0AI would like to discuss an opportunity with you.";
});

// Theme Toggle
document.getElementById('themeBtn').addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    this.textContent = document.body.classList.contains('light-theme') ? "☀ Light" : "🌙 Dark";
});

// AOS Animation Init
AOS.init({
    duration: 1000,
    once: true
});
