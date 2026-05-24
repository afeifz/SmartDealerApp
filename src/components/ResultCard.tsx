import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ResultCardProps {
  resultado: string;
}

export default function ResultCard({ resultado }: ResultCardProps) {
  if (!resultado) return null;

  let parsedData: any = null;

  try {
    // 1. Limpa qualquer crase de formatação (```json) 
    const cleanString = resultado.replace(/```json/gi, '').replace(/```/g, '').trim();
    // 2. Transforma o texto em um Objeto JavaScript real!
    parsedData = JSON.parse(cleanString);
  } catch (e) {
    // Se não mandar um JSON válido (mandar texto normal), cai aqui como plano B
    return (
      <View style={styles.card}>
        <Text style={styles.title}>Veredito da Inteligência Artificial</Text>
        <Text style={styles.text}>{resultado}</Text>
      </View>
    );
  }

  // Pegando os nomes dos carros dinamicamente (Ex: "Ford" e "Toyota")
  const marcas = Object.keys(parsedData);
  if (marcas.length < 2) return null;

  const marca1 = marcas[0]; // Ford
  const marca2 = marcas[1]; // Concorrente
  const dados1 = parsedData[marca1];
  const dados2 = parsedData[marca2];

 
  const atributos = Object.keys(dados1).filter(k => k !== 'modelo' && k !== 'versao');

  
  const formatarLabel = (texto: string) => {
    return texto.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <View style={styles.tableCard}>
      <Text style={styles.mainTitle}>Comparativo Técnico Baseado em IA</Text>

      {/* CABEÇALHO DA TABELA */}
      <View style={styles.rowHeader}>
        <Text style={[styles.cell, styles.headerText, { flex: 1.2 }]}>Especificação</Text>
        <Text style={[styles.cell, styles.headerText, styles.fordHighlightText]}>{marca1.toUpperCase()}</Text>
        <Text style={[styles.cell, styles.headerText]}>{marca2.toUpperCase()}</Text>
      </View>

      {/* LINHA DE MODELO / VERSÃO */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.label]}>Modelo</Text>
        <Text style={[styles.cell, styles.fordValue]}>{dados1.modelo} {dados1.versao}</Text>
        <Text style={styles.cell}>{dados2.modelo} {dados2.versao}</Text>
      </View>

      {/* LOOP PARA GERAR AS OUTRAS LINHAS DINAMICAMENTE */}
      {atributos.map((attr, index) => {
        const val1 = dados1[attr];
        const val2 = dados2[attr];

        return (
          // Alternando a cor da linha (zebra) para facilitar a leitura
          <View key={index} style={[styles.row, index % 2 === 0 ? styles.rowEven : null]}>
            <Text style={[styles.cell, styles.label]}>{formatarLabel(attr)}</Text>
            <Text style={[styles.cell, styles.fordValue]}>
              {val1 !== undefined && val1 !== null ? String(val1) : '-'}
            </Text>
            <Text style={styles.cell}>
              {val2 !== undefined && val2 !== null ? String(val2) : '-'}
            </Text>
          </View>
        );
      })}
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
  },
  tableCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginTop: 25,
    overflow: 'hidden', 
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#e9ecef',
    marginBottom: 40,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#ffffff',
    backgroundColor: '#003478', 
    paddingVertical: 12,
    paddingHorizontal: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  rowHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 2,
    borderBottomColor: '#dee2e6',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  rowEven: {
    backgroundColor: '#f8f9fa', 
  },
  cell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 13,
    color: '#495057',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#343a40',
    fontSize: 12,
    textAlign: 'center',
  },
  fordHighlightText: {
    color: '#003478',
    fontWeight: '900',
  },
  label: {
    fontWeight: 'bold',
    color: '#6c757d',
    flex: 1.2, 
  },
  fordValue: {
    fontWeight: '700', 
    color: '#003478',
    backgroundColor: '#e6f0fa', 
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003478',
    marginBottom: 12,
  },
  text: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
  }
});