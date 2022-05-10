import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FAB, List, Text } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import Container from '../components/Container';
import Body from '../components/Body';
import Header from '../components/Header';

const DATA = [
  {
    id: 1,
    tipo: 0,
    date: '25/04/2022',
    value: 67.18,
    odometer: '????????'
  },
  {
    id: 2,
    tipo: 0,
    date: '13/03/2022',
    value: 57.21,
    odometer: '????????'
  },
  {
    id: 3,
    tipo: 0,
    date: '11/01/2022',
    value: 53.24,
    odometer: '????????'
  },
  {
    id: 4,
    tipo: 1,
    date: '01/01/2022',
    value: 22.24,
    odometer: '????????'
  }
]

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Expenses = () => {

  const navigation = useNavigation();
  
  const renderItem = ({ item }) => (
    <List.Item
      title={'R$ ' + item.value.toFixed(2)}
      description={item.odometer + ' km'}
      left={props => <List.Icon {...props} color={(item.tipo == 0 ? 'red' : 'green')} icon='gas-station' />}
      right={props => <Text style={{alignSelf: 'center'}}> {item.date} </Text>}
    />
  );

  return (
    <Container>
      <Header title={'Fuel Expenses'} />
      <Body>        
        <FlatList
          data={DATA}
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