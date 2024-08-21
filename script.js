document.getElementById('convert-btn').addEventListener('click', function() {
    const usd = document.getElementById('usd').value;
    const conversionRate = 83.2; // Example conversion rate (you can update this dynamically)
    const inr = usd * conversionRate;
    document.getElementById('inr').value = inr.toFixed(2);
});
