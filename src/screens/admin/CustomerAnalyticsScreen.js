import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, ProgressBar } from 'react-native-paper';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import { PieChart, BarChart } from 'react-native-chart-kit';
import { COLORS, SPACING } from '../../../constants/theme';

const CustomerAnalyticsScreen = () => {
  const pieData = [
    {
      name: "New",
      population: 30,
      color: COLORS.primary,
      legendFontColor: "#7F7F7F",
    },
    {
      name: "Regular",
      population: 45,
      color: COLORS.secondary,
      legendFontColor: "#7F7F7F",
    },
    {
      name: "VIP",
      population: 25,
      color: COLORS.tertiary,
      legendFontColor: "#7F7F7F",
    }
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43]
    }]
  };

  const metrics = [
    { label: 'Customer Retention', value: 0.85 },
    { label: 'Satisfaction Rate', value: 0.92 },
    { label: 'Referral Rate', value: 0.65 }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Title title="Customer Segments" />
          <Card.Content>
            <PieChart
              data={pieData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
            />
          </Card.Content>
        </Card>
      </Animated.View>

      <Animated.View entering={SlideInRight.delay(200)}>
        <Card style={styles.card}>
          <Card.Title title="Customer Growth" />
          <Card.Content>
            <BarChart
              data={barData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: COLORS.white,
                backgroundGradientTo: COLORS.white,
                decimalPlaces: 0,
                color: (opacity = 1) => COLORS.primary,
                style: {
                  borderRadius: 16,
                },
              }}
              style={styles.chart}
            />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Key Metrics" />
          <Card.Content>
            {metrics.map((metric, index) => (
              <View key={index} style={styles.metricContainer}>
                <View style={styles.metricHeader}>
                  <Text style={styles.metricLabel}>{metric.label}</Text>
                  <Text style={styles.metricValue}>{(metric.value * 100).toFixed(0)}%</Text>
                </View>
                <ProgressBar
                  progress={metric.value}
                  color={COLORS.primary}
                  style={styles.progressBar}
                />
              </View>
            ))}
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Customer Insights" />
          <Card.Content>
            <View style={styles.insightRow}>
              <View style={styles.insight}>
                <Text style={styles.insightNumber}>85%</Text>
                <Text style={styles.insightLabel}>Active Users</Text>
              </View>
              <View style={styles.insight}>
                <Text style={styles.insightNumber}>$120</Text>
                <Text style={styles.insightLabel}>Avg Order Value</Text>
              </View>
              <View style={styles.insight}>
                <Text style={styles.insightNumber}>4.8</Text>
                <Text style={styles.insightLabel}>Avg Rating</Text>
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
    marginTop: SPACING.m,
  },
  chart: {
    marginVertical: SPACING.m,
    borderRadius: 16,
  },
  metricContainer: {
    marginBottom: SPACING.m,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  metricLabel: {
    color: COLORS.secondary,
  },
  metricValue: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  insightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SPACING.s,
  },
  insight: {
    alignItems: 'center',
  },
  insightNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  insightLabel: {
    color: COLORS.secondary,
    fontSize: 12,
    marginTop: SPACING.xs,
  }
});

export default CustomerAnalyticsScreen;
