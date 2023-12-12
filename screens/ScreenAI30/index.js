import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView } from 'react-native';

const ClientProfileScreen = () => {
  const clientData = {
    name: 'John Doe',
    contact: 'johndoe@example.com',
    appointmentHistory: [{
      date: '2021-09-01',
      service: 'Haircut'
    }, {
      date: '2021-08-01',
      service: 'Shave'
    }, {
      date: '2021-07-01',
      service: 'Haircut & Shave'
    }],
    notes: 'Prefers minimal conversation during service.'
  };
  return <SafeAreaView style={_styles.fJHtrrgH}>
      <ScrollView>
        <View style={_styles.WvlkobLm}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.jCPrNgAg} />
          <Text style={_styles.iedkNWSJ}>
            {clientData.name}
          </Text>
          <Text style={_styles.BuvhZTck}>
            {clientData.contact}
          </Text>
        </View>
        <View style={_styles.JfdmrXQL}>
          <Text style={_styles.VAFIQjcO}>
            Appointment History
          </Text>
          {clientData.appointmentHistory.map((appointment, index) => <View key={index} style={_styles.vTsAQXXf}>
              <Text style={_styles.dEnwciKB}>
                {appointment.date} - {appointment.service}
              </Text>
            </View>)}
        </View>
        <View style={_styles.LDgilQmA}>
          <Text style={_styles.oKCoYwQM}>
            Notes
          </Text>
          <Text style={_styles.mKxXyRKV}>{clientData.notes}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ClientProfileScreen;

const _styles = StyleSheet.create({
  fJHtrrgH: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  WvlkobLm: {
    alignItems: "center",
    padding: 20
  },
  jCPrNgAg: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  iedkNWSJ: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  BuvhZTck: {
    fontSize: 16,
    color: "gray",
    marginTop: 5
  },
  JfdmrXQL: {
    padding: 20
  },
  VAFIQjcO: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  vTsAQXXf: {
    marginBottom: 10
  },
  dEnwciKB: {
    fontSize: 16
  },
  LDgilQmA: {
    padding: 20
  },
  oKCoYwQM: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  mKxXyRKV: {
    fontSize: 16
  }
});