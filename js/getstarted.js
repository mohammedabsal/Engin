document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waiting-list-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;
        const location = document.getElementById("location").value;

        if (!fullName || !email || !role || !location) {
            alert("Please fill out all fields.");
            return;
        }

        const userData = {
            full_name: fullName,
            email: email,
            role: role,
            location: location
        };

        try {
            const response = await fetch("https://engin-backend.onrender.com/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`Thank you, ${fullName}! You've been added to the waiting list.`);
                form.reset();
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert("Failed to register. Please try again.");
            console.error(error);
        }
    });
});
