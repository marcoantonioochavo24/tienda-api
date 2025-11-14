// services/categoriasService.js

const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, '../data/categorias.json');

function leer() {
  const data = fs.readFileSync(ruta, 'utf-8');
  return JSON.parse(data);
}

function guardar(datos) {
  fs.writeFileSync(ruta, JSON.stringify(datos, null, 2));
}

exports.listar = () => leer();

exports.buscarPorId = (id) => {
  return leer().find(c => c.id === id);
};

exports.crear = (nueva) => {
  const datos = leer();
  const nuevoId = datos.length ? Math.max(...datos.map(c => c.id)) + 1 : 1;

  const categoria = {
    id: nuevoId,
    nombre: nueva.nombre
  };

  datos.push(categoria);
  guardar(datos);
  return categoria;
};

exports.actualizar = (id, cambios) => {
  const datos = leer();
  const index = datos.findIndex(c => c.id === id);

  if (index === -1) return null;

  datos[index] = { ...datos[index], ...cambios };
  guardar(datos);
  return datos[index];
};

exports.eliminar = (id) => {
  const datos = leer();
  const index = datos.findIndex(c => c.id === id);

  if (index === -1) return null;

  const eliminado = datos.splice(index, 1);
  guardar(datos);
  return eliminado[0];
};
