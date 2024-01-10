// src/components/BalanceComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const BalanceComponent = ({ balance }) => {
  return (
    <View>
      <Text>Your Balance: ${balance}</Text>
    </View>
  );
};

export default BalanceComponent;
