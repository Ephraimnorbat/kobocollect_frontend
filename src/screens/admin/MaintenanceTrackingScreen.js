import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Button, ProgressBar, Chip, IconButton } from 'react-native-paper';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const MaintenanceTrackingScreen = () => {
  const maintenanceTasks = [
    {
      id: 1,
      title: 'Oil Change',
      dueDate: '2024-02-15',
      status: 'Pending',
      progress: 0.8,
      priority: 'High'
    },
    {
      id: 2,
      title: 'Brake Inspection',
      dueDate: '2024-02-20',
      status: 'In Progress',
      progress: 0.4,
      priority: 'Medium'
    }
  ];

  const getPriorityColor = (priority) => {
    switch(priority.toLowerCase()) {
      case 'high': return COLORS.error;
      case 'medium': return '#FFA500';
      default: return COLORS.success;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {maintenanceTasks.map((task, index) => (
          <Animated.View 
            key={task.id}
            entering={FadeInUp.delay(index * 200)}
          >
            <Card style={styles.card}>
              <Card.Content>
                <View style={styles.headerRow}>
                  <Text style={styles.title}>{task.title}</Text>
                  <Chip 
                    mode="outlined"
                    textStyle={{ color: getPriorityColor(task.priority) }}
                    style={{ borderColor: getPriorityColor(task.priority) }}
                  >
                    {task.priority}
                  </Chip>
                </View>
                
                <Text style={styles.date}>Due: {task.dueDate}</Text>
                
                <View style={styles.progressContainer}>
                  <Text style={styles.progressText}>Progress</Text>
                  <ProgressBar 
                    progress={task.progress} 
                    color={COLORS.primary}
                    style={styles.progressBar}
                  />
                </View>

                <View style={styles.actionRow}>
                  <Button 
                    mode="contained-tonal"
                    onPress={() => {}}
                    style={styles.button}
                  >
                    Update
                  </Button>
                  <IconButton 
                    icon="dots-vertical" 
                    onPress={() => {}}
                  />
                </View>
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </ScrollView>

      <Button 
        mode="contained"
        icon="plus"
        onPress={() => {}}
        style={styles.addButton}
        buttonColor={COLORS.primary}
      >
        Schedule Maintenance
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.m,
  },
  card: {
    marginBottom: SPACING.m,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.s,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: COLORS.secondary,
    marginBottom: SPACING.m,
  },
  progressContainer: {
    marginVertical: SPACING.m,
  },
  progressText: {
    marginBottom: SPACING.xs,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.s,
  },
  button: {
    flex: 1,
    marginRight: SPACING.m,
  },
  addButton: {
    margin: SPACING.m,
  }
});

export default MaintenanceTrackingScreen;
