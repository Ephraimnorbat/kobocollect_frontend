import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TextInput, Button, Card, SegmentedButtons, List } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const AddDriverScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [driverData, setDriverData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    vehicleType: '',
    vehiclePlate: ''
  });

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Personal Information" />
              <Card.Content>
                <TextInput
                  label="First Name"
                  value={driverData.firstName}
                  onChangeText={(text) => setDriverData({...driverData, firstName: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Last Name"
                  value={driverData.lastName}
                  onChangeText={(text) => setDriverData({...driverData, lastName: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Email"
                  value={driverData.email}
                  onChangeText={(text) => setDriverData({...driverData, email: text})}
                  mode="outlined"
                  style={styles.input}
                  keyboardType="email-address"
                />
                <TextInput
                  label="Phone Number"
                  value={driverData.phone}
                  onChangeText={(text) => setDriverData({...driverData, phone: text})}
                  mode="outlined"
                  style={styles.input}
                  keyboardType="phone-pad"
                />
              </Card.Content>
            </Card>
          </Animated.View>
        );
      
      case 2:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Vehicle Information" />
              <Card.Content>
                <List.Section>
                  <List.Subheader>Select Vehicle Type</List.Subheader>
                  {['Van', 'Truck', 'Car'].map((type) => (
                    <List.Item
                      key={type}
                      title={type}
                      onPress={() => setDriverData({...driverData, vehicleType: type})}
                      right={props => 
                        driverData.vehicleType === type ? 
                        <List.Icon {...props} icon="check" color={COLORS.primary} /> : null
                      }
                    />
                  ))}
                </List.Section>
                <TextInput
                  label="Vehicle Plate Number"
                  value={driverData.vehiclePlate}
                  onChangeText={(text) => setDriverData({...driverData, vehiclePlate: text})}
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
                  Upload Driver's License
                </Button>
                <Button 
                  mode="outlined"
                  icon="upload"
                  onPress={() => {}}
                  style={styles.uploadButton}
                >
                  Upload Vehicle Registration
                </Button>
                <Button 
                  mode="outlined"
                  icon="upload"
                  onPress={() => {}}
                  style={styles.uploadButton}
                >
                  Upload Insurance Documents
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
          { value: '1', label: 'Personal' },
          { value: '2', label: 'Vehicle' },
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
          {currentStep === 3 ? 'Add Driver' : 'Next'}
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

export default AddDriverScreen;
