import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Card, Chip, IconButton, SegmentedButtons, Text } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const VehicleListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const vehicles = [
    {
      id: 1,
      model: 'Toyota Hiace',
      plateNumber: 'ABC-123',
      status: 'Active',
      driver: 'John Smith',
      lastMaintenance: '2024-01-15',
      mileage: '45,000 km',
      fuelLevel: '75%',
      type: 'Van'
    },
    {
      id: 2,
      model: 'Ford Transit',
      plateNumber: 'XYZ-789',
      status: 'Maintenance',
      driver: 'Sarah Wilson',
      lastMaintenance: '2024-02-01',
      mileage: '32,000 km',
      fuelLevel: '45%',
      type: 'Van'
    },
    {
      id: 3,
      model: 'Mercedes Sprinter',
      plateNumber: 'DEF-456',
      status: 'Inactive',
      driver: 'Unassigned',
      lastMaintenance: '2024-01-28',
      mileage: '28,000 km',
      fuelLevel: '90%',
      type: 'Van'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return COLORS.success;
      case 'Maintenance': return COLORS.warning;
      case 'Inactive': return COLORS.error;
      default: return COLORS.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Searchbar
          placeholder="Search vehicles"
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
            { value: 'maintenance', label: 'Maintenance' }
          ]}
          style={styles.filterButtons}
        />
      </View>

      <ScrollView style={styles.vehicleList}>
        {vehicles.map((vehicle, index) => (
          <Animated.View
            key={vehicle.id}
            entering={FadeInRight.delay(index * 100)}
          >
            <Card 
              style={styles.vehicleCard}
              onPress={() => navigation.navigate('VehicleDetails', { vehicle })}
            >
              <Card.Title
                title={vehicle.model}
                subtitle={vehicle.plateNumber}
                right={(props) => (
                  <IconButton {...props} icon="chevron-right" />
                )}
              />
              <Card.Content>
                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Driver</Text>
                    <Text style={styles.infoValue}>{vehicle.driver}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Mileage</Text>
                    <Text style={styles.infoValue}>{vehicle.mileage}</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.infoLabel}>Fuel</Text>
                    <Text style={styles.infoValue}>{vehicle.fuelLevel}</Text>
                  </View>
                </View>

                <View style={styles.chipContainer}>
                  <Chip 
                    mode="outlined"
                    style={[styles.chip, { borderColor: getStatusColor(vehicle.status) }]}
                    textStyle={{ color: getStatusColor(vehicle.status) }}
                  >
                    {vehicle.status}
                  </Chip>
                  <Chip icon="calendar" style={styles.chip}>
                    Last Service: {vehicle.lastMaintenance}
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
        onPress={() => navigation.navigate('AddVehicle')}
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
  vehicleList: {
    padding: SPACING.m,
  },
  vehicleCard: {
    marginBottom: SPACING.m,
    backgroundColor: COLORS.white,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.m,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    color: COLORS.secondary,
    fontSize: 12,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: SPACING.xs,
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

export default VehicleListScreen;
