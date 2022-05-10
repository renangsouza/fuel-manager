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
    type: 0,
    date: '25/04/2022',
    price: 67.18,
    odometer: '3760',
    volume: 9
  },
  {
    id: 4,
    type: 1,
    date: '01/01/2022',
    price: 22.24,
    odometer: '????????',
    volume: 9
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
      title={'R$ ' + item.price.toFixed(2)}
      description={item.volume + " L" + "\n" + item.odometer + ' km'}
      left={props => <List.Icon {...props} color={(item.type == 0 ? 'red' : 'green')} icon='gas-station' />}
      right={props => <Text style={{alignSelf: 'center'}}> {item.date} </Text>}
      onPress={() => navigation.navigate("Refuelling", {item})}
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