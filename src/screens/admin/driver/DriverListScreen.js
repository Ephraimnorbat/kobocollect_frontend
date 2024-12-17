import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Text, Card, Avatar, Chip, IconButton, SegmentedButtons } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const DriverListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const drivers = [
    {
      id: 1,
      name: 'John Smith',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      status: 'Active',
      rating: 4.8,
      completedOrders: 156,
      vehicle: 'Toyota Hiace',
      currentLocation: 'Downtown'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      status: 'On Delivery',
      rating: 4.9,
      completedOrders: 203,
      vehicle: 'Ford Transit',
      currentLocation: 'Uptown'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return COLORS.success;
      case 'On Delivery': return COLORS.primary;
      case 'Offline': return COLORS.error;
      default: return COLORS.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search drivers"
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
            { value: 'delivery', label: 'On Delivery' }
          ]}
          style={styles.filterButtons}
        />
      </View>

      <ScrollView style={styles.driverList}>
        {drivers.map((driver, index) => (
          <Animated.View
            key={driver.id}
            entering={FadeInRight.delay(index * 100)}
          >
            <Card 
              style={styles.driverCard}
              onPress={() => navigation.navigate('DriverDetails', { driver })}
            >
              <Card.Title
                title={driver.name}
                subtitle={driver.vehicle}
                left={(props) => (
                  <Avatar.Image {...props} source={{ uri: driver.photo }} />
                )}
                right={(props) => (
                  <IconButton {...props} icon="chevron-right" />
                )}
              />
              <Card.Content>
                <View style={styles.statsRow}>
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>{driver.rating}</Text>
                    <Text style={styles.statLabel}>Rating</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>{driver.completedOrders}</Text>
                    <Text style={styles.statLabel}>Deliveries</Text>
                  </View>
                  <View style={styles.stat}>
                    <Text style={styles.statValue}>{driver.currentLocation}</Text>
                    <Text style={styles.statLabel}>Location</Text>
                  </View>
                </View>

                <View style={styles.chipContainer}>
                  <Chip 
                    mode="outlined"
                    style={[styles.chip, { borderColor: getStatusColor(driver.status) }]}
                    textStyle={{ color: getStatusColor(driver.status) }}
                  >
                    {driver.status}
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
        onPress={() => navigation.navigate('AddDriver')}
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
  driverList: {
    padding: SPACING.m,
  },
  driverCard: {
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

export default DriverListScreen;
