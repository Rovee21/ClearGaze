/**
 * HomeScreen.js - Main Landing Screen
 * 
 * This is the primary screen users see when opening the app. It features:
 * 1. A distinctive eye icon with animated rings
 * 2. Main action button for starting the scanning process
 * 3. Secondary button for accessing settings
 * 4. Custom styled components following the app's dark theme
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section - App Title and Tagline */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>ClearGaze</Text>
        <Text style={styles.subHeaderText}>Drive Safe, Stay Alert</Text>
      </View>

      {/* Eye Icon Section - Visual Brand Element */}
      <View style={styles.eyeContainer}>
        <View style={styles.eyeRing}>
          <View style={styles.eyeRing2}>
            <Ionicons name="eye-outline" size={80} color="#00E5FF" />
          </View>
        </View>
      </View>

      {/* Action Buttons Section */}
      <View style={styles.actionsContainer}>
        {/* Primary Action - Start Scanning Button */}
        <TouchableOpacity 
          style={styles.mainButton}
          onPress={() => navigation.navigate('Scanning')}
        >
          <Ionicons name="camera-outline" size={32} color="#00E5FF" />
          <Text style={styles.mainButtonText}>Start Scanning</Text>
        </TouchableOpacity>
        
        {/* Secondary Action - Settings Button */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings-outline" size={24} color="#00E5FF" />
          <Text style={styles.secondaryButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles organized by component sections
const styles = StyleSheet.create({
  // Container and Header Styles
  container: {
    flex: 1,
    backgroundColor: '#0A0A16', // Dark theme background
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
    color: '#00E5FF', // Cyan accent color
    marginTop: 8,
  },

  // Eye Icon and Rings Styles
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

  // Action Buttons Styles
  actionsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  mainButton: {
    backgroundColor: '#1A1A2F', // Slightly lighter than background
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