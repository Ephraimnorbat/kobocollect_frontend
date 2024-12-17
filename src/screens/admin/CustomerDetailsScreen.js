import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Text, Avatar, List, Button, DataTable } from 'react-native-paper';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import { LineChart } from 'react-native-chart-kit';
import { COLORS, SPACING } from '../../../constants/theme';

const CustomerDetailsScreen = ({ route }) => {
  const { customer } = route.params;
  const [expanded, setExpanded] = useState(true);

  const recentOrders = [
    { id: 1, date: '2024-02-01', service: 'Moving Service', amount: '$250' },
    { id: 2, date: '2024-01-15', service: 'Delivery', amount: '$120' },
  ];

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      data: [20, 45, 28, 80, 99, 43]
    }]
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Avatar.Text 
              size={80} 
              label={customer.name.split(' ').map(n => n[0]).join('')}
              backgroundColor={COLORS.primary}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{customer.name}</Text>
              <Text style={styles.email}>{customer.email}</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{customer.orders}</Text>
              <Text style={styles.statLabel}>Orders</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>{customer.rating}</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>$1,250</Text>
              <Text style={styles.statLabel}>Total Spent</Text>
            </View>
          </View>
        </Card>
      </Animated.View>

      <Animated.View entering={SlideInRight.delay(200)}>
        <Card style={styles.card}>
          <Card.Title title="Order History" />
          <Card.Content>
            <LineChart
              data={chartData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: COLORS.white,
                backgroundGradientTo: COLORS.white,
                decimalPlaces: 0,
                color: (opacity = 1) => COLORS.primary,
              }}
              style={styles.chart}
            />
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Recent Orders" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Service</DataTable.Title>
              <DataTable.Title numeric>Amount</DataTable.Title>
            </DataTable.Header>

            {recentOrders.map((order) => (
              <DataTable.Row key={order.id}>
                <DataTable.Cell>{order.date}</DataTable.Cell>
                <DataTable.Cell>{order.service}</DataTable.Cell>
                <DataTable.Cell numeric>{order.amount}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => {}}
          style={styles.button}
          buttonColor={COLORS.primary}
        >
          Contact Customer
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => {}}
          style={styles.button}
          textColor={COLORS.primary}
        >
          View Full History
        </Button>
      </View>
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
    alignItems: 'center',
    marginBottom: SPACING.m,
  },
  profileInfo: {
    marginLeft: SPACING.m,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    color: COLORS.secondary,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: SPACING.m,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
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

export default CustomerDetailsScreen;
