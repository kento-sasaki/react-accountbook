import * as admin from 'firebase-admin';

admin.initializeApp();

export { onCreateUser, onDeleteUser } from './auth.functions';
export { onCreate } from './firestore.functions';

