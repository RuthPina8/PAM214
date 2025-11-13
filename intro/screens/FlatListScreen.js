import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'
import React from 'react'


export default function FlatListScreen() {
  const estudiantes = [
    { id: "1", nombre: "Ruth Piña" },
    { id: "2", nombre: "Carlos Mendoza" },
    { id: "3", nombre: "Ana Gomez" },
    { id: "4", nombre: "Luis Fernandez" },
  ];
   const materias = [
    {
      titulo: "Matematicas",
      data: ["Ruth Piña", "Ana Gomez"]
    },
    {
      titulo: "Historia",
      data: ["Carlos Mendoza", "Luis Fernandez"]
    },
    {
      titulo: "Programacion",
      data: ["Ruth Piña", "Carlos Mendoza", "Luis Fernandez"]
    }

   ];
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FlatList</Text>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Text style={styles.item}>{item.nombre}</Text>)}
        ListHeaderComponent={() => (<Text style={styles.headerFooter}>Inicio de la lista de Estudiantes</Text>)}
        ListFooterComponent={() => (<Text style={styles.headerFooter}>Fin de la lista de Estudiantes</Text>)}
      ></FlatList>

      <Text style={styles.titulo}>SectionList</Text>
      <SectionList
        sections={materias}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (<Text style={styles.item}>-{item}</Text>)}
        renderSectionHeader={({ section }) => (<Text style={styles.sectionHeader}>{section.titulo}</Text>) }
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => (<View style={styles.separator}/>)}
        SectionSeparatorComponent={() => (<View style={styles.sectionSeparator}/> )}
        ></SectionList>
      </View>
  )
   
  
}

const styles = StyleSheet.create({
      container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#F5F5F5"
      },
      titulo: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10
      },
      item: {
      fontSize: 16,
      backgroundColor: "#ffffff",
      padding: 10,
      marginVertical: 4,
      borderRadius: 8
      },
      sectionHeader: {
      fontSize: 18,
      fontWeight: "bold",
      backgroundColor: "#E0E0E0",
      padding: 8,
      marginTop: 10,
      borderRadius: 8
      },
      separator: {
      height: 8,
      },
      sectionSeparator: {
      height: 15,
      },
      headerFooter: {
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'italic',
        color: '#555',
        marginVertical: 6,
      },
});