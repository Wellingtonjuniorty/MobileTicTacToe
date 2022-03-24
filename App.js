import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },
    text: {
      fontSize: 25,
      marginTop: 25,
      marginBottom: 25,
      color: 'black',
    },
    line: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    position: {
      backgroundColor: '#DCDCDC',
      width: 95,
      height: 95,
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      color:'black', 
      textTransform: 'uppercase',
    },
    button: {
      width: 287,
      height: 45,
      backgroundColor: '#DCDCDC',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 2,
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center',
      textTransform: 'uppercase',
    },
  });

  const [currentPlayer, setCurrentPlayer] = useState('X');
  
  function MakeMove()  {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Jogo da Velha </Text>
      <View style={styles.line}>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.position}>
          <Text>{}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Jogador atual : {currentPlayer} </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
