import React from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const GoalItem = (props) => {

    return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.keyVal)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    )           
}

const styles = StyleSheet.create({
  
    listItem: {
  
      padding: 10,
      margin: 10, 
      backgroundColor: 'ivory',
      borderColor: 'powderblue',
      borderWidth: 3,
      borderRadius: 5,
    }
  });

export default GoalItem;