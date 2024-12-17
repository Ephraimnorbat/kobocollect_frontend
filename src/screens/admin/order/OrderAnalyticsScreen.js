import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, DataTable } from 'react-native-paper';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const OrderAnalyticsScreen = () => {
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43]
    }]
  };

  const pieData = [
    { name: 'Moving', value: 45, color: COLORS.primary, legendFontColor: '#7F7F7F' },
    { name: 'Delivery', value: 35, color: COLORS.secondary, legendFontColor: '#7F7F7F' },
    { name: 'Courier', value: 20, color: COLORS.tertiary, legendFontColor: '#7F7F7F' }
  ];

  const performanceMetrics = [
    { label: 'Total Orders', value: '156', change: '+12%' },
    { label: 'Average Order Value', value: '$245', change: '+5%' },
    { label: 'Completion Rate', value: '95%', change: '+2%' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Title title="Orders Overview" />
          <Card.Content>
            <View style={styles.metricsContainer}>
              {performanceMetrics.map((metric, index) => (
                <View key={index} style={styles.metricItem}>
                  <Text style={styles.metricValue}>{metric.value}</Text>
                  <Text style={styles.metricLabel}>{metric.label}</Text>
                  <Text style={[styles.metricChange, { color: metric.change.includes('+') ? COLORS.success : COLORS.error }]}>
                    {metric.change}
                  </Text>
                </View>
              ))}
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Weekly Order Trend" />
          <LineChart
            data={lineData}
            width={Dimensions.get('window').width - 40}
            height={220}
            chartConfig={{
              backgroundColor: COLORS.white,
              backgroundGradientFrom: COLORS.white,
              backgroundGradientTo: COLORS.white,
              decimalPlaces: 0,
              color: (opacity = 1) => COLORS.primary,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={styles.chart}
          />
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Service Distribution" />
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
          <Card.Title title="Recent Performance" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title numeric>Orders</DataTable.Title>
              <DataTable.Title numeric>Revenue</DataTable.Title>
            </DataTable.Header>

            {[...Array(5)].map((_, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>Feb {10 - index}</DataTable.Cell>
                <DataTable.Cell numeric>{20 + index}</DataTable.Cell>
                <DataTable.Cell numeric>${(1000 + index * 100).toLocaleString()}</DataTable.Cell>
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
    marginBottom: SPACING.m,
  },
  metricItem: {
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
  metricChange: {
    fontSize: 12,
    marginTop: SPACING.xs,
  },
  chart: {
    marginVertical: SPACING.m,
    borderRadius: 16,
  }
});

export default OrderAnalyticsScreen;
