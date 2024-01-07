// Get all input elements
const inputs = document.querySelectorAll('input');

// Add click event listener to each input
inputs.forEach(input => {
    
    input.addEventListener('click', () => {
        
        // Print the active input
        console.log(`Active input: ${input.id}`);
        // Perform validation in camel case style
        const isValid = validateInput(input);
        if (isValid) {
            // Input is valid, apply appropriate styling
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            // Input is invalid, apply appropriate styling
            // input.classList.remove('valid');
            input.classList.add('error');
            // document.getElementById(input).style.opacity = 1;
            
        }
    });
});

// Function to validate input
function validateInput(input) {
    // Perform validation logic here
    // Return true if input is valid, false otherwise
    // Example validation logic:
    if (input.value.trim() === '') {
        return false;
    }
    return true;
}

