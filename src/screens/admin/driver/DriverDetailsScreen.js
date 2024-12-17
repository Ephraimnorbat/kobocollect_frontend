import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Avatar, Text, Button, List, Divider, DataTable } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const DriverDetailsScreen = ({ route }) => {
  const { driver } = route.params;
  
  const performanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      data: [12, 15, 10, 18, 14, 16]
    }]
  };

  const recentDeliveries = [
    { id: 1, orderNo: 'ORD001', date: '2024-02-10', status: 'Completed' },
    { id: 2, orderNo: 'ORD002', date: '2024-02-09', status: 'Completed' },
    { id: 3, orderNo: 'ORD003', date: '2024-02-08', status: 'Completed' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Avatar.Image 
              size={100} 
              source={{ uri: driver.photo }}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{driver.name}</Text>
              <Text style={styles.vehicleInfo}>{driver.vehicle}</Text>
              <Button 
                mode="contained" 
                icon="phone"
                onPress={() => {}}
                style={styles.contactButton}
                buttonColor={COLORS.primary}
              >
                Contact
              </Button>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{driver.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>{driver.completedOrders}</Text>
              <Text style={styles.statLabel}>Deliveries</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>98%</Text>
              <Text style={styles.statLabel}>On Time</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Performance Overview" />
          <Card.Content>
            <LineChart
              data={performanceData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                backgroundColor: COLORS.white,
                backgroundGradientFrom: COLORS.white,
                backgroundGradientTo: COLORS.white,
                decimalPlaces: 0,
                color: (opacity = 1) => COLORS.primary,
              }}
              bezier
              style={styles.chart}
            />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Recent Deliveries" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Order</DataTable.Title>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
            </DataTable.Header>

            {recentDeliveries.map((delivery) => (
              <DataTable.Row key={delivery.id}>
                <DataTable.Cell>{delivery.orderNo}</DataTable.Cell>
                <DataTable.Cell>{delivery.date}</DataTable.Cell>
                <DataTable.Cell>{delivery.status}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card>

        <View style={styles.buttonContainer}>
          <Button 
            mode="contained"
            icon="calendar"
            onPress={() => {}}
            style={styles.button}
            buttonColor={COLORS.primary}
          >
            Assign Orders
          </Button>
          <Button 
            mode="outlined"
            icon="file-document"
            onPress={() => {}}
            style={styles.button}
            textColor={COLORS.primary}
          >
            View Documents
          </Button>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  profileCard: {
    margin: SPACING.m,
    padding: SPACING.m,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: SPACING.m,
  },
  avatar: {
    marginRight: SPACING.m,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  vehicleInfo: {
    color: COLORS.secondary,
    marginBottom: SPACING.s,
  },
  contactButton: {
    marginTop: SPACING.s,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: SPACING.m,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statLabel: {
    color: COLORS.secondary,
  },
  card: {
    margin: SPACING.m,
    marginTop: 0,
  },
  chart: {
    marginVertical: SPACING.m,
    borderRadius: 16,
  },
  buttonContainer: {
    padding: SPACING.m,
    gap: SPACING.m,
  },
  button: {
    borderColor: COLORS.primary,
  }
});

export default DriverDetailsScreen;
