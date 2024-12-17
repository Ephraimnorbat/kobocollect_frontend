import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, DataTable } from 'react-native-paper';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import Animated, { FadeIn } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const VehicleAnalyticsScreen = () => {
  const utilizationData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      data: [85, 78, 92, 88, 82, 75]
    }]
  };

  const maintenanceCostData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      data: [1200, 800, 1500, 900, 1100, 1300]
    }]
  };

  const fleetStatusData = [
    { name: 'Active', value: 75, color: COLORS.success },
    { name: 'Maintenance', value: 15, color: COLORS.warning },
    { name: 'Inactive', value: 10, color: COLORS.error }
  ];

  const vehiclePerformance = [
    { plate: 'ABC-123', trips: 145, efficiency: '92%', maintenance: '$450' },
    { plate: 'XYZ-789', trips: 132, efficiency: '88%', maintenance: '$680' },
    { plate: 'DEF-456', trips: 128, efficiency: '90%', maintenance: '$320' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Title title="Fleet Overview" />
          <Card.Content>
            <View style={styles.metricsContainer}>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>85%</Text>
                <Text style={styles.metricLabel}>Fleet Utilization</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>92%</Text>
                <Text style={styles.metricLabel}>Operational Efficiency</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>$1.2K</Text>
                <Text style={styles.metricLabel}>Monthly Maintenance</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Fleet Utilization Rate" />
          <LineChart
            data={utilizationData}
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
          <Card.Title title="Maintenance Costs" />
          <BarChart
            data={maintenanceCostData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: COLORS.white,
              backgroundGradientFrom: COLORS.white,
              backgroundGradientTo: COLORS.white,
              decimalPlaces: 0,
              color: (opacity = 1) => COLORS.primary,
            }}
            style={styles.chart}
          />
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Fleet Status Distribution" />
          <PieChart
            data={fleetStatusData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
            }}
            accessor="value"
            backgroundColor="transparent"
            paddingLeft="15"
          />
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Vehicle Performance" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Vehicle</DataTable.Title>
              <DataTable.Title numeric>Trips</DataTable.Title>
              <DataTable.Title numeric>Efficiency</DataTable.Title>
              <DataTable.Title numeric>Maintenance</DataTable.Title>
            </DataTable.Header>

            {vehiclePerformance.map((vehicle, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{vehicle.plate}</DataTable.Cell>
                <DataTable.Cell numeric>{vehicle.trips}</DataTable.Cell>
                <DataTable.Cell numeric>{vehicle.efficiency}</DataTable.Cell>
                <DataTable.Cell numeric>{vehicle.maintenance}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card>
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
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SPACING.m,
  },
  metric: {
    alignItems: 'center',
    flex: 1,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  metricLabel: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: SPACING.xs,
    textAlign: 'center',
  },
  chart: {
    marginVertical: SPACING.m,
    borderRadius: 16,
  }
});

export default VehicleAnalyticsScreen;
