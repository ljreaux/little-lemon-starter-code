import React, { useState } from 'react';
import { Alert, View, Text, Image, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import LittleLemonLogo from '../assets/little-lemon-logo-grey.png';
import { validateEmail } from "../utils/index"

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const isValid = validateEmail(email);

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <View style={styles.contentContainer}>
        <Image source={LittleLemonLogo} style={styles.image} />
        <Text style={styles.subscribeText}>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder='Type your email'
          keyboardType='email-address'
          style={styles.inputStyles}
        />
        <Pressable
          onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}
          style={styles.buttonStyles}
          disabled={!isValid}
        >
          <Text style={[styles.buttonText, !isValid && { backgroundColor: '#ccc' }]}>
            Subscribe
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>

  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center'
  },
  subscribeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: '#3E524B',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    width: '80%',
    alignSelf: 'center'
  },
  buttonStyles: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 100
  },
  buttonText: {
    flex: .8,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#3E524B',
    color: 'white',
    padding: 10,
    
  }
})