import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FAB, List, Text } from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';
import { retrieveExpense } from "../services/ExpensesDBServices"

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Expenses = () => {

  const navigation = useNavigation()
  const isFocused = useIsFocused()
  
  const [expense, setExpense] = useState([])

   useEffect(() => {
    retrieveExpense().then((retrieved_data)=>{
      console.log(retrieved_data);
      setExpense(retrieved_data)
    });

  },[isFocused]);
  
  const renderItem = ({ item }) => (
    <List.Item
      title={'R$ ' + item.value.toFixed(2) + " (" + item.volume.toFixed(2) + " L)"}
      description={item.odometer + ' km'}
      left={props => <List.Icon {...props} color={(item.fuel == 0 ? 'red' : 'green')} icon='gas-station' />}
      right={props => <Text style={{alignSelf: 'center'}}> {item.date} </Text>}
      onPress={() => navigation.navigate("Refuelling", {item})}
    />
  );

  return (
    <Container>
      <Header title={'Fuel Expenses'} />
      <Body>        
        <FlatList
          data={expense}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon='plus'
          onPress={() => navigation.navigate('Refuelling')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
    fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Expenses;