import { onValue, ref } from 'firebase/database';
import { database } from '../firebase';

export const fetchTeachers = () => {
  return new Promise((resolve, reject) => {
    const reference = ref(database);
    onValue(
      reference,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
