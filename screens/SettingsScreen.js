/**
 * SettingsScreen.js - App Configuration Screen
 * 
 * This screen provides user configuration options including:
 * 1. Alert preferences and thresholds
 * 2. Camera and detection settings
 * 3. Accessibility options
 * 4. App information and help resources
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {
  // State for toggle settings
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [autoScanEnabled, setAutoScanEnabled] = useState(false);
  const insets = useSafeAreaInsets();

  // Render a single settings item with a toggle
  const SettingsToggleItem = ({ icon, title, description, value, onValueChange }) => (
    <View style={styles.settingsItem}>
      <View style={styles.settingsItemLeft}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={24} color="#00E5FF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.settingsTitle}>{title}</Text>
          <Text style={styles.settingsDescription}>{description}</Text>
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: '#00E5FF' }}
        thumbColor={value ? '#fff' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Settings List */}
      <ScrollView style={styles.settingsList}>
        {/* Notification Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <SettingsToggleItem
            icon="volume-high-outline"
            title="Sound Alerts"
            description="Play sound when objects are detected"
            value={soundEnabled}
            onValueChange={setSoundEnabled}
          />
          <SettingsToggleItem
            icon="vibrate-outline"
            title="Vibration"
            description="Vibrate when objects are detected"
            value={vibrationEnabled}
            onValueChange={setVibrationEnabled}
          />
        </View>

        {/* Scanning Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scanning</Text>
          <SettingsToggleItem
            icon="scan-outline"
            title="Auto-Scan"
            description="Automatically start scanning when app opens"
            value={autoScanEnabled}
            onValueChange={setAutoScanEnabled}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main container styles
  container: {
    flex: 1,
    backgroundColor: '#0A0A16',
  },
  
  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A2F',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginLeft: 15,
  },

  // Settings list styles
  settingsList: {
    flex: 1,
  },
  section: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#00E5FF',
    marginBottom: 15,
    fontWeight: '600',
  },

  // Settings item styles
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A1A2F',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,229,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: 15,
    flex: 1,
  },
  settingsTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  settingsDescription: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
});

export default SettingsScreen; 