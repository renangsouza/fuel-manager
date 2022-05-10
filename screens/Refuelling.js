import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Appbar, Button, RadioButton, Text, TextInput } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment"

import Container from '../components/Container'
import Body from '../components/Body'
import Header from '../components/Header'
import Input from '../components/Input'

const Refuelling = ({ route }) => {

  // navigation stuff
  const navigation = useNavigation();
  const {item} = route.params ? route.params : {}

  // datetimepicker
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false);

  // Variáveis
  const [fuel, setFuel] = React.useState('first')
  const [price, setPrice] = React.useState(null)
  const [odometer, setOdometer] = React.useState(null)
  const [day, setDay] = useState(moment(new Date()).format("YYYY/MM/DD"))
  const [volume, setVolume] = React.useState(null)

  // Funções
  const handleSubmit = () => {
    console.log("A implementar.")
  }

  useEffect(() => {
    if (item) {
      setFuel(item.type == 0 ? "gas" : "ethanol");
      setPrice(item.price);
      setOdometer(item.odometer);
      setVolume(item.volume);
      setDay(item.date);
    }
  }, [item])
  
  return (
    
    <Container>
    {/*<Header goBack={() => navigation.navigate('Main')} title='Add Refueling Data' /> Funciona */}
    <Header goBack={() => navigation.goBack()} title='Add Refueling Data'>
      <Appbar.Action icon="content-save" onPress={handleSubmit} />
    </Header>
      <Body>
        <View style={styles.radioContainer}>
          <View style={styles.radioContainerItem}>
            <RadioButton
              value= 'gas'
              color= 'red'
              status={ fuel === 'gas' ? 'checked' : 'unchecked' }
              onPress={() => setFuel('gas')}
            /><Text>Gas</Text>
          </View>
          <View style={styles.radioContainerItem}>
            <RadioButton
              value= 'gas'
              color= 'green'
              status={ fuel === 'ethanol' ? 'checked' : 'unchecked' }
              onPress={() => setFuel('ethanol')}
            /><Text>Ethanol</Text>          
          </View>
        </View>
        <Input
          label='Price'
          value={price}
          onChangeText={text => setPrice(text)}
          right={<TextInput.Icon name="currency-brl" />}
        />
        <Input
          label='Volume (L)'
          value={volume}
          onChangeText={text => setVolume(text)}
          right={<TextInput.Icon name="gas-station" />}
        />
        <Input
          label='Odometer (KM)'
          value={odometer}
          onChangeText={text => setOdometer(text)}
          right={<TextInput.Icon name="road" />}          
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            display="default"
            is24Hour={true}
            onTouchCancel = {() => setShow(false)}
            onChange={(event, date) => {
              setShow(false)
              setDay(moment(date).format("YYYY/MM/DD"))
            }}
          />
        )}

        <TouchableOpacity onPress={() => setShow(true)}>
        <Input
          label='Year/Month/Day'
          value={day}
          right={<TextInput.Icon name="calendar-month" />}
          editable={false}
        />
        </TouchableOpacity>
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleSubmit}
        >
          Save
        </Button>
        {item && <Button
          style={styles.button}
          mode="contained"
          onPress={handleSubmit}
        >
          Delete
        </Button>}
      </Body>
    </Container>

  )
}

const styles = StyleSheet.create({
  radioContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 8
  },
  radioContainerItem:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  button:{
    marginTop: 8,
    marginHorizontal: 8
  }
})

export default Refuelling