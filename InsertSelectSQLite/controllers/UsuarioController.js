import { Usuario } from '../models/usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
  constructor() {
    this.listeners = [];
  }

  async initialize() {
    await DatabaseService.initialize();
  }

  async obtenerUsuarios() {
    try {
      const data = await DatabaseService.getAll();
      return data.map(u => new Usuario(u.id, u.nombre, u.fecha_creacion));
    } catch (error) {
      throw new Error('No se pudieron cargar los usuarios');
    }
  }

  async crearUsuario(nombre) {
    Usuario.validar(nombre);
    const nuevoUsuario = await DatabaseService.add(nombre.trim());
    this.notifyListeners();

    return new Usuario(
      nuevoUsuario.id,
      nuevoUsuario.nombre,
      nuevoUsuario.fecha_creacion
    );
  }

  async actualizarUsuario(id, nuevoNombre) {
    Usuario.validar(nuevoNombre);
    await DatabaseService.update(id, nuevoNombre.trim());
    this.notifyListeners();
  }

  async eliminarUsuario(id) {
    await DatabaseService.remove(id);
    this.notifyListeners();
  }

  addListener(cb) {
    this.listeners.push(cb);
  }

  removeListener(cb) {
    this.listeners = this.listeners.filter(l => l !== cb);
  }

  notifyListeners() {
    this.listeners.forEach(cb => cb());
  }
}
