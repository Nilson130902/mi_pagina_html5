// Array inicial de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 1200,
        descripcion: "Laptop de última generación con 16GB RAM y 512GB SSD"
    },
    {
        nombre: "Smartphone",
        precio: 800,
        descripcion: "Teléfono inteligente con cámara de 48MP y pantalla AMOLED"
    },
    {
        nombre: "Tablet",
        precio: 350,
        descripcion: "Tablet de 10 pulgadas con 128GB de almacenamiento"
    }
];

// Función para renderizar la lista de productos
function renderizarProductos() {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = ''; // Limpiar la lista antes de renderizar
    
    productos.forEach(producto => {
        const itemProducto = document.createElement('li');
        itemProducto.className = 'producto';
        
        // Crear plantilla HTML para cada producto
        itemProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <p><strong>Descripción:</strong> ${producto.descripcion}</p>
        `;
        
        listaProductos.appendChild(itemProducto);
    });
}

// Función para agregar un nuevo producto
function agregarProducto() {
    // Generar un producto de ejemplo (en un caso real, esto podría venir de un formulario)
    const nuevoProducto = {
        nombre: `Producto ${productos.length + 1}`,
        precio: Math.floor(Math.random() * 1000) + 100,
        descripcion: `Descripción del producto ${productos.length + 1}`
    };
    
    productos.push(nuevoProducto);
    renderizarProductos();
}

// Evento para cargar los productos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    
    // Evento para el botón de agregar producto
    document.getElementById('agregar-producto').addEventListener('click', agregarProducto);
});