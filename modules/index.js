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
  return <SafeAreaView style={_styles.QuPGEAAv}>
      <ScrollView>
        <View style={_styles.OBVtBcUt}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.YhyfLFkN} />
          <Text style={_styles.oQDSTVZj}>
            {clientData.name}
          </Text>
          <Text style={_styles.RGBOsBFm}>
            {clientData.contact}
          </Text>
        </View>
        <View style={_styles.jeZthQZy}>
          <Text style={_styles.BFuJWcOz}>
            Appointment History
          </Text>
          {clientData.appointmentHistory.map((appointment, index) => <View key={index} style={_styles.oDSksOus}>
              <Text style={_styles.nfCXBAjQ}>
                {appointment.date} - {appointment.service}
              </Text>
            </View>)}
        </View>
        <View style={_styles.cMJyhyLz}>
          <Text style={_styles.BYWugetb}>
            Notes
          </Text>
          <Text style={_styles.dfcPqocv}>{clientData.notes}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ClientProfileScreen;

const _styles = StyleSheet.create({
  QuPGEAAv: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  OBVtBcUt: {
    alignItems: "center",
    padding: 20
  },
  YhyfLFkN: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  oQDSTVZj: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  },
  RGBOsBFm: {
    fontSize: 16,
    color: "gray",
    marginTop: 5
  },
  jeZthQZy: {
    padding: 20
  },
  BFuJWcOz: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  oDSksOus: {
    marginBottom: 10
  },
  nfCXBAjQ: {
    fontSize: 16
  },
  cMJyhyLz: {
    padding: 20
  },
  BYWugetb: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  dfcPqocv: {
    fontSize: 16
  }
});