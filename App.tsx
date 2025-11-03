import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const ageAsNumber: number = !isNaN(Number(age))===true ? Number(age) : 220
  const lowerLimit: number = (220-ageAsNumber) * 0.65
  const upperLimit: number = (220-ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput 
        placeholder=''
        keyboardType='number-pad'
        value={age}
        onChangeText={setAge}
        style={styles.field}
        />
      <Text>Lower limit: {lowerLimit.toFixed(2)} bpm</Text>
      <Text>Upper limit: {upperLimit.toFixed(2)} bpm</Text>
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
  },
  heading: {
    fontSize: 28
  },
  field: {
    width: 100,
    borderWidth: 2,
    borderRadius: 4
  },
});
