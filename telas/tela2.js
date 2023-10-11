import React from 'react';
import { View, Text,  StyleSheet, TouchableOpacity } from 'react-native';



const tela2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      

      <View style={styles.overlay}>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("tela1")}>
          <Text style={styles.buttonText}>Meu Botão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default tela2;
