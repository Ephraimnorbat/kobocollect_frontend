import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Text, Card, Chip, IconButton, SegmentedButtons } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const OrderListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const orders = [
    {
      id: 'ORD001',
      customerName: 'John Smith',
      service: 'Moving Service',
      status: 'In Progress',
      amount: '$250',
      date: '2024-02-10',
      driver: 'Mike Wilson'
    },
    {
      id: 'ORD002',
      customerName: 'Sarah Johnson',
      service: 'Delivery',
      status: 'Pending',
      amount: '$120',
      date: '2024-02-10',
      driver: 'Pending Assignment'
    },
    {
      id: 'ORD003',
      customerName: 'Robert Brown',
      service: 'Moving Service',
      status: 'Completed',
      amount: '$350',
      date: '2024-02-09',
      driver: 'Alex Davis'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return COLORS.success;
      case 'In Progress': return '#FFA500';
      case 'Pending': return COLORS.error;
      default: return COLORS.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search orders"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchbar}
        />
        
        <SegmentedButtons
          value={filterStatus}
          onValueChange={setFilterStatus}
          buttons={[
            { value: 'all', label: 'All' },
            { value: 'pending', label: 'Pending' },
            { value: 'active', label: 'Active' },
            { value: 'completed', label: 'Completed' }
          ]}
          style={styles.filterButtons}
        />
      </View>

      <ScrollView style={styles.orderList}>
        {orders.map((order, index) => (
          <Animated.View
            key={order.id}
            entering={FadeInRight.delay(index * 100)}
          >
            <Card 
              style={styles.orderCard}
              onPress={() => navigation.navigate('OrderDetails', { order })}
            >
              <Card.Title
                title={order.id}
                subtitle={order.customerName}
                right={(props) => (
                  <IconButton {...props} icon="chevron-right" />
                )}
              />
              <Card.Content>
                <View style={styles.orderInfo}>
                  <View style={styles.row}>
                    <Text style={styles.label}>Service:</Text>
                    <Text>{order.service}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.label}>Amount:</Text>
                    <Text style={styles.amount}>{order.amount}</Text>
                  </View>
                </View>
                
                <View style={styles.chipContainer}>
                  <Chip 
                    mode="outlined"
                    style={[styles.chip, { borderColor: getStatusColor(order.status) }]}
                    textStyle={{ color: getStatusColor(order.status) }}
                  >
                    {order.status}
                  </Chip>
                  <Chip icon="account" style={styles.chip}>
                    {order.driver}
                  </Chip>
                  <Chip icon="calendar" style={styles.chip}>
                    {order.date}
                  </Chip>
                </View>
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </ScrollView>

      <IconButton
        icon="plus"
        mode="contained"
        size={24}
        onPress={() => navigation.navigate('CreateOrder')}
        style={styles.fab}
        containerColor={COLORS.primary}
        iconColor={COLORS.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: SPACING.m,
    backgroundColor: COLORS.white,
    elevation: 2,
  },
  searchbar: {
    marginBottom: SPACING.m,
  },
  filterButtons: {
    marginBottom: SPACING.s,
  },
  orderList: {
    padding: SPACING.m,
  },
  orderCard: {
    marginBottom: SPACING.m,
    backgroundColor: COLORS.white,
  },
  orderInfo: {
    marginBottom: SPACING.m,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  label: {
    color: COLORS.secondary,
  },
  amount: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xs,
  },
  chip: {
    marginRight: SPACING.xs,
  },
  fab: {
    position: 'absolute',
    right: SPACING.m,
    bottom: SPACING.m,
  }
});

export default OrderListScreen;
