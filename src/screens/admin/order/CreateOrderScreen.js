import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TextInput, Button, SegmentedButtons, Card, List } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const CreateOrderScreen = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    customerName: '',
    service: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    { id: 1, name: 'Moving Service', price: '$250' },
    { id: 2, name: 'Delivery', price: '$120' },
    { id: 3, name: 'Courier', price: '$80' }
  ];

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Customer Information" />
              <Card.Content>
                <TextInput
                  label="Customer Name"
                  value={orderData.customerName}
                  onChangeText={(text) => setOrderData({...orderData, customerName: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Phone Number"
                  mode="outlined"
                  style={styles.input}
                  keyboardType="phone-pad"
                />
                <TextInput
                  label="Email"
                  mode="outlined"
                  style={styles.input}
                  keyboardType="email-address"
                />
              </Card.Content>
            </Card>
          </Animated.View>
        );
      
      case 2:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Service Selection" />
              <Card.Content>
                {services.map((service) => (
                  <List.Item
                    key={service.id}
                    title={service.name}
                    description={service.price}
                    onPress={() => setOrderData({...orderData, service: service.name})}
                    right={props => 
                      orderData.service === service.name ? 
                      <List.Icon {...props} icon="check" color={COLORS.primary} /> : null
                    }
                    style={styles.serviceItem}
                  />
                ))}
              </Card.Content>
            </Card>
          </Animated.View>
        );
      
      case 3:
        return (
          <Animated.View entering={FadeInRight.duration(300)}>
            <Card style={styles.card}>
              <Card.Title title="Location Details" />
              <Card.Content>
                <TextInput
                  label="Pickup Location"
                  value={orderData.pickup}
                  onChangeText={(text) => setOrderData({...orderData, pickup: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Dropoff Location"
                  value={orderData.dropoff}
                  onChangeText={(text) => setOrderData({...orderData, dropoff: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Date"
                  value={orderData.date}
                  onChangeText={(text) => setOrderData({...orderData, date: text})}
                  mode="outlined"
                  style={styles.input}
                />
                <TextInput
                  label="Additional Notes"
                  value={orderData.notes}
                  onChangeText={(text) => setOrderData({...orderData, notes: text})}
                  mode="outlined"
                  multiline
                  numberOfLines={4}
                  style={styles.input}
                />
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
          { value: '1', label: 'Customer' },
          { value: '2', label: 'Service' },
          { value: '3', label: 'Details' }
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
          {currentStep === 3 ? 'Create Order' : 'Next'}
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
  serviceItem: {
    borderRadius: 8,
    marginBottom: SPACING.s,
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

export default CreateOrderScreen;
