import React from 'react';
import { StyleSheet, ScrollView, View, Dimensions } from 'react-native';
import { Card, Avatar, Text, Button, DataTable } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';
import Animated, { FadeIn } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const CustomerDetailsScreen = ({ route }) => {
  const { customer } = route.params;

  const orderHistory = [
    { id: 'ORD001', date: '2024-02-10', amount: '$350', status: 'Delivered' },
    { id: 'ORD002', date: '2024-01-25', amount: '$480', status: 'Delivered' },
    { id: 'ORD003', date: '2024-01-15', amount: '$290', status: 'Delivered' }
  ];

  const spendingData = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
    datasets: [{
      data: [350, 480, 290, 420, 380, 350]
    }]
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.profileCard}>
          <View style={styles.profileHeader}>
            <Avatar.Image 
              size={80} 
              source={{ uri: customer.avatar }}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{customer.name}</Text>
              <Text style={styles.email}>{customer.email}</Text>
              <Text style={styles.phone}>{customer.phone}</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Customer Overview" />
          <Card.Content>
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statValue}>{customer.totalOrders}</Text>
                <Text style={styles.statLabel}>Total Orders</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statValue}>{customer.totalSpent}</Text>
                <Text style={styles.statLabel}>Total Spent</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statValue}>{customer.status}</Text>
                <Text style={styles.statLabel}>Status</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Spending History" />
          <LineChart
            data={spendingData}
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
          <Card.Title title="Recent Orders" />
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Order ID</DataTable.Title>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title numeric>Amount</DataTable.Title>
              <DataTable.Title>Status</DataTable.Title>
            </DataTable.Header>

            {orderHistory.map((order) => (
              <DataTable.Row key={order.id}>
                <DataTable.Cell>{order.id}</DataTable.Cell>
                <DataTable.Cell>{order.date}</DataTable.Cell>
                <DataTable.Cell numeric>{order.amount}</DataTable.Cell>
                <DataTable.Cell>{order.status}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </Card>

        <View style={styles.buttonContainer}>
          <Button 
            mode="contained"
            icon="plus"
            onPress={() => {}}
            style={styles.button}
            buttonColor={COLORS.primary}
          >
            New Order
          </Button>
          <Button 
            mode="outlined"
            icon="message"
            onPress={() => {}}
            style={styles.button}
            textColor={COLORS.primary}
          >
            Send Message
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
    alignItems: 'center',
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
  email: {
    color: COLORS.secondary,
  },
  phone: {
    color: COLORS.secondary,
  },
  card: {
    margin: SPACING.m,
    backgroundColor: COLORS.white,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: SPACING.m,
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
