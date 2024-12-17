import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Text, Button, List, Divider, Badge, Portal, Modal } from 'react-native-paper';
import Animated, { FadeIn, SlideInRight } from 'react-native-reanimated';
import { COLORS, SPACING } from '../../../constants/theme';

const OrderDetailsScreen = ({ route, navigation }) => {
  const { order } = route.params;
  const [statusModalVisible, setStatusModalVisible] = useState(false);

  const orderTimeline = [
    { time: '10:00 AM', status: 'Order Placed', description: 'Customer placed the order' },
    { time: '10:15 AM', status: 'Driver Assigned', description: 'Mike Wilson assigned to order' },
    { time: '10:30 AM', status: 'In Progress', description: 'Driver en route to pickup location' }
  ];

  return (
    <ScrollView style={styles.container}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Card style={styles.card}>
          <Card.Title
            title={`Order ${order.id}`}
            subtitle={order.date}
            right={(props) => (
              <Badge size={30} style={[styles.badge, { backgroundColor: COLORS.primary }]}>
                {order.status}
              </Badge>
            )}
          />
          
          <Card.Content>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Customer Details</Text>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Name:</Text>
                <Text>{order.customerName}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Service:</Text>
                <Text>{order.service}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Amount:</Text>
                <Text style={styles.amount}>{order.amount}</Text>
              </View>
            </View>

            <Divider style={styles.divider} />

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Driver Assignment</Text>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Driver:</Text>
                <Text>{order.driver}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Vehicle:</Text>
                <Text>Toyota Hiace (ABC-123)</Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Title title="Order Timeline" />
          <Card.Content>
            {orderTimeline.map((event, index) => (
              <Animated.View 
                key={index}
                entering={SlideInRight.delay(index * 100)}
              >
                <List.Item
                  title={event.status}
                  description={event.description}
                  left={props => <List.Icon {...props} icon="clock-outline" />}
                  right={() => <Text style={styles.timeText}>{event.time}</Text>}
                />
                {index < orderTimeline.length - 1 && <Divider />}
              </Animated.View>
            ))}
          </Card.Content>
        </Card>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <Button 
          mode="contained"
          onPress={() => setStatusModalVisible(true)}
          style={styles.button}
          buttonColor={COLORS.primary}
        >
          Update Status
        </Button>
        <Button 
          mode="outlined"
          onPress={() => navigation.navigate('OrderTracking', { order })}
          style={styles.button}
          textColor={COLORS.primary}
        >
          Track Order
        </Button>
      </View>

      <Portal>
        <Modal
          visible={statusModalVisible}
          onDismiss={() => setStatusModalVisible(false)}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.modalTitle}>Update Order Status</Text>
          <List.Item
            title="In Progress"
            onPress={() => setStatusModalVisible(false)}
            left={props => <List.Icon {...props} icon="truck-delivery" />}
          />
          <List.Item
            title="Completed"
            onPress={() => setStatusModalVisible(false)}
            left={props => <List.Icon {...props} icon="check-circle" />}
          />
          <List.Item
            title="Cancelled"
            onPress={() => setStatusModalVisible(false)}
            left={props => <List.Icon {...props} icon="close-circle" />}
          />
        </Modal>
      </Portal>
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
    backgroundColor: COLORS.white,
  },
  section: {
    marginBottom: SPACING.m,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: SPACING.s,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  label: {
    color: COLORS.secondary,
  },
  amount: {
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  divider: {
    marginVertical: SPACING.m,
  },
  timeText: {
    color: COLORS.secondary,
    fontSize: 12,
  },
  buttonContainer: {
    padding: SPACING.m,
    gap: SPACING.m,
  },
  button: {
    borderColor: COLORS.primary,
  },
  modal: {
    backgroundColor: COLORS.white,
    padding: SPACING.m,
    margin: SPACING.l,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: SPACING.m,
  }
});

export default OrderDetailsScreen;
