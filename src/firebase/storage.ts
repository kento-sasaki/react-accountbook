import { storage, auth } from './index';

export const uploadFile = async (file: File) => {
  console.log('------------ START ------------');
  const rootRef = storage().ref();
  const imageRef = rootRef.child(`${auth().currentUser?.uid}/images/${file.name}`);
  await imageRef.put(file).catch((error) => {
    console.log(error.message);
    console.log(error);
  });
  console.log('------------ FINISH ------------');
};
