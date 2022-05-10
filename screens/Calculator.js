import React from 'react';
import {Alert, StyleSheet, View} from 'react-native'
import { Appbar, Button, Text, TextInput } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Calculator = () => {

  const [gas, setGas] = React.useState(null);
  const [ethanol, setEthanol] = React.useState(null);
  const [output, setOutput] = React.useState(null);

  const handleCalculate = () => {
    if (!gas || gas <= 0 || !ethanol || ethanol <= 0) {
      Alert.alert('Inform the current price for gas and ethanol');
    } else {
      let pct = Math.round((ethanol/gas)*100)
      pct < 70 ? setOutput(pct + '% - Ethanol') : setOutput(pct + '% - Gas')
    }
  }

  return (
    <Container>
      <Header title='Fuel Calculator' />
      <Body>
        <Input
          label='Gas($)'
          value={gas}
          onChangeText={text => setGas(text)}
        />
        <Input
          label='Ethanol($)'
          value={ethanol}
          onChangeText={text => setEthanol(text)}
        />
        <Button mode='contained' onPress={handleCalculate}>
          Calculate
        </Button>
        <Text style={styles.text}> {output} </Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    fontSize: 45
  }
});

export default Calculator;
