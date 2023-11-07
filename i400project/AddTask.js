import firebase from './firebaseConfig';
const addTaskToFirestore = async (categoryName, task) => {
    try {
      await firestore().collection('categories').doc(categoryName).collection('tasks').add({
        name: task,
        // Any additional task properties can be added here
      });
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };