import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddTask({ onAddTask }) {
    const [taskName, setTaskName] = useState('');

    const addTask = () => {
        if (taskName) {
            onAddTask(taskName);
            setTaskName('');
        }
    };

    return (
        <View>
            <Text>Create Task</Text>
            <TextInput
                placeholder="Task Name"
                value={taskName}
                onChangeText={text => setTaskName(text)}
            />
            <Button title="Add Task" onPress={addTask} />
        </View>
    );
};


