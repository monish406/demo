document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let address = document.getElementById("address").value.trim();
    let message = document.getElementById("message");

    // Check empty fields
    if (name === "" || phone === "" || email === "" || address === "") {
        message.style.color = "red";
        message.textContent = "All fields are mandatory!";
        return;
    }

    // Phone number validation (exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
        message.style.color = "red";
        message.textContent = "Mobile number must be exactly 10 digits!";
        return;
    }

    // Email validation (must contain @)
    if (!email.includes("@")) {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address!";
        return;
    }

    // If everything is valid
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();

    // ✅ Success
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";

    // Submit form after short delay (optional)
    setTimeout(() => {
        event.target.submit();
    }, 1000);

    <script>
    function submitForm() {
    alert("Form submitted successfully!");
    return false; // stops page refresh
    }
   </script>


});
