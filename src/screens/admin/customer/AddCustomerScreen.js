import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { TextInput, Button, Card, SegmentedButtons, Switch, Text } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const AddCustomerScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [customerData, setCustomerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    notifications: true,
    newsletter: false
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
                  value={customerData.firstName}
                  onChangeText={(text) => setCustomerData({...customerData, firstName: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Last Name"
                  value={customerData.lastName}
                  onChangeText={(text) => setCustomerData({...customerData, lastName: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Email"
                  value={customerData.email}
                  onChangeText={(text) => setCustomerData({...customerData, email: text})}
                  mode="outlined"
                  style={styles.input}
                  keyboardType="email-address"
                />
                <TextInput
                  label="Phone Number"
                  value={customerData.phone}
                  onChangeText={(text) => setCustomerData({...customerData, phone: text})}
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
              <Card.Title title="Address Details" />
              <Card.Content>
                <TextInput
                  label="Street Address"
                  value={customerData.address}
                  onChangeText={(text) => setCustomerData({...customerData, address: text})}
                  mode="outlined"
                  style={styles.input}
                  multiline
                />
                <TextInput
                  label="City"
                  value={customerData.city}
                  onChangeText={(text) => setCustomerData({...customerData, city: text})}
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
              <Card.Title title="Preferences" />
              <Card.Content>
                <View style={styles.preferenceItem}>
                  <Text>Enable Push Notifications</Text>
                  <Switch
                    value={customerData.notifications}
                    onValueChange={(value) => 
                      setCustomerData({...customerData, notifications: value})
                    }
                    color={COLORS.primary}
                  />
                </View>
                <View style={styles.preferenceItem}>
                  <Text>Subscribe to Newsletter</Text>
                  <Switch
                    value={customerData.newsletter}
                    onValueChange={(value) => 
                      setCustomerData({...customerData, newsletter: value})
                    }
                    color={COLORS.primary}
                  />
                </View>
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
          { value: '2', label: 'Address' },
          { value: '3', label: 'Preferences' }
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
          {currentStep === 3 ? 'Add Customer' : 'Next'}
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
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.s,
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

export default AddCustomerScreen;
