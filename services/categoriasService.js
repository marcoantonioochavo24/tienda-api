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
  const datos = leer();
  return datos.find(c => c.id === id) || null;
};

exports.crear = (nueva) => {
  const datos = leer();
  nueva.id = datos.length ? Math.max(...datos.map(c => c.id)) + 1 : 1;
  datos.push(nueva);
  guardar(datos);
  return nueva;
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
