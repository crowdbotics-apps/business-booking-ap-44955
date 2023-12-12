import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, FlatList } from 'react-native';

const FeedbackScreen = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [reviews, setReviews] = useState([{
    id: '1',
    rating: 5,
    feedback: 'Great service!'
  }, {
    id: '2',
    rating: 4,
    feedback: 'Good experience overall.'
  }, {
    id: '3',
    rating: 3,
    feedback: 'Average service.'
  }]);

  const submitFeedback = () => {
    setReviews([...reviews, {
      id: Math.random().toString(),
      rating,
      feedback
    }]);
    setRating(0);
    setFeedback('');
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Feedback and Reviews System</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Rate your experience (1-5)" keyboardType="numeric" value={rating.toString()} onChangeText={text => setRating(Number(text))} />
        <TextInput style={styles.input} placeholder="Leave your feedback" multiline value={feedback} onChangeText={setFeedback} />
        <Button title="Submit Feedback" onPress={submitFeedback} />
      </View>
      <FlatList data={reviews} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.review}>
            <Text style={styles.reviewText}>Rating: {item.rating}/5</Text>
            <Text style={styles.reviewText}>{item.feedback}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  review: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10
  },
  reviewText: {
    fontSize: 16
  }
});
export default FeedbackScreen;