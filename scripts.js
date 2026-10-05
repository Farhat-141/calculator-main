
// Function to display the value on the screen
function display(val) {
    document.getElementById("result").innerText += val;
}

// Function to clear the screen
function reset() {
    document.getElementById("result").innerText = "";
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(document.getElementById("result").innerText);
        document.getElementById("result").innerText = result;
    } catch (error) {
        document.getElementById("result").innerText = "Error";
    }
}

let expandElement = document.getElementById("expand");

expandElement.addEventListener("click", function() {
    let transfer = document.querySelector(".transfer");

    if (transfer.style.display === "none" || transfer.style.display === "") {
        transfer.style.display = "block";
        expandElement.innerText = "Close";
    } else {
        transfer.style.display = "none";
        expandElement.innerText = "Expand";
    }
});

const rates = {
    USD: {
        DZD: 130,
        EUR: 0.85,
        GBP: 0.75
    },

    EUR: {
        USD: 1.18,
        DZD: 153,
        GBP: 0.88
    },

    DZD: {
        USD: 0.0077,
        EUR: 0.0065,
        GBP: 0.0058
    },

    GBP: {
        USD: 1.33,
        EUR: 1.14,
        DZD: 172
    }
};

document.getElementById("convert").addEventListener("click", function() {

    const amount = Number(document.getElementById("currencyAmount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    if (!amount) {
        document.getElementById("conversionResult").innerText =
            "Enter an amount";
        return;
    }

    if (from === to) {
        document.getElementById("conversionResult").innerText =
            `${amount} ${from}`;
        return;
    }

    const result = amount * rates[from][to];

    document.getElementById("conversionResult").innerText =
        `${amount} ${from} = ${result.toFixed(2)} ${to}`;
});
