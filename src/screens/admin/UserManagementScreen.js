import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Avatar, FAB, Searchbar } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../constants/theme';

const UserManagementScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockUsers = [
    { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', role: 'Team Lead', email: 'jane@example.com' },
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search users"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.searchbar}
      />
      
      <ScrollView style={styles.list}>
        {mockUsers.map((user, index) => (
          <Animated.View
            key={user.id}
            entering={FadeInRight.delay(index * 100)}
          >
            <Card style={styles.card}>
              <Card.Title
                title={user.name}
                subtitle={user.role}
                left={(props) => (
                  <Avatar.Text {...props} 
                    label={user.name.split(' ').map(n => n[0]).join('')}
                    backgroundColor={COLORS.secondary}
                  />
                )}
              />
            </Card>
          </Animated.View>
        ))}
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => {}}
        color={COLORS.white}
        backgroundColor={COLORS.primary}
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
    elevation: 2,
  },
  fab: {
    position: 'absolute',
    margin: SPACING.m,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary,
  }
});

export default UserManagementScreen;
