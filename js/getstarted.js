document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("waiting-list-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("role").value;
        const location = document.getElementById("location").value;
        const insights = document.getElementById("insights").value;

        if (fullName && email && role && location) {
            // Redirect to success page
            window.location.href = "success.html";
        } else {
            alert("Please fill out all required fields.");
        }
    });
});


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
