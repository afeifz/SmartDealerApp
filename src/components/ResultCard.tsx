import React from 'react';

import { View, Text, StyleSheet } from 'react-native';



// Definindo a tipagem das propriedades

interface ResultCardProps {

  resultado: string;

}



export default function ResultCard({ resultado }: ResultCardProps) {

  // Se a string estiver vazia, não renderiza o cartão

  if (!resultado) return null;



  return (

    <View style={styles.card}>

      <Text style={styles.title}>Veredito da Inteligência Artificial</Text>

      <Text style={styles.text}>{resultado}</Text>

    </View>

  );

}



const styles = StyleSheet.create({

  card: {

    backgroundColor: '#ffffff',

    padding: 20,

    borderRadius: 12,

    marginTop: 25,

    elevation: 4,

    shadowColor: '#000',

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.15,

    shadowRadius: 5,

    borderLeftWidth: 4,

    borderLeftColor: '#003478',

  },

  title: {

    fontSize: 16,

    fontWeight: 'bold',

    color: '#003478',

    marginBottom: 12,

    textTransform: 'uppercase',

  },

  text: {

    fontSize: 15,

    color: '#333333',

    lineHeight: 24,

  }

});