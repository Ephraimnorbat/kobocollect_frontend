import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, DataTable } from 'react-native-paper';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import Animated, { FadeIn } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const CustomerAnalyticsScreen = () => {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      data: [12500, 15800, 14200, 16500, 18200, 17500]
    }]
  };

  const customerSegmentation = [
    { name: 'VIP', value: 25, color: COLORS.primary },
    { name: 'Regular', value: 45, color: COLORS.success },
    { name: 'Occasional', value: 30, color: COLORS.warning }
  ];

  const topCustomers = [
    { name: 'John Smith', orders: 42, spent: '$4,850', retention: '95%' },
    { name: 'Sarah Johnson', orders: 38, spent: '$4,200', retention: '92%' },
    { name: 'Mike Wilson', orders: 35, spent: '$3,900', retention: '88%' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Title title="Customer Overview" />
          <Card.Content>
            <View style={styles.metricsContainer}>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>2,450</Text>
                <Text style={styles.metricLabel}>Total Customers</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>85%</Text>
                <Text style={styles.metricLabel}>Retention Rate</Text>
              </View>
              <View style={styles.metric}>
                <Text style={styles.metricValue}>$125</Text>
                <Text style={styles.metricLabel}>Avg Order Value</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Monthly Revenue" />
          <LineChart
            data={revenueData}
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
          <Card.Title title="Customer Segmentation" />
          <PieChart
            data={customerSegmentation}
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
          <Card.Title title="Top Customers" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Customer</DataTable.Title>
              <DataTable.Title numeric>Orders</DataTable.Title>
              <DataTable.Title numeric>Total Spent</DataTable.Title>
              <DataTable.Title numeric>Retention</DataTable.Title>
            </DataTable.Header>

            {topCustomers.map((customer, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{customer.name}</DataTable.Cell>
                <DataTable.Cell numeric>{customer.orders}</DataTable.Cell>
                <DataTable.Cell numeric>{customer.spent}</DataTable.Cell>
                <DataTable.Cell numeric>{customer.retention}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Customer Acquisition" />
          <Card.Content>
            <View style={styles.acquisitionStats}>
              <View style={styles.stat}>
                <Text style={styles.statValue}>45%</Text>
                <Text style={styles.statLabel}>Referrals</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statValue}>35%</Text>
                <Text style={styles.statLabel}>Direct</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statValue}>20%</Text>
                <Text style={styles.statLabel}>Marketing</Text>
              </View>
            </View>
          </Card.Content>
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
  },
  acquisitionStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: SPACING.m,
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
    fontSize: 12,
    marginTop: SPACING.xs,
  }
});

export default CustomerAnalyticsScreen;
