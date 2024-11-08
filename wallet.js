window.onload = function() {
    // Supongamos que obtenemos los datos del saldo y transacciones desde una API o base de datos
    var ghostBalance = 10000; // Ejemplo de saldo inicial
    var transactions = [
        { date: '2023-11-01', type: 'Depósito', amount: 5000 },
        { date: '2023-11-03', type: 'Retiro', amount: 2000 },
        { date: '2023-11-05', type: 'Depósito', amount: 7000 }
    ];

    document.getElementById('ghostBalance').textContent = ghostBalance;

    var transactionsList = document.getElementById('transactionsList');
    transactions.forEach(transaction => {
        var listItem = document.createElement('li');
        listItem.textContent = `${transaction.date}: ${transaction.type} de ${transaction.amount} GHOST`;
        transactionsList.appendChild(listItem);
    });
};

function deposit() {
    alert('Función de depósito no implementada');
}

function withdraw() {
    alert('Función de retiro no implementada');
}
