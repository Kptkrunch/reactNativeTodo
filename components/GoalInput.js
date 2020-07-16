import React, {useState} from 'react';
import {TextInput, Button, StyleSheet, Modal, View} from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const textInput = (enteredText) => {

      setEnteredGoal(enteredText);
    }

    const onAddGoalHandler = () => {

      props.addGoalHandler(enteredGoal);
      setEnteredGoal('');
    }

    return (
      <Modal visible={props.isAddMode} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput placeholder="enter your goal here" 
              style={styles.textField} 
              onChangeText={textInput}
              value={enteredGoal}/>
          <View style={styles.modalButtonsContainer}>
            <Button title="ADD" onPress={onAddGoalHandler}/>
            <Button title="END" color="red" onPress={props.cancelGoalHandler}/>
          </View>

        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({

  inputContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },

  textField: {
    borderColor: 'tomato',
    borderRadius: 3, 
    borderWidth: 1, 
    padding: 7,
    marginBottom: 10, 
    width: 200,
  },

  modalButtonsContainer: {

    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default GoalInput;


