import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import LittleLemonLogo from '../assets/little-lemon-logo.png';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
  <View style={styles.container}>
    <Image 
      source={LittleLemonLogo} 
      style={styles.image} 
      accessible
      accessibilityLabel='Little Lemon Logo'
      />
    <Text style={styles.welcomeText}>
      Little Lemon, your local Mediterranean Bistro
    </Text>
    <Pressable 
    onPress={() => navigation.navigate('Subscribe')}
    style={styles.buttonStyles}
    >
        <Text style={styles.buttonText}>
          Newsletter
        </Text>
    </Pressable>
  </View>
  );
};

export default WelcomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 100,
    marginBottom: 20,
    alignSelf: 'center'
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 40,
  },
  buttonStyles: {
    marginTop: 'auto',
    marginBottom: 75,
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