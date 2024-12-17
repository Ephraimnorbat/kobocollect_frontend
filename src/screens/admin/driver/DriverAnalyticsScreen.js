import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, DataTable } from 'react-native-paper';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import Animated, { FadeIn } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const DriverAnalyticsScreen = () => {
  const performanceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      data: [15, 25, 20, 30, 28, 22]
    }]
  };

  const pieData = [
    { name: 'On Time', value: 85, color: COLORS.success, legendFontColor: '#7F7F7F' },
    { name: 'Delayed', value: 10, color: COLORS.warning, legendFontColor: '#7F7F7F' },
    { name: 'Cancelled', value: 5, color: COLORS.error, legendFontColor: '#7F7F7F' }
  ];

  const topDrivers = [
    { rank: 1, name: 'John Smith', deliveries: 156, rating: 4.9 },
    { rank: 2, name: 'Sarah Wilson', deliveries: 142, rating: 4.8 },
    { rank: 3, name: 'Mike Johnson', deliveries: 138, rating: 4.8 }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Title title="Performance Metrics" />
          <Card.Content>
            <View style={styles.metricsContainer}>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>95%</Text>
                <Text style={styles.metricLabel}>Completion Rate</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>4.8</Text>
                <Text style={styles.metricLabel}>Avg Rating</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>25min</Text>
                <Text style={styles.metricLabel}>Avg Response</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Weekly Deliveries" />
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
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Delivery Status Distribution" />
          <PieChart
            data={pieData}
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
          <Card.Title title="Top Performing Drivers" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Rank</DataTable.Title>
              <DataTable.Title>Driver</DataTable.Title>
              <DataTable.Title numeric>Deliveries</DataTable.Title>
              <DataTable.Title numeric>Rating</DataTable.Title>
            </DataTable.Header>

            {topDrivers.map((driver) => (
              <DataTable.Row key={driver.rank}>
                <DataTable.Cell>{driver.rank}</DataTable.Cell>
                <DataTable.Cell>{driver.name}</DataTable.Cell>
                <DataTable.Cell numeric>{driver.deliveries}</DataTable.Cell>
                <DataTable.Cell numeric>{driver.rating}</DataTable.Cell>
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
  },
  chart: {
    marginVertical: SPACING.m,
    borderRadius: 16,
  }
});

export default DriverAnalyticsScreen;
