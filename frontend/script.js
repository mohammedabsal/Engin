// Add any interactive JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waiting-list-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you can add code to handle form submission, e.g., send data to a server
        alert('Thank you for joining the waiting list!');
        form.reset();
    });
});