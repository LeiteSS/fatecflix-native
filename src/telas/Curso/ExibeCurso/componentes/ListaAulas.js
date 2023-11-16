import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

const ListaAulas = ( { aulas } ) => {

  function obterLista(){
    return aulas.map((aula) => {
      return (
        <View key={aula.aula_id} style={styles.containerAula}>
          <Text style={styles.textoAulaTitulo}>{aula.titulo}</Text>
        </View>
      )
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Aulas do curso</Text>
       {obterLista()}
    </View>
  )
}

export default ListaAulas

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        minHeight: 200,
        padding: 16
    },
    textoTitulo: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8
    },
    texto: {
       paddingTop: 4, 
       fontSize: 14,
       textAlign: "justify"
    },
    containerAula:{
      height: 40,
      marginVertical: 2,
    },
    textoAulaTitulo: {
      fontSize: 16,
      color: "black",
    }

})