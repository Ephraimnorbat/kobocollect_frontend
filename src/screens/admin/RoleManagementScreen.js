import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Switch, Button, IconButton } from 'react-native-paper';
import Animated, { FadeInUp, SlideInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../constants/theme';

const RoleManagementScreen = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Admin',
      permissions: [
        { name: 'User Management', enabled: true },
        { name: 'Order Management', enabled: true },
        { name: 'Analytics', enabled: true },
      ]
    },
    {
      id: 2,
      name: 'Team Lead',
      permissions: [
        { name: 'User Management', enabled: false },
        { name: 'Order Management', enabled: true },
        { name: 'Analytics', enabled: true },
      ]
    }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {roles.map((role, index) => (
          <Animated.View 
            key={role.id}
            entering={FadeInUp.delay(index * 200)}
          >
            <Card style={styles.card}>
              <Card.Title
                title={role.name}
                right={(props) => (
                  <IconButton {...props} icon="pencil" onPress={() => {}} />
                )}
              />
              <Card.Content>
                {role.permissions.map((permission, pIndex) => (
                  <Animated.View 
                    key={pIndex}
                    entering={SlideInRight.delay(pIndex * 100)}
                    style={styles.permissionRow}
                  >
                    <Text>{permission.name}</Text>
                    <Switch 
                      value={permission.enabled}
                      onValueChange={() => {}}
                      color={COLORS.primary}
                    />
                  </Animated.View>
                ))}
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </ScrollView>
      <Button 
        mode="contained" 
        style={styles.addButton}
        buttonColor={COLORS.primary}
        onPress={() => {}}
      >
        Add New Role
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
    backgroundColor: COLORS.white,
  },
  permissionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.s,
  },
  addButton: {
    margin: SPACING.m,
  }
});

export default RoleManagementScreen;
