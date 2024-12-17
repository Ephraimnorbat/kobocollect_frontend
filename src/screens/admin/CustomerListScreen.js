import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Searchbar, Card, Avatar, Chip, IconButton } from 'react-native-paper';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const CustomerListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const customers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@email.com',
      status: 'Active',
      orders: 15,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Mike Anderson',
      email: 'mike@email.com',
      status: 'Inactive',
      orders: 8,
      rating: 4.5
    }
  ];

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search customers"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchbar}
      />

      <ScrollView>
        {customers.map((customer, index) => (
          <Animated.View
            key={customer.id}
            entering={FadeInRight.delay(index * 100)}
          >
            <Card 
              style={styles.card}
              onPress={() => navigation.navigate('CustomerDetails', { customer })}
            >
              <Card.Title
                title={customer.name}
                subtitle={customer.email}
                left={(props) => (
                  <Avatar.Text 
                    {...props} 
                    label={customer.name.split(' ').map(n => n[0]).join('')}
                    backgroundColor={COLORS.secondary}
                  />
                )}
                right={(props) => (
                  <IconButton {...props} icon="chevron-right" />
                )}
              />
              <Card.Content style={styles.cardContent}>
                <Chip icon="star" style={styles.chip}>
                  {customer.rating}
                </Chip>
                <Chip icon="shopping" style={styles.chip}>
                  {customer.orders} orders
                </Chip>
                <Chip 
                  mode="outlined"
                  style={[
                    styles.chip,
                    { borderColor: customer.status === 'Active' ? COLORS.success : COLORS.error }
                  ]}
                >
                  {customer.status}
                </Chip>
              </Card.Content>
            </Card>
          </Animated.View>
        ))}
      </ScrollView>
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
    elevation: 2,
  },
  card: {
    margin: SPACING.m,
    marginTop: 0,
    backgroundColor: COLORS.white,
  },
  cardContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.s,
    paddingTop: SPACING.s,
  },
  chip: {
    marginRight: SPACING.xs,
  }
});

export default CustomerListScreen;
