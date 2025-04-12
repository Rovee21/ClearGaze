import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SettingsScreen = ({ navigation }) => {
  // Example state for settings
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLargeText, setIsLargeText] = useState(false);
  const [useBlueAccent, setUseBlueAccent] = useState(true);

  const SettingItem = ({ icon, title, description, isSwitch, value, onValueChange }) => (
    <View style={styles.settingItem}>
      <View style={styles.settingInfo}>
        <Ionicons name={icon} size={24} color="#00E5FF" style={styles.settingIcon} />
        <View>
          <Text style={styles.settingTitle}>{title}</Text>
          {description && <Text style={styles.settingDescription}>{description}</Text>}
        </View>
      </View>
      {isSwitch ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: '#767577', true: '#00E5FF' }}
          thumbColor={value ? '#fff' : '#f4f3f4'}
        />
      ) : (
        <Ionicons name="chevron-forward" size={24} color="#666" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#00E5FF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Settings List */}
      <ScrollView style={styles.settingsList}>
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Appearance</Text>
          <SettingItem
            icon="moon-outline"
            title="Dark Mode"
            description="Use dark theme"
            isSwitch={true}
            value={isDarkMode}
            onValueChange={setIsDarkMode}
          />
          <SettingItem
            icon="text-outline"
            title="Large Text"
            description="Increase text size"
            isSwitch={true}
            value={isLargeText}
            onValueChange={setIsLargeText}
          />
          <SettingItem
            icon="color-palette-outline"
            title="Blue Accent Color"
            description="Use blue accent color"
            isSwitch={true}
            value={useBlueAccent}
            onValueChange={setUseBlueAccent}
          />
        </View>

        {/* Scan Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Scan Preferences</Text>
          <SettingItem
            icon="scan-outline"
            title="Face Outline Size"
            description="Adjust the size of face guide"
          />
          <SettingItem
            icon="eye-outline"
            title="Distance Guide"
            description="Show distance indicator"
            isSwitch={true}
            value={true}
            onValueChange={() => {}}
          />
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <SettingItem
            icon="information-circle-outline"
            title="Version"
            description="1.0.0"
          />
          <SettingItem
            icon="help-circle-outline"
            title="Help"
            description="View tutorial and FAQ"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A16',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#1A1A2F',
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  settingsList: {
    flex: 1,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#00E5FF',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#1A1A2F',
    marginVertical: 1,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  settingDescription: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
});

export default SettingsScreen; 