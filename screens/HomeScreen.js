import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Text */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ClearGaze</Text>
        <Text style={styles.subHeaderText}>Drive Safe, Stay Alert</Text>
      </View>

      {/* Center Eye Icon */}
      <View style={styles.eyeContainer}>
        <View style={styles.eyeRing}>
          <View style={styles.eyeRing2}>
            <Ionicons name="eye-outline" size={80} color="#00E5FF" />
          </View>
        </View>
      </View>

      {/* Main Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.mainButton}>
          <Ionicons name="camera-outline" size={32} color="#00E5FF" />
          <Text style={styles.mainButtonText}>Start Scanning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Ionicons name="settings-outline" size={24} color="#00E5FF" />
          <Text style={styles.secondaryButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A16',
    padding: 20,
  },
  headerContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 18,
    color: '#00E5FF',
    marginTop: 8,
  },
  eyeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 60,
  },
  eyeRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#00E5FF',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
  },
  eyeRing2: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#00E5FF',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  actionsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  mainButton: {
    backgroundColor: '#1A1A2F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 30,
    width: '100%',
    marginBottom: 15,
  },
  mainButtonText: {
    color: '#00E5FF',
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 12,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#00E5FF',
    width: '60%',
  },
  secondaryButtonText: {
    color: '#00E5FF',
    fontSize: 18,
    marginLeft: 8,
  },
});

export default HomeScreen; 