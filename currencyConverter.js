// currencyConverter.js
// Project One Java Fundamentals - Currency Converter
// Predefined exchange rates (for simplicity, these are static and may not reflect real-time rates)

const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.75, JPY: 110.0 },
    EUR: { USD: 1.18, GBP: 0.88, JPY: 129.53 },
    GBP: { USD: 1.33, EUR: 1.14, JPY: 147.0 },
    JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }
    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted amount: ${amount.toFixed(2)} ${toCurrency}`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `Converted amount: ${convertedAmount} ${toCurrency}`;
}//