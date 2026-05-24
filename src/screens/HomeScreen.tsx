import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView, Alert } from 'react-native';

import api from '../api/api';

import ResultCard from '../components/ResultCard';



export default function HomeScreen() {

  // Tipando os estados com TypeScript

  const [versaoFord, setVersaoFord] = useState<string>('Limited + 3.0L V6 26MY');

  const [concorrente, setConcorrente] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const [resultado, setResultado] = useState<string>('');



  const handleComparar = async () => {

    if (!concorrente.trim()) {

      Alert.alert('Campo Vazio', 'Por favor, digite o nome do carro concorrente.');

      return;

    }



    setLoading(true);

    setResultado('');



    try {

      const response = await api.post('/veiculos/comparar', {

        versaoFord: versaoFord,

        concorrente: concorrente

      });

     

      // Navegar no JSON do Gemini para pegar SÓ o texto

      let textoLimpo = "";

     

      // Verifica se a resposta veio como objeto bruto do Gemini

      if (response.data && response.data.candidates) {

        textoLimpo = response.data.candidates[0].content.parts[0].text;

      }

      // Caso o Java já tenha mandado apenas a string

      else if (typeof response.data === 'string') {

        textoLimpo = response.data;

      }

      // Proteção extra contra quebras

      else {

        textoLimpo = JSON.stringify(response.data);

      }



      setResultado(textoLimpo); // Agora passamos apenas o texto puro para a tela!



    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor. Verifique o console ou o seu IP.');
      console.error(error);

    } finally {
      setLoading(false);
    }

  };



  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SmartDealer Hub</Text>
        <Text style={styles.subtitle}>Comparativo de Vendas com IA</Text>
      </View>



      <View style={styles.formCard}>
        <Text style={styles.label}>Modelo Ford (Base):</Text>
        <TextInput
          style={styles.input}
          value={versaoFord}
          onChangeText={setVersaoFord}
        />



        <Text style={styles.label}>Modelo Concorrente:</Text>
        <TextInput
          style={styles.input}

          placeholder="Ex: Toyota Hilux GR-S"

          placeholderTextColor="#999"

          value={concorrente}

          onChangeText={setConcorrente}

        />



        <TouchableOpacity

          style={[styles.button, loading && styles.buttonDisabled]}

          onPress={handleComparar}

          disabled={loading}

        >

          {loading ? (

            <ActivityIndicator color="#ffffff" size="small" />

          ) : (

            <Text style={styles.buttonText}>Gerar Argumentos de Venda</Text>

          )}

        </TouchableOpacity>

      </View>



      <ResultCard resultado={resultado} />

    </ScrollView>

  );

}



const styles = StyleSheet.create({

  container: {

    flexGrow: 1,

    padding: 20,

    paddingTop: 50,

    backgroundColor: '#F4F6F9',

  },

  header: {

    alignItems: 'center',

    marginBottom: 30,

  },

  headerTitle: {

    fontSize: 28,

    fontWeight: '900',

    color: '#003478',

    letterSpacing: 0.5,

  },

  subtitle: {

    fontSize: 14,

    color: '#6c757d',

    marginTop: 5,

  },

  formCard: {

    backgroundColor: '#ffffff',

    padding: 20,

    borderRadius: 12,

    elevation: 2,

    shadowColor: '#000',

    shadowOffset: { width: 0, height: 1 },

    shadowOpacity: 0.1,

    shadowRadius: 3,

  },

  label: {

    fontSize: 14,

    fontWeight: '700',

    color: '#495057',

    marginBottom: 8,

  },

  input: {

    backgroundColor: '#F8F9FA',

    borderWidth: 1,

    borderColor: '#DEE2E6',

    borderRadius: 8,

    padding: 14,

    marginBottom: 20,

    fontSize: 16,

    color: '#212529',

  },

  button: {

    backgroundColor: '#003478',

    padding: 16,

    borderRadius: 8,

    alignItems: 'center',

    justifyContent: 'center',

  },

  buttonDisabled: {

    backgroundColor: '#00347890',

  },

  buttonText: {

    color: '#ffffff',

    fontSize: 16,

    fontWeight: 'bold',

  }

});