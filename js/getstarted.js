document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waiting-list-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const role = document.getElementById("role").value.trim();
        const location = document.getElementById("location").value.trim();
        const insights = document.getElementById("insights").value; // New field

        if (!fullName || !email || !role || !location) {
            alert("Please fill out all fields.");
            return;
        }

        const userData = { fullName, email, role, location };

        try {
            const response = await fetch("https://engin-backend.onrender.com/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                form.reset();
            } else {
                alert(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to register. Please try again.");
        }
    });
});
