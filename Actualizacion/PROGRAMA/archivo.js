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


// script.js

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('encuestaForm');
    const mensajeExito = document.getElementById('mensajeExito');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío predeterminado del formulario

        // Verifica la validez del formulario
        if (form.checkValidity()) {
            // Aquí puedes agregar la lógica para enviar los datos al servidor
            // Por ejemplo, usando fetch o AJAX

            // Muestra el mensaje de éxito
            mensajeExito.classList.remove('d-none');

            // Reinicia el formulario
            form.reset();

            // Remueve las clases de validación
            form.classList.remove('was-validated');
        } else {
            // Añade clases de Bootstrap para mostrar validaciones
            form.classList.add('was-validated');
        }
    });
});



// Ejemplo de datos simulados
const frutasYVerduras = [
    { producto: 'Manzanas', vencimiento: '2024-09-30', cantidad: 20, stockMinimo: 15 },
    { producto: 'Plátanos', vencimiento: '2024-10-02', cantidad: 5, stockMinimo: 10 },
    { producto: 'Zanahorias', vencimiento: '2024-09-15', cantidad: 8, stockMinimo: 20 },
    { producto: 'Tomates', vencimiento: '2024-10-05', cantidad: 12, stockMinimo: 10 }
];

// Función para generar los reportes dinámicamente
function generarReportes() {
    // Limpiar tablas
    document.getElementById('tablaVencidas').innerHTML = '';
    document.getElementById('tablaPocoStock').innerHTML = '';

    const hoy = new Date();

    frutasYVerduras.forEach(item => {
        const fechaVencimiento = new Date(item.vencimiento);
        
        // Verificar si el producto está vencido
        if (fechaVencimiento < hoy) {
            document.getElementById('tablaVencidas').innerHTML += `
                <tr>
                    <td>${item.producto}</td>
                    <td>${item.vencimiento}</td>
                    <td>${item.cantidad}</td>
                </tr>
            `;
        }

        // Verificar si el stock es bajo
        if (item.cantidad < item.stockMinimo) {
            document.getElementById('tablaPocoStock').innerHTML += `
                <tr>
                    <td>${item.producto}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.stockMinimo}</td>
                </tr>
            `;
        }
    });
}
