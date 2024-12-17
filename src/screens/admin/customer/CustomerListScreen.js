import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Card, Avatar, Chip, IconButton, SegmentedButtons, Text } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const CustomerListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const customers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 234-567-8900',
      status: 'Active',
      totalOrders: 25,
      lastOrder: '2024-02-10',
      totalSpent: '$2,450',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 234-567-8901',
      status: 'VIP',
      totalOrders: 42,
      lastOrder: '2024-02-12',
      totalSpent: '$4,850',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'VIP': return COLORS.primary;
      case 'Active': return COLORS.success;
      case 'Inactive': return COLORS.error;
      default: return COLORS.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search customers"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchbar}
        />
        
        <SegmentedButtons
          value={filterStatus}
          onValueChange={setFilterStatus}
          buttons={[
            { value: 'all', label: 'All' },
            { value: 'active', label: 'Active' },
            { value: 'vip', label: 'VIP' }
          ]}
          style={styles.filterButtons}
        />
      </View>

      <ScrollView style={styles.customerList}>
        {customers.map((customer, index) => (
          <Animated.View
            key={customer.id}
            entering={FadeInRight.delay(index * 100)}
          >
            <Card 
              style={styles.customerCard}
              onPress={() => navigation.navigate('CustomerDetails', { customer })}
            >
              <Card.Title
                title={customer.name}
                subtitle={customer.email}
                left={(props) => (
                  <Avatar.Image {...props} source={{ uri: customer.avatar }} />
                )}
                right={(props) => (
                  <IconButton {...props} icon="chevron-right" />
                )}
              />
              <Card.Content>
                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>{customer.totalOrders}</Text>
                    <Text style={styles.statLabel}>Orders</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>{customer.totalSpent}</Text>
                    <Text style={styles.statLabel}>Total Spent</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>{customer.lastOrder}</Text>
                    <Text style={styles.statLabel}>Last Order</Text>
                  </View>
                </View>

                <View style={styles.chipContainer}>
                  <Chip 
                    mode="outlined"
                    style={[styles.chip, { borderColor: getStatusColor(customer.status) }]}
                    textStyle={{ color: getStatusColor(customer.status) }}
                  >
                    {customer.status}
                  </Chip>
                  <Chip icon="phone" style={styles.chip}>
                    {customer.phone}
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
        onPress={() => navigation.navigate('AddCustomer')}
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
  customerList: {
    padding: SPACING.m,
  },
  customerCard: {
    marginBottom: SPACING.m,
    backgroundColor: COLORS.white,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: SPACING.m,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statLabel: {
    color: COLORS.secondary,
    fontSize: 12,
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

export default CustomerListScreen;
