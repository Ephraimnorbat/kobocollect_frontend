import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, Button, List, Divider, DataTable } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import Animated, { FadeIn } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const VehicleDetailsScreen = ({ route }) => {
  const { vehicle } = route.params;

  const maintenanceHistory = [
    { date: '2024-01-15', type: 'Oil Change', cost: '$120' },
    { date: '2023-12-20', type: 'Tire Rotation', cost: '$80' },
    { date: '2023-11-30', type: 'Brake Service', cost: '$250' }
  ];

  const fuelData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      data: [45, 40, 35, 50, 45, 40]
    }]
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Title title="Vehicle Information" />
          <Card.Content>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Model</Text>
                <Text style={styles.infoValue}>{vehicle.model}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Plate Number</Text>
                <Text style={styles.infoValue}>{vehicle.plateNumber}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Status</Text>
                <Text style={[styles.infoValue, { color: COLORS.success }]}>{vehicle.status}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Current Driver</Text>
                <Text style={styles.infoValue}>{vehicle.driver}</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Performance Metrics" />
          <Card.Content>
            <View style={styles.metricsRow}>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>{vehicle.mileage}</Text>
                <Text style={styles.metricLabel}>Total Mileage</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>{vehicle.fuelLevel}</Text>
                <Text style={styles.metricLabel}>Fuel Level</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>92%</Text>
                <Text style={styles.metricLabel}>Efficiency</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Fuel Consumption" />
          <LineChart
            data={fuelData}
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
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Maintenance History" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Service</DataTable.Title>
              <DataTable.Title numeric>Cost</DataTable.Title>
            </DataTable.Header>

            {maintenanceHistory.map((record, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{record.date}</DataTable.Cell>
                <DataTable.Cell>{record.type}</DataTable.Cell>
                <DataTable.Cell numeric>{record.cost}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card>

        <View style={styles.buttonContainer}>
          <Button 
            mode="contained"
            icon="wrench"
            onPress={() => {}}
            style={styles.button}
            buttonColor={COLORS.primary}
          >
            Schedule Maintenance
          </Button>
          <Button 
            mode="outlined"
            icon="map-marker"
            onPress={() => {}}
            style={styles.button}
            textColor={COLORS.primary}
          >
            Track Location
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
  card: {
    margin: SPACING.m,
    backgroundColor: COLORS.white,
  },
  infoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: SPACING.s,
  },
  infoItem: {
    width: '50%',
    padding: SPACING.s,
  },
  infoLabel: {
    color: COLORS.secondary,
    fontSize: 12,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: SPACING.xs,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SPACING.m,
  },
  metric: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  metricLabel: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: SPACING.xs,
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

export default VehicleDetailsScreen;
