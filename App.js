import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(courseGoals => [...courseGoals, 
        {key: Math.random().toString(), 
        value: goalTitle}])
        setIsAddMode(false);
  }

  const deleteGoal = (goalId) => {

    setCourseGoals( currentGoals => {
      // if the current item is not equal to the key at the current goal, return false
      return currentGoals.filter( goal => goal.key !== goalId);
    })
  }

  const cancelGoalHandler = () => {

    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsAddMode(true)}/>
      <View style={styles.inputContainer}>
        <GoalInput 
          addGoalHandler={addGoalHandler} 
          isAddMode={isAddMode} 
          cancelGoalHandler={cancelGoalHandler}/>
      </View>

      <FlatList
      keyExtractor={(item, index) => item.key}
        data={courseGoals} 
        renderItem={ itemData => (
          <GoalItem 
            keyVal={itemData.item.key} 
            onDelete={deleteGoal} 
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  screen: {
    padding: 50,
  },

  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  
  textField: {
    borderColor: 'orange', 
    borderWidth: 1, 
    padding: 7, width: 200
  },
});