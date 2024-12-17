import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TextInput, Button, Card, SegmentedButtons, List } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const AddVehicleScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleData, setVehicleData] = useState({
    model: '',
    type: '',
    plateNumber: '',
    year: '',
    vin: '',
    capacity: '',
    fuelType: ''
  });

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Basic Information" />
              <Card.Content>
                <TextInput
                  label="Vehicle Model"
                  value={vehicleData.model}
                  onChangeText={(text) => setVehicleData({...vehicleData, model: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Plate Number"
                  value={vehicleData.plateNumber}
                  onChangeText={(text) => setVehicleData({...vehicleData, plateNumber: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Manufacturing Year"
                  value={vehicleData.year}
                  onChangeText={(text) => setVehicleData({...vehicleData, year: text})}
                  mode="outlined"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </Card.Content>
            </Card>
          </Animated.View>
        );
      
      case 2:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Vehicle Specifications" />
              <Card.Content>
                <List.Section>
                  <List.Subheader>Select Vehicle Type</List.Subheader>
                  {['Van', 'Truck', 'Car'].map((type) => (
                    <List.Item
                      key={type}
                      title={type}
                      onPress={() => setVehicleData({...vehicleData, type})}
                      right={props => 
                        vehicleData.type === type ? 
                        <List.Icon {...props} icon="check" color={COLORS.primary} /> : null
                      }
                    />
                  ))}
                </List.Section>
                <TextInput
                  label="Cargo Capacity (kg)"
                  value={vehicleData.capacity}
                  onChangeText={(text) => setVehicleData({...vehicleData, capacity: text})}
                  mode="outlined"
                  style={styles.input}
                  keyboardType="numeric"
                />
                <TextInput
                  label="Fuel Type"
                  value={vehicleData.fuelType}
                  onChangeText={(text) => setVehicleData({...vehicleData, fuelType: text})}
                  mode="outlined"
                  style={styles.input}
                />
              </Card.Content>
            </Card>
          </Animated.View>
        );
      
      case 3:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Documents" />
              <Card.Content>
                <Button 
                  mode="outlined"
                  icon="upload"
                  onPress={() => {}}
                  style={styles.uploadButton}
                >
                  Upload Registration Certificate
                </Button>
                <Button 
                  mode="outlined"
                  icon="upload"
                  onPress={() => {}}
                  style={styles.uploadButton}
                >
                  Upload Insurance Documents
                </Button>
                <Button 
                  mode="outlined"
                  icon="upload"
                  onPress={() => {}}
                  style={styles.uploadButton}
                >
                  Upload Inspection Report
                </Button>
              </Card.Content>
            </Card>
          </Animated.View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={currentStep.toString()}
        onValueChange={() => {}}
        buttons={[
          { value: '1', label: 'Basic' },
          { value: '2', label: 'Specs' },
          { value: '3', label: 'Documents' }
        ]}
        style={styles.stepIndicator}
      />
      
      <ScrollView style={styles.content}>
        {renderStep()}
      </ScrollView>

      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <Button 
            mode="outlined"
            onPress={() => setCurrentStep(currentStep - 1)}
            style={styles.button}
            textColor={COLORS.primary}
          >
            Previous
          </Button>
        )}
        <Button 
          mode="contained"
          onPress={() => {
            if (currentStep < 3) setCurrentStep(currentStep + 1);
            else navigation.goBack();
          }}
          style={[styles.button, styles.nextButton]}
          buttonColor={COLORS.primary}
        >
          {currentStep === 3 ? 'Add Vehicle' : 'Next'}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  stepIndicator: {
    margin: SPACING.m,
  },
  content: {
    flex: 1,
  },
  card: {
    margin: SPACING.m,
    backgroundColor: COLORS.white,
  },
  input: {
    marginBottom: SPACING.m,
    backgroundColor: COLORS.white,
  },
  uploadButton: {
    marginBottom: SPACING.m,
    borderColor: COLORS.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: SPACING.m,
    backgroundColor: COLORS.white,
    elevation: 4,
  },
  button: {
    flex: 1,
    marginHorizontal: SPACING.xs,
  },
  nextButton: {
    flex: 2,
  }
});

export default AddVehicleScreen;
