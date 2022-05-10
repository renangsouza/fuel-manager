import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Calculator from './Calculator'
import Expenses from './Expenses'

const Main = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    { key: 'expenses', title: 'Expenses', icon: 'gas-station' },
    { key: 'calculator', title: 'Calculator', icon: 'calculator' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    expenses: Expenses,
    calculator: Calculator
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Main;