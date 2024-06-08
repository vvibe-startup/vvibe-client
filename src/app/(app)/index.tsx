import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { Text, View } from '@/ui';

const fakeData = [
  {
    id: 1,
    isActive: true,
    gender: 'male',
    age: 25,
    income: 50000,
    maritalStatus: 'single',
  },
  {
    id: 2,
    isActive: false,
    gender: 'female',
    age: 30,
    income: 60000,
    maritalStatus: 'married',
  },
  {
    id: 3,
    isActive: true,
    gender: 'male',
    age: 35,
    income: 70000,
    maritalStatus: 'single',
  },
  {
    id: 4,
    isActive: true,
    gender: 'female',
    age: 40,
    income: 80000,
    maritalStatus: 'married',
  },
  {
    id: 5,
    isActive: false,
    gender: 'male',
    age: 45,
    income: 90000,
    maritalStatus: 'single',
  },
];

const HomeScreen = () => {
  const data = fakeData;
  const [filter, setFilter] = useState({
    age: '',
    income: '',
    maritalStatus: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, [key]: value }));
  };

  // Calculate the number of active users
  const activeUsers = data?.filter((user) => user.isActive).length || 0;
  // Calculate the number of male users
  const maleUsers = data?.filter((user) => user.gender === 'male').length || 0;
  // Calculate the number of female users
  const femaleUsers =
    data?.filter((user) => user.gender === 'female').length || 0;

  return (
    <View className="flex-1">
      <Text>Stats</Text>
      <Text>Number of active users: {activeUsers}</Text>
      <Text>Number of male users: {maleUsers}</Text>
      <Text>Number of female users: {femaleUsers}</Text>
      <View>
        <Text>Filter by:</Text>
        <Text>Income:</Text>
        <Text>Age</Text>
        <Text>Distance</Text>
        <TextInput
          placeholder="Marital Status"
          value={filter.maritalStatus}
          onChangeText={(value) => handleFilterChange('maritalStatus', value)}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
