/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Dropdown from './src/Dropdown';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.areaMoeda}>
        <Text style={styles.titulo}>Selecione sua moeda</Text>
        <Dropdown />
      </View>

      <View style={styles.areValor}>
        <Text style={styles.titulo}>
          Digite um valor para converter em (R$)
        </Text>
        <TextInput
          placeholder="Exemplo: 150"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.botaoArea}>
        <Text style={styles.botaoTexto}>Converter</Text>
      </TouchableOpacity>

      <View style={styles.areaResultado}>
        <Text style={styles.valorConvertido}>3 USD</Text>
        <Text style={[styles.valorConvertido, {fontSize: 18, margin: 10}]}>
          Corresponde a
        </Text>
        <Text style={styles.valorConvertido}>19,90</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#101215',
    paddingTop: 40,
  },
  areaMoeda: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingTop: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    marginBottom: 1,
  },
  titulo: {
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5,
  },
  areValor: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingBottom: 9,
    paddingTop: 9,
  },
  input: {
    width: '100%',
    padding: 10,
    height: 45,
    fontSize: 20,
    marginTop: 9,
    color: '#000',
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#FB4B57',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  valorConvertido: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;