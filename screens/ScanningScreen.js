/**
 * ScanningScreen.js - Camera and Object Detection Screen
 * 
 * This screen handles:
 * 1. Camera access and preview
 * 2. Real-time object detection
 * 3. Visual feedback for detected objects
 * 4. Audio feedback for important alerts
 */

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Audio } from 'expo-av';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IDEAL_DISTANCE = 30; // cm - this will be used when we implement actual distance detection
const DISTANCE_TOLERANCE = 5; // cm

const ScanningScreen = ({ navigation }) => {
  // State management for permissions and camera
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const insets = useSafeAreaInsets();

  // Request camera permissions on mount
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Handle permission states
  if (hasPermission === null) {
    return <View style={styles.container}><Text style={styles.text}>Requesting camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.container}><Text style={styles.text}>No access to camera</Text></View>;
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Camera Preview */}
      <Camera 
        style={styles.camera} 
        type={type}
        ref={cameraRef}
      >
        {/* Camera UI Overlay */}
        <View style={styles.overlay}>
          {/* Top Bar with Controls */}
          <View style={styles.topBar}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={30} color="white" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Ionicons name="camera-reverse-outline" size={30} color="white" />
            </TouchableOpacity>
          </View>

          {/* Scanning Indicator */}
          <View style={styles.scanningIndicator}>
            <Text style={styles.scanningText}>Scanning...</Text>
          </View>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main container and camera styles
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
  },
  
  // UI overlay styles
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
  },
  
  // Scanning indicator styles
  scanningIndicator: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  scanningText: {
    color: '#00E5FF',
    fontSize: 16,
  },
  
  // Permission and error message styles
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ScanningScreen; 