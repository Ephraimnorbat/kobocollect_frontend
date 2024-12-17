import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Text, Button, List, Divider, Badge } from 'react-native-paper';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const VehicleDetailsScreen = ({ route }) => {
  const { vehicle } = route.params;
  const [expanded, setExpanded] = useState(true);

  const vehicleStats = [
    { title: 'Total Trips', value: '156' },
    { title: 'Distance', value: '2,450 km' },
    { title: 'Fuel Usage', value: '450L' },
    { title: 'Efficiency', value: '8.5 km/L' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: 'https://via.placeholder.com/400x200' }} />
          <Card.Title
            title={vehicle.name}
            subtitle={vehicle.plateNumber}
            right={() => (
              <Badge size={30} style={[styles.badge, { backgroundColor: COLORS.primary }]}>
                {vehicle.status}
              </Badge>
            )}
          />
        </Card>
      </Animated.View>

      <Animated.View 
        entering={SlideInRight.delay(200)}
        style={styles.statsContainer}
      >
        {vehicleStats.map((stat, index) => (
          <Card key={index} style={styles.statCard}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statTitle}>{stat.title}</Text>
          </Card>
        ))}
      </Animated.View>

      <Card style={styles.detailsCard}>
        <List.Accordion
          title="Vehicle Information"
          expanded={expanded}
          onPress={() => setExpanded(!expanded)}
        >
          <List.Item title="Type" description={vehicle.type} />
          <Divider />
          <List.Item title="Driver" description={vehicle.driver} />
          <Divider />
          <List.Item title="Last Service" description="15 days ago" />
        </List.Accordion>
      </Card>

      <View style={styles.buttonContainer}>
        <Button 
          mode="contained" 
          onPress={() => {}}
          style={styles.button}
          buttonColor={COLORS.primary}
        >
          Schedule Maintenance
        </Button>
        <Button 
          mode="outlined" 
          onPress={() => {}}
          style={styles.button}
          textColor={COLORS.primary}
        >
          View History
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
  card: {
    margin: SPACING.m,
  },
  badge: {
    marginRight: SPACING.m,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: SPACING.m,
    gap: SPACING.s,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    padding: SPACING.m,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statTitle: {
    color: COLORS.secondary,
    marginTop: SPACING.xs,
  },
  detailsCard: {
    margin: SPACING.m,
  },
  buttonContainer: {
    padding: SPACING.m,
    gap: SPACING.m,
  },
  button: {
    borderColor: COLORS.primary,
  }
});

export default VehicleDetailsScreen;
