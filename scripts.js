let provider;
let signer;
let userAddress = null;
let balance = 0;
let raffleTickets = [];
let totalMTT = 0;

// Mostrar la página seleccionada
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.bottom-nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.bottom-nav button[onclick*="showPage('${pageId}')"]`).classList.add('active');
}

// Mostrar la página de Dashboard por defecto
showPage('dashboard');

// Conectar wallet con MetaMask
async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        userAddress = await signer.getAddress();
        document.getElementById("wallet").innerText = userAddress;
        updateBalance();
    } else {
        document.getElementById("wallet").innerText = "Por favor instala MetaMask";
    }
}

// Actualizar balance del usuario
function updateBalance() {
    document.getElementById("balance").innerText = balance.toFixed(2);
    document.getElementById("totalMTT").innerText = totalMTT.toFixed(2);
}

// Reclamar recompensa por tarea (5 MTT por tarea, sin tiempo)
function claimTaskReward(task) {
    balance += 5;
    totalMTT += 5;
    updateBalance();
    // En un caso real, aquí integrarías una transacción a la blockchain
}

// Participar en la rifa (5 MTT por boleto)
function enterRaffle() {
    if (balance >= 5) {
        balance -= 5;
        raffleTickets.push(userAddress || "UsuarioSimulado");
        updateBalance();
        document.getElementById("raffleResult").innerText = `Tienes ${raffleTickets.length} boleto(s) en la rifa.`;
    } else {
        document.getElementById("raffleResult").innerText = "No tienes suficientes MTT (necesitas 5 MTT).";
    }
}

// Sortear ganador de la rifa
function drawRaffle() {
    if (raffleTickets.length === 0) {
        document.getElementById("raffleResult").innerText = "No hay participantes en la rifa.";
        return;
    }
    const winnerIndex = Math.floor(Math.random() * raffleTickets.length);
    const winner = raffleTickets[winnerIndex];
    document.getElementById("raffleResult").innerText = `¡Ganador: ${winner}! Premio: 50 MTT`;
    if (winner === userAddress) balance += 50; // Solo para el usuario conectado
    raffleTickets = [];
    updateBalance();
    // En un caso real, la wallet central enviaría 50 MTT al ganador
}