import React, { useState } from 'react';
import { Alert, Text, Image, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import LittleLemonLogo from '../assets/little-lemon-logo-grey.png';
import { validateEmail } from "../utils/index"

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const isValid = validateEmail(email);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}
    >
      <ScrollView style={styles.container}>
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
          <Text style={[styles.buttonText, !isValid && {backgroundColor: '#ccc'}]}>
            Subscribe
          </Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginTop: 100,
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