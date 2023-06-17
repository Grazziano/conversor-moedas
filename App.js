/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Dropdown from './src/Dropdown';
import api from './src/services/api';

function App() {
  const [moedas, setMoedas] = useState([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [valorInput, setvalorInput] = useState(0);
  const [loading, setLoading] = useState(true);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(() => {
    async function loadMoedas() {
      const res = await api.get('all');

      let moedasArray = [];

      Object.keys(res.data).map(item => {
        moedasArray.push({
          key: item,
          label: item,
          value: item,
        });
      });

      setMoedas(moedasArray);
      setLoading(false);
    }

    loadMoedas();
  }, []);

  async function convert() {
    if (moedaSelecionada === null || valorInput === 0) {
      alert('Por favor selecione uma moeda');
      return;
    }

    const response = await api.get(`/all/${moedaSelecionada}-BRL`);

    let resultado =
      response.data[moedaSelecionada].ask * parseFloat(valorInput);
    setValorConvertido(`R$ ${resultado.toFixed(2)}`);
    setValorMoeda(valorInput);

    Keyboard.dismiss();
  }

  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator color="#FFF" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione sua moeda</Text>
          <Dropdown
            moedas={moedas}
            onChange={moeda => setMoedaSelecionada(moeda)}
            selected={moedaSelecionada}
          />
        </View>

        <View style={styles.areValor}>
          <Text style={styles.titulo}>
            Digite um valor para converter em (R$)
          </Text>
          <TextInput
            placeholder="Exemplo: 150"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={value => setvalorInput(value)}
          />
        </View>

        <TouchableOpacity style={styles.botaoArea} onPress={convert}>
          <Text style={styles.botaoTexto}>Converter</Text>
        </TouchableOpacity>

        {valorInput !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>
              {valorInput} {moedaSelecionada}
            </Text>
            <Text style={[styles.valorConvertido, {fontSize: 18, margin: 10}]}>
              Corresponde a
            </Text>
            <Text style={styles.valorConvertido}>{valorConvertido}</Text>
          </View>
        )}
      </View>
    );
  }
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
