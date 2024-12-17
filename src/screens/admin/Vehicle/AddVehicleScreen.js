import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Card, SegmentedButtons } from 'react-native-paper';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const AddVehicleScreen = ({ navigation }) => {
  const [vehicleData, setVehicleData] = useState({
    name: '',
    plateNumber: '',
    type: 'van',
    capacity: '',
    manufacturer: '',
    model: '',
    year: ''
  });

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Animated.View entering={FadeInUp.duration(500)}>
            <TextInput
              label="Vehicle Name"
              value={vehicleData.name}
              onChangeText={(text) => setVehicleData({...vehicleData, name: text})}
              mode="outlined"
              style={styles.input}
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.duration(500).delay(100)}>
            <TextInput
              label="Plate Number"
              value={vehicleData.plateNumber}
              onChangeText={(text) => setVehicleData({...vehicleData, plateNumber: text})}
              mode="outlined"
              style={styles.input}
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.duration(500).delay(200)}>
            <SegmentedButtons
              value={vehicleData.type}
              onValueChange={(value) => setVehicleData({...vehicleData, type: value})}
              buttons={[
                { value: 'van', label: 'Van' },
                { value: 'truck', label: 'Truck' },
                { value: 'car', label: 'Car' },
              ]}
              style={styles.segmentedButton}
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.duration(500).delay(300)}>
            <TextInput
              label="Capacity"
              value={vehicleData.capacity}
              onChangeText={(text) => setVehicleData({...vehicleData, capacity: text})}
              mode="outlined"
              keyboardType="numeric"
              style={styles.input}
            />
          </Animated.View>

          <Animated.View entering={FadeInUp.duration(500).delay(400)}>
            <TextInput
              label="Manufacturer"
              value={vehicleData.manufacturer}
              onChangeText={(text) => setVehicleData({...vehicleData, manufacturer: text})}
              mode="outlined"
              style={styles.input}
            />
          </Animated.View>

          <Button
            mode="contained"
            onPress={() => {}}
            style={styles.button}
            buttonColor={COLORS.primary}
          >
            Add Vehicle
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  card: {
    margin: SPACING.m,
    backgroundColor: COLORS.white,
  },
  content: {
    gap: SPACING.m,
  },
  input: {
    backgroundColor: COLORS.white,
  },
  segmentedButton: {
    marginVertical: SPACING.s,
  },
  button: {
    marginTop: SPACING.m,
  }
});

export default AddVehicleScreen;
