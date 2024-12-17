import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Searchbar, FAB, Chip, Avatar } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const VehicleListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Hiace',
      plateNumber: 'ABC 123',
      status: 'Active',
      type: 'Van',
      driver: 'John Doe'
    },
    {
      id: 2,
      name: 'Ford Transit',
      plateNumber: 'XYZ 789',
      status: 'Maintenance',
      type: 'Truck',
      driver: 'Jane Smith'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return COLORS.success;
      case 'Maintenance': return COLORS.error;
      default: return COLORS.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search vehicles"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchbar}
      />
      
      <ScrollView style={styles.list}>
        {vehicles.map((vehicle, index) => (
          <Animated.View
            key={vehicle.id}
            entering={FadeInRight.delay(index * 100)}
          >
            <Card 
              style={styles.card}
              onPress={() => navigation.navigate('VehicleDetails', { vehicle })}
            >
              <Card.Title
                title={vehicle.name}
                subtitle={vehicle.plateNumber}
                left={(props) => (
                  <Avatar.Icon {...props} icon="car" backgroundColor={COLORS.secondary} />
                )}
              />
              <Card.Content style={styles.cardContent}>
                <Chip 
                  mode="outlined" 
                  textStyle={{ color: getStatusColor(vehicle.status) }}
                  style={[styles.chip, { borderColor: getStatusColor(vehicle.status) }]}
                >
                  {vehicle.status}
                </Chip>
                <Chip icon="account">{vehicle.driver}</Chip>
                <Chip icon="tag">{vehicle.type}</Chip>
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('AddVehicle')}
        color={COLORS.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  searchbar: {
    margin: SPACING.m,
    backgroundColor: COLORS.white,
  },
  list: {
    padding: SPACING.m,
  },
  card: {
    marginBottom: SPACING.m,
    backgroundColor: COLORS.white,
  },
  cardContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.s,
    paddingVertical: SPACING.s,
  },
  chip: {
    marginRight: SPACING.s,
  },
  fab: {
    position: 'absolute',
    right: SPACING.m,
    bottom: SPACING.m,
    backgroundColor: COLORS.primary,
  }
});

export default VehicleListScreen;
