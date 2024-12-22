// Define calculator buttons
const buttons = [
    'C', '/', '*', '⌫',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.'
];

// Get the buttons container and display div
const buttonsContainer = document.getElementById('buttons');
const displayDiv = document.getElementById('display');
let inputString = '0'; // Initially display 0
displayDiv.textContent = inputString;
const msg = document.querySelector('.msg');

const displayInput = (btn) => {
    if (btn === 'C') {
        inputString = '0'; // Reset to 0 on clear
        displayDiv.textContent = inputString;
    } else if (btn === '⌫') {
        inputString = inputString.length > 1 ? inputString.slice(0, -1) : '0'; // Reset to 0 if empty
        displayDiv.textContent = inputString;
    } else if (btn === '=') {
        try {
            inputString = eval(inputString).toString(); // Evaluate and update
            displayDiv.textContent = inputString;
        } catch (error) {
            msg.textContent = "Invalid Calculation :(";
            setTimeout(() => {
                msg.textContent = "Please Calculate :P";
            }, 1000);
        }
    } else {
        const lastChar = inputString.slice(-1);

        // Prevent consecutive operators
        if (['+', '-', '*', '/'].includes(btn) && ['+', '-', '*', '/'].includes(lastChar)) {
            msg.textContent = "Cannot input consecutive operators!";
            setTimeout(() => {
                msg.textContent = "Please Calculate :P";
            }, 1000);
        } else if (!isNaN(btn) || btn === '.' || ['+', '-', '*', '/'].includes(btn)) {
            // Allow explicitly entering 0 after initial 0
            if (inputString === '0' && btn !== '0' && !['+', '-', '*', '/'].includes(btn)) {
                inputString = btn; // Replace initial 0 with the first valid input
            } else {
                inputString += btn;
            }
            displayDiv.textContent = inputString;
        } else {
            msg.textContent = "Invalid Input";
            setTimeout(() => {
                msg.textContent = "Please Calculate :P";
            }, 1000);
        }
    }
};

// Dynamically create buttons
buttons.forEach(btn => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = btn;
    if (btn === '=') {
        button.classList.add('equal-btn'); // Special style for equal button
    }
    buttonsContainer.appendChild(button);

    button.addEventListener('click', () => displayInput(btn));
});

window.onload = () => {
    document.addEventListener('keydown', (e) => {
        const validInput = /^[0-9+\-*/.=]$/;

        if (validInput.test(e.key) || e.key === 'Enter' || e.key === "Backspace") {
            if (e.key === 'Enter') {
                displayInput('=');
                e.preventDefault();
            } else if (e.key === 'Backspace') {
                displayInput('⌫');
            } else {
                displayInput(e.key);
            }
        } else if (e.key === 'c' || e.key === 'C') {
            displayInput('C'); // Allow 'C' key for clearing
        } else {
            msg.textContent = "KEYS OTHER THAN NUMBERS ARE NOT VALID :(";

            setTimeout(() => {
                msg.textContent = "Please Calculate :P";
            }, 1000);
        }
    });
};
