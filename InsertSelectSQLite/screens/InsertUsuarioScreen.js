import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Modal } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [editNombre, setEditNombre] = useState('');
  const [editId, setEditId] = useState(null);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();
    controller.addListener(cargarUsuarios);

    return () => controller.removeListener(cargarUsuarios);
  }, [cargarUsuarios]);

  const handleAgregar = async () => {
    if (!nombre.trim()) return;
    setGuardando(true);

    try {
      await controller.crearUsuario(nombre);
      setNombre('');
    } finally {
      setGuardando(false);
    }
  };

  const abrirModalEdicion = (usuario) => {
    setEditNombre(usuario.nombre);
    setEditId(usuario.id);
    setModalVisible(true);
  };

  const guardarEdicion = async () => {
    if (!editNombre.trim()) return;

    await controller.actualizarUsuario(editId, editNombre);
    setModalVisible(false);
    cargarUsuarios();
  };
const eliminarUsuario = (usuario) => {
  Alert.alert(
    "Eliminar Usuario",
    `¿Eliminar a "${usuario.nombre}"?`,
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          try {
            await controller.eliminarUsuario(usuario.id);
            await cargarUsuarios();
          } catch (e) {
            console.log("Error eliminando:", e);
          }
        }
      }
    ]
  );
};


  const renderUsuario = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => abrirModalEdicion(item)}
      onLongPress={() => eliminarUsuario(item)}
    >
      <View style={styles.userItem}>
        <View style={styles.userNumber}>
          <Text style={styles.userNumberText}>{index + 1}</Text>
        </View>

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.nombre}</Text>
          <Text style={styles.userId}>ID: {item.id}</Text>
          <Text style={styles.userDate}>
            {new Date(item.fechaCreacion).toLocaleDateString('es-MX')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>INSERT & SELECT</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe el nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TouchableOpacity style={styles.button} onPress={handleAgregar}>
        <Text style={styles.buttonText}>
          {guardando ? "Guardando..." : "Agregar Usuario"}
        </Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUsuario}
        />
      )}

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Editar Usuario</Text>

            <TextInput
              style={styles.input}
              value={editNombre}
              onChangeText={setEditNombre}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButton}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={guardarEdicion}>
                <Text style={styles.saveButton}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },

  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center"
  },

  buttonText: { color: "#fff", fontWeight: "bold" },

  userItem: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF"
  },

  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12
  },

  userNumberText: { color: "#fff", fontWeight: "bold" },
  userInfo: { flex: 1 },
  userName: { fontSize: 16, fontWeight: "600" },
  userId: { fontSize: 12, color: "#007AFF" },
  userDate: { fontSize: 12, color: "#666" },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  modalBox: {
    backgroundColor: "#fff",
    margin: 30,
    padding: 20,
    borderRadius: 12
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center"
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15
  },

  cancelButton: { color: "red", fontSize: 16 },
  saveButton: { color: "#007AFF", fontSize: 16 }
});
