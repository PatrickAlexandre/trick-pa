// scripts-functions.js
function calculateDEJ() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const activityLevel = parseFloat(document.getElementById("activity-level").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || isNaN(activityLevel)) {
        alert("Veuillez remplir tous les champs correctement.");
        return;
    }

    const dej = Math.round((10 * weight + 6.25 * height - 5 * age + 5) * activityLevel);
    document.getElementById("dej-result").textContent = `DEJ : ${dej} kcal`;
}

function updateSavingsRate(value) {
    document.getElementById("savings-output").textContent = `Taux d'épargne : ${value}%`;
}

function calculateFinances() {
    const income = parseFloat(document.getElementById("income").value);
    const expenses = parseFloat(document.getElementById("expenses").value);
    const savingsRate = parseInt(document.getElementById("savings-rate").value) / 100;

    if (isNaN(income) || isNaN(expenses)) {
        alert("Veuillez remplir les champs revenus et dépenses.");
        return;
    }

    const savings = income * savingsRate - expenses;
    const result = savings >= 0 ? `Vous épargnez ${savings} €.` : `Vous avez un déficit de ${Math.abs(savings)} €.`;
    document.getElementById("finance-analysis").textContent = result;
}
