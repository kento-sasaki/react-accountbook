import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth, firestore } from '../firebase/index';
import { User } from '../interfaces';
import { fetchExpense, resetExpense } from '../stores/expense';
import { loading, loaded } from '../stores/loading';

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      dispatch(loaded());
    });

    if (currentUser) {
      firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('expense')
        .onSnapshot(() => {
          dispatch(fetchExpense());
        });
    } else {
      dispatch(resetExpense());
    }
  }, [currentUser, dispatch]);

  return { currentUser };
};
