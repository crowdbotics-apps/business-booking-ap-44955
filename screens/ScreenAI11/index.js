import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const EducationScreen = () => {
  const dummyData = [{
    id: '1',
    title: 'Appointment Preparation',
    description: 'Learn how to prepare for your upcoming appointment.'
  }, {
    id: '2',
    title: 'Procedure Information',
    description: 'Understand the details of your upcoming procedure.'
  }, {
    id: '3',
    title: 'Post-Procedure Care',
    description: 'Learn how to take care of yourself after the procedure.'
  }];
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Educational Material & Preparation Information</Text>
      <ScrollView>
        {dummyData.map(item => <View key={item.id} style={styles.card}>
            <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    margin: 10
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 20
  }
});
export default EducationScreen;