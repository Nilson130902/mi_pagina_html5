// Arreglo inicial de productos
let productos = [
  { nombre: "Camiseta", precio: 15.99, descripcion: "Camiseta de algodón 100%" },
  { nombre: "Zapatos", precio: 49.99, descripcion: "Zapatos deportivos de alta calidad" },
  { nombre: "Gorra", precio: 9.99, descripcion: "Gorra con diseño moderno" }
];

// Referencia al <ul> del HTML
const lista = document.getElementById("product-list");

// Función para renderizar todos los productos
function renderizarProductos() {
  lista.innerHTML = ""; // Limpiar la lista
  productos.forEach((producto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${producto.nombre}</strong> - $${producto.precio.toFixed(2)}<br>${producto.descripcion}`;
    lista.appendChild(li);
  });
}

// Botón para agregar un nuevo producto
document.getElementById("add-product-btn").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Producto Nuevo",
    precio: 19.99,
    descripcion: "Este es un producto agregado dinámicamente"
  };
  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderizar productos al cargar la página
renderizarProductos();
