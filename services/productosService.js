// services/productosService.js

const fs = require('fs');
const path = require('path');

// Rutas a los ficheros JSON
const rutaProductos = path.join(__dirname, '../data/productos.json');
const rutaCategorias = path.join(__dirname, '../data/categorias.json');

// Función genérica para leer un JSON
function leerJSON(ruta) {
  const data = fs.readFileSync(ruta, 'utf-8');
  return JSON.parse(data);
}

// Guardar siempre en productos.json
function guardarJSON(datos) {
  fs.writeFileSync(rutaProductos, JSON.stringify(datos, null, 2));
}

/* ===========================
   Funciones CRUD “normales”
   =========================== */

exports.listar = () => {
  return leerJSON(rutaProductos);
};

exports.buscarPorId = (id) => {
  const datos = leerJSON(rutaProductos);
  const producto = datos.find(p => p.id === id);
  return producto || null;
};

exports.crear = (nuevo) => {
  const datos = leerJSON(rutaProductos);

  nuevo.id = datos.length ? Math.max(...datos.map(p => p.id)) + 1 : 1;

  datos.push(nuevo);
  guardarJSON(datos);

  return nuevo;
};

exports.actualizar = (id, cambios) => {
  const datos = leerJSON(rutaProductos);
  const index = datos.findIndex(p => p.id === id);

  if (index === -1) return null;

  datos[index] = { ...datos[index], ...cambios };
  guardarJSON(datos);

  return datos[index];
};

exports.eliminar = (id) => {
  const datos = leerJSON(rutaProductos);
  const index = datos.findIndex(p => p.id === id);

  if (index === -1) return null;

  const eliminado = datos.splice(index, 1);
  guardarJSON(datos);

  return eliminado[0];
};

// NUEVO: listar productos con su categoría

exports.listarConCategorias = () => {
  const productos = leerJSON(rutaProductos);
  const categorias = leerJSON(rutaCategorias);

  // A cada producto le añadimos el nombre de la categoría
  return productos.map(p => {
    const categoria = categorias.find(c => c.id === p.categoriaId);

    return {
      ...p,
      categoria: categoria ? categoria.nombre : 'Sin categoría'
    };
  });
};
