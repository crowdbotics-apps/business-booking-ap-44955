import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const departments = [{
  id: '1',
  name: 'Department 1',
  description: 'This is department 1'
}, {
  id: '2',
  name: 'Department 2',
  description: 'This is department 2'
}, {
  id: '3',
  name: 'Department 3',
  description: 'This is department 3'
} // Add more departments as needed
];

const DepartmentScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({
    item
  }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return <TouchableOpacity onPress={() => setSelectedId(item.id)} style={[styles.item, {
      backgroundColor
    }]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>;
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Overview and Selection of Department/Service</Text>
        <Image style={styles.headerImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <FlatList data={departments} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedId} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  headerImage: {
    width: 50,
    height: 50
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14
  }
});
export default DepartmentScreen;