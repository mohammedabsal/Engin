document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waiting-list-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;
        const location = document.getElementById("location").value;

        if (fullName && email && role && location) {
            alert(`Thank you, ${fullName}! You've been added to the waiting list.`);
            form.reset(); // Clear the form after submission
        } else {
            alert("Please fill out all fields.");
        }
    });
});
