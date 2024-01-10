// src/screens/HomeScreen.js
import React from 'react';
import { View } from 'react-native';
import BalanceComponent from '../components/BalanceComponent';

const HomeScreen = () => {
  const userBalance = 1000; // Replace with your logic to fetch user balance

  return (
    <View>
      <BalanceComponent balance={userBalance} />
    </View>
  );
};

export default HomeScreen;
