import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';

const DocumentManagementScreen = () => {
  const forms = [{
    id: 1,
    name: 'Pre-Visit Form',
    description: 'This form needs to be completed before your appointment.'
  }, {
    id: 2,
    name: 'Post-Visit Survey',
    description: 'Please fill this survey to provide feedback about your experience.'
  }];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Document Management for Visit Forms and Post-Visit Surveys</Text>
        {forms.map(form => <View key={form.id} style={styles.card}>
            <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
            <Text style={styles.cardTitle}>{form.name}</Text>
            <Text style={styles.cardDescription}>{form.description}</Text>
            <Button title="Access Form" onPress={() => {}} />
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20
  }
});
export default DocumentManagementScreen;