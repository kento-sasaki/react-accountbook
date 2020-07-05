import { storage, auth } from './index';

export const uploadFile = async (file: File) => {
  const rootRef = storage().ref();
  console.log(auth().currentUser?.uid, 'success');
  const imageRef = rootRef.child(`${auth().currentUser?.uid}/images/${file.name}`);
  await imageRef.put(file).catch((error) => {
    console.log(error.message);
    console.log(error);
  });
};
