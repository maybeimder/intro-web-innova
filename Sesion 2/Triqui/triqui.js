
// CAMBIAR DE TEMA
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    let classes = document.body.classList

    classes.toggle("dark-theme");
    if (classes.contains("dark-theme")) {
        themeBtn.textContent = "🌙";
    } else {
        themeBtn.textContent = "☀️";
    }
});


// LOGICA DEL TRIQUI
let currentPlayer = "✖️";
let p1Points = 0;
let p2Points = 0;

const cells = document.querySelectorAll(".clickeable-container");

function handleCell(event) {
    const cell = event.target;

    // Si ya está rellenada la celda
    if (cell.textContent.trim() !== '') {
        return;
    }

    // Cambiar el valor del jugador
    cell.textContent = currentPlayer;

    // Checkear si hay un ganador (opcional)
    setTimeout(() => {
        if (isAWin()) {
            if (currentPlayer === "✖️") {
                p1Points++;
                document.getElementById("p1-score").textContent = `🐊 ${p1Points} Puntos`;
            } else {
                p2Points++;
                document.getElementById("p2-score").textContent = `🦜 ${p2Points} Puntos`;
            }
        
            if (confirm(`¡Ganó ${currentPlayer}!`)){
                resetBoard();
            }
            return;
        }

        if (currentPlayer === '✖️'){
            currentPlayer = '⭕'
        } else {
            currentPlayer = '✖️'
        }
    }, 0);
}


function getValue(id) {
    return document.getElementById(id).textContent;
}


function isAWin() {
    // Filas
    if (getValue("clck-cc0") && getValue("clck-cc0") === getValue("clck-cc1") && getValue("clck-cc1") === getValue("clck-cc2")) return true;
    if (getValue("clck-cc3") && getValue("clck-cc3") === getValue("clck-cc4") && getValue("clck-cc4") === getValue("clck-cc5")) return true;
    if (getValue("clck-cc6") && getValue("clck-cc6") === getValue("clck-cc7") && getValue("clck-cc7") === getValue("clck-cc8")) return true;

    // Columnas
    if (getValue("clck-cc0") && getValue("clck-cc0") === getValue("clck-cc3") && getValue("clck-cc3") === getValue("clck-cc6")) return true;
    if (getValue("clck-cc1") && getValue("clck-cc1") === getValue("clck-cc4") && getValue("clck-cc4") === getValue("clck-cc7")) return true;
    if (getValue("clck-cc2") && getValue("clck-cc2") === getValue("clck-cc5") && getValue("clck-cc5") === getValue("clck-cc8")) return true;

    // Diagonales
    if (getValue("clck-cc0") && getValue("clck-cc0") === getValue("clck-cc4") && getValue("clck-cc4") === getValue("clck-cc8")) return true;
    if (getValue("clck-cc2") && getValue("clck-cc2") === getValue("clck-cc4") && getValue("clck-cc4") === getValue("clck-cc6")) return true;

    return false;
}

function disableBoard() {
    cells.forEach(cell => {
        cell.removeEventListener("click", handleCell);
    });
}

function resetBoard() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener("click", handleCell);
    });
    currentPlayer = "✖️";
}
