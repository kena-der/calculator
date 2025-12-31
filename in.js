const display = document.getElementById('display');

// Function to add numbers/operators to display
function append(value) {
    display.value += value;
}

// Function to clear everything
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        if (display.value === "") return;
        
        // eval takes the string (e.g., "2+2") and returns the math result (4)
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500);
    }
}