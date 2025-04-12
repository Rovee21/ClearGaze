import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';

const IDEAL_DISTANCE = 30; // cm - this will be used when we implement actual distance detection
const DISTANCE_TOLERANCE = 5; // cm

const ScanningScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isTooClose, setIsTooClose] = useState(false);
  const [isTooFar, setIsTooFar] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View style={styles.container}><Text style={styles.text}>Requesting camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.container}><Text style={styles.text}>No access to camera</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera}>
        {/* Overlay for guidance */}
        <View style={styles.overlay}>
          {/* Distance Indicator */}
          <View style={styles.distanceIndicator}>
            <Ionicons 
              name={isTooClose ? "arrow-back" : isTooFar ? "arrow-forward" : "checkmark-circle"} 
              size={32} 
              color={isTooClose || isTooFar ? "#FF3B30" : "#4CD964"}
            />
            <Text style={[
              styles.distanceText,
              { color: isTooClose || isTooFar ? "#FF3B30" : "#4CD964" }
            ]}>
              {isTooClose ? "Move back" : isTooFar ? "Move closer" : "Perfect distance"}
            </Text>
          </View>

          {/* Face Outline Guide */}
          <View style={styles.faceGuide}>
            <View style={styles.faceOutline} />
          </View>

          {/* Instructions */}
          <View style={styles.instructions}>
            <Text style={styles.instructionText}>
              Position your face within the outline
            </Text>
            <Text style={styles.instructionText}>
              Keep your eyes open and look straight ahead
            </Text>
          </View>

          {/* Close Button */}
          <TouchableOpacity 
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="close-circle" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  distanceIndicator: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  distanceText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: '600',
  },
  faceGuide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceOutline: {
    width: 280,
    height: 350,
    borderWidth: 2,
    borderColor: '#00E5FF',
    borderRadius: 140,
    opacity: 0.8,
  },
  instructions: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 20,
  },
  instructionText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 2,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ScanningScreen; 