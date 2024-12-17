import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import Animated, { 
  FadeInDown, 
  FadeInUp,
  Layout 
} from 'react-native-reanimated';
import { COLORS, SPACING } from '../../constants/theme';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeInDown.duration(1000).springify()}
        style={styles.header}
      >
        <Text style={styles.title}>Admin Dashboard</Text>
      </Animated.View>

      <Animated.View 
        entering={FadeInUp.duration(1000).delay(300).springify()}
        style={styles.form}
      >
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          theme={{ colors: { primary: COLORS.primary }}}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          theme={{ colors: { primary: COLORS.primary }}}
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Admin', { screen: 'AdminDashboard' })}
          style={styles.button}
          buttonColor={COLORS.primary}
        >
          Login
        </Button>

      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.l,
  },
  header: {
    alignItems: 'center',
    marginTop: SPACING.xl * 2,
    marginBottom: SPACING.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  form: {
    gap: SPACING.m,
  },
  input: {
    backgroundColor: COLORS.white,
  },
  button: {
    marginTop: SPACING.m,
    padding: SPACING.xs,
  }
});

export default LoginScreen;
