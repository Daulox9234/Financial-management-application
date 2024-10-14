// Sample data for the chart
const expenseData = {
    labels: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Others'],
    datasets: [{
        label: 'Expenses',
        data: [200, 150, 100, 80, 50],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1
    }]
};

// Render chart
const ctx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(ctx, {
    type: 'bar', // or 'line' or 'pie'
    data: expenseData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Example function to update income, expenses and balance
function updateFinancialData(income, expenses) {
    const totalIncomeElement = document.getElementById('total-income');
    const totalExpensesElement = document.getElementById('total-expenses');
    const balanceElement = document.getElementById('balance');

    const totalIncome = income;
    const totalExpenses = expenses;
    const balance = totalIncome - totalExpenses;

    totalIncomeElement.textContent = `$${totalIncome}`;
    totalExpensesElement.textContent = `$${totalExpenses}`;
    balanceElement.textContent = `$${balance}`;
}

// Call this function with some example data
updateFinancialData(1000, 580);
