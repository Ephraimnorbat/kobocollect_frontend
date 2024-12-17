import React, { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Card, Text, Avatar, Button, List } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const OrderTrackingScreen = ({ route }) => {
  const { order } = route.params;
  
  const trackingSteps = [
    { title: 'Order Received', time: '10:00 AM', completed: true },
    { title: 'Driver Assigned', time: '10:15 AM', completed: true },
    { title: 'En Route to Pickup', time: '10:30 AM', completed: true },
    { title: 'At Pickup Location', time: '10:45 AM', completed: false },
    { title: 'In Transit', time: '--:--', completed: false },
    { title: 'Delivered', time: '--:--', completed: false },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapText}>Map View</Text>
      </View>

      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.driverCard}>
          <Card.Title
            title="Driver Information"
            left={(props) => (
              <Avatar.Icon {...props} icon="account" backgroundColor={COLORS.primary} />
            )}
          />
          <Card.Content style={styles.driverInfo}>
            <View>
              <Text style={styles.driverName}>{order.driver}</Text>
              <Text style={styles.vehicleInfo}>Toyota Hiace (ABC-123)</Text>
            </View>
            <Button 
              mode="contained" 
              icon="phone"
              onPress={() => {}}
              buttonColor={COLORS.primary}
            >
              Contact
            </Button>
          </Card.Content>
        </Card>

        <Card style={styles.trackingCard}>
          <Card.Title title="Delivery Progress" />
          <Card.Content>
            {trackingSteps.map((step, index) => (
              <List.Item
                key={index}
                title={step.title}
                description={step.time}
                left={props => (
                  <List.Icon 
                    {...props} 
                    icon={step.completed ? "check-circle" : "circle-outline"}
                    color={step.completed ? COLORS.success : COLORS.secondary}
                  />
                )}
                titleStyle={step.completed ? styles.completedStep : styles.pendingStep}
              />
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.etaCard}>
          <Card.Content style={styles.etaContent}>
            <View>
              <Text style={styles.etaLabel}>Estimated Time of Arrival</Text>
              <Text style={styles.etaTime}>11:30 AM</Text>
            </View>
            <View>
              <Text style={styles.distanceLabel}>Distance Remaining</Text>
              <Text style={styles.distance}>5.2 km</Text>
            </View>
          </Card.Content>
        </Card>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  mapPlaceholder: {
    height: Dimensions.get('window').height * 0.3,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapText: {
    color: COLORS.primary,
    fontSize: 18,
  },
  driverCard: {
    margin: SPACING.m,
    backgroundColor: COLORS.white,
  },
  driverInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vehicleInfo: {
    color: COLORS.secondary,
  },
  trackingCard: {
    margin: SPACING.m,
    marginTop: 0,
    backgroundColor: COLORS.white,
  },
  completedStep: {
    color: COLORS.success,
  },
  pendingStep: {
    color: COLORS.secondary,
  },
  etaCard: {
    margin: SPACING.m,
    marginTop: 0,
    backgroundColor: COLORS.white,
  },
  etaContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  etaLabel: {
    color: COLORS.secondary,
  },
  etaTime: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  distanceLabel: {
    color: COLORS.secondary,
    textAlign: 'right',
  },
  distance: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  }
});

export default OrderTrackingScreen;
