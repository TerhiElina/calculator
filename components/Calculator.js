import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Calculator({navigation}) {

  const [numbers, setNumbers]= useState({firstNumber:'', secondNumber:'' });
  const [result, setResult] = useState('');
  const [saveCalculation, setSaveCalculation] = useState([]);

  const countSum = () =>{
    const firstNumber = parseFloat(numbers.firstNumber);
    const secondNumber = parseFloat(numbers.secondNumber);
    const sum = firstNumber + secondNumber;
    setResult(sum);
    // Muodostetaan laskutoimitus tallennettavaan muotoon
    const calculation = `${firstNumber} + ${secondNumber} = ${sum}`
    setSaveCalculation([...saveCalculation, calculation]);

  }
  const countDifference = () =>{
    const firstNumber = parseFloat(numbers.firstNumber);
    const secondNumber = parseFloat(numbers.secondNumber);
    const difference = firstNumber - secondNumber;
    setResult(difference);
    const calculation = `${firstNumber} - ${secondNumber} = ${difference}`
    setSaveCalculation([...saveCalculation, calculation]);
  }


  return (
    <View style={styles.container}>
       <Text style ={{fontSize:20}}>Result: {result}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <TextInput style={styles.input}
            keyboardType='numeric'
            onChangeText={firstNumber => setNumbers({...numbers, firstNumber})}
          />
          <TextInput style={styles.input}
            keyboardType='numeric'
            onChangeText={secondNumber => setNumbers({...numbers, secondNumber})}
          />
        </View>
        <View style = {styles.buttonContainer}>
          <Button
            title='+'
            onPress={countSum}
            style={styles.button}
          />
          <Button
            title='-'
            onPress={countDifference}
          />
          <Button
            title='History'
            onPress={() => {
                navigation.navigate('History', { saveCalculation })
  }}
/>
        </View>

      <StatusBar style="auto" />
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  input: {
    borderColor:'orange',
    borderWidth: 2,
    width: 50,
    height: 50,
    margin: 10,
    padding: 5,

  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent:"space-around",
    width: '40%',
    marginBottom:20,
  },

});
