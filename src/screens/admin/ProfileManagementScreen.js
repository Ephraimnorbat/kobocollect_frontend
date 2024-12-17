import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { TextInput, Button, Avatar, Card } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../constants/theme';

const ProfileManagementScreen = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    role: 'Admin'
  });

  return (
    <ScrollView style={styles.container}>
      <Animated.View 
        entering={FadeIn.duration(1000)}
        style={styles.avatarContainer}
      >
        <Avatar.Image 
          size={120} 
          source={{ uri: 'https://via.placeholder.com/120' }} 
        />
        <Button 
          mode="text" 
          onPress={() => {}}
          textColor={COLORS.primary}
        >
          Change Photo
        </Button>
      </Animated.View>

      <Card style={styles.card}>
        <Card.Content style={styles.form}>
          <TextInput
            label="Full Name"
            value={profile.name}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={profile.email}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Phone"
            value={profile.phone}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Role"
            value={profile.role}
            mode="outlined"
            style={styles.input}
            disabled
          />
          
          <Button 
            mode="contained"
            style={styles.button}
            buttonColor={COLORS.primary}
            onPress={() => {}}
          >
            Save Changes
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  avatarContainer: {
    alignItems: 'center',
    padding: SPACING.xl,
  },
  card: {
    margin: SPACING.m,
    backgroundColor: COLORS.white,
  },
  form: {
    gap: SPACING.m,
  },
  input: {
    backgroundColor: COLORS.white,
  },
  button: {
    marginTop: SPACING.m,
  }
});

export default ProfileManagementScreen;
