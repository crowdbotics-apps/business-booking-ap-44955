import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TextInput } from 'react-native';

const ClientScreen = () => {
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState([{
    id: '1',
    name: 'John Doe',
    contact: '1234567890',
    appointmentHistory: 'Haircut',
    notes: 'Allergic to certain products'
  }, {
    id: '2',
    name: 'Jane Doe',
    contact: '0987654321',
    appointmentHistory: 'Manicure',
    notes: 'Prefers vegan products'
  } // Add more clients as needed
  ]);

  const renderItem = ({
    item
  }) => <View style={_styles.TuJCsCtA}>
      <Text style={_styles.IaQFxtUz}>{item.name}</Text>
      <Text>Contact: {item.contact}</Text>
      <Text>Appointment History: {item.appointmentHistory}</Text>
      <Text>Notes: {item.notes}</Text>
    </View>;

  return <SafeAreaView style={_styles.xfpWDmKW}>
      <View style={_styles.STkAbYRP}>
        <TextInput style={_styles.ruOkwlpe} onChangeText={text => setSearch(text)} value={search} placeholder="Search clients" />
      </View>
      <FlatList data={clients.filter(client => client.name.toLowerCase().includes(search.toLowerCase()))} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

export default ClientScreen;

const _styles = StyleSheet.create({
  TuJCsCtA: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  IaQFxtUz: {
    fontSize: 18,
    fontWeight: "bold"
  },
  xfpWDmKW: {
    flex: 1,
    backgroundColor: "#fff"
  },
  STkAbYRP: {
    padding: 10
  },
  ruOkwlpe: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10
  }
});