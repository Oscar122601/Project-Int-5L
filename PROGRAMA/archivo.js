function showInfo(id) {
    document.getElementById(`info${id}`).style.display = 'block';
}

function hideInfo(id) {
    document.getElementById(`info${id}`).style.display = 'none';
}

// Simulación de los datos del inventario
const totalInventario = 500; // Total de unidades en inventario
const proximosVencer = 20; // Unidades próximas a vencer
const vencidos = 5; // Unidades vencidas
const bajoStock = 3; // Productos con bajo stock

// Actualización de los valores en el cuadro
document.getElementById('totalInventario').textContent = totalInventario;
document.getElementById('proximosVencer').textContent = proximosVencer;
document.getElementById('vencidos').textContent = vencidos;
document.getElementById('bajoStock').textContent = bajoStock;