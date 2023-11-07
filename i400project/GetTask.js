import firestore from '@react-native-firebase/firestore';

const getTasksFromFirestore = async (categoryName) => {
  try {
    const tasksSnapshot = await firestore().collection('categories').doc(categoryName).collection('tasks').get();
    const tasks = [];
    tasksSnapshot.forEach((doc) => {
      tasks.push({ id: doc.id, ...doc.data() });
    });
    return tasks;
  } catch (error) {
    console.error('Error retrieving tasks: ', error);
    return [];
  }
};