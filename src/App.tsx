import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth, firestore } from './firebase/index';
import { LoginedHome } from './components/home/loginedHome';
import { LogoutedHome } from './components/home/logoutedHome';
import { Contact } from './containers/contact';
import { Terms } from './terms';
import { Policy } from './policy';
import { User } from './interfaces';
import { pages } from './pages';
import { Layout } from './components/layout/layout';
import { fetchExpense, resetExpense } from './stores/expense';
import { loading, loaded } from './stores/loading';

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading());
    auth().onAuthStateChanged((user) => {
      console.log('auth().onAuthStateChanged start!');
      setCurrentUser(user);
      dispatch(loaded());
    });
    console.log('USE EFFECT');
    if (currentUser) {
      firestore()
        .collection('users')
        .doc(currentUser.uid)
        .collection('expense')
        .onSnapshot(() => {
          dispatch(fetchExpense());
          console.log('Firestore was updated');
        });
    } else {
      dispatch(resetExpense());
    }
  }, [currentUser, dispatch]);

  return (
    <Layout currentUser={currentUser}>
      <Switch>
        <Route path="/" exact>
          <div>
            <Helmet>
              <title>{pages.home.title} | VisiBO</title>
            </Helmet>
            {currentUser ? <LoginedHome /> : <LogoutedHome />}
          </div>
        </Route>
        <Route path={pages.contact.path}>
          <div>
            <Helmet>
              <title>{pages.contact.title} | VisiBO</title>
            </Helmet>
            <Contact />
          </div>
        </Route>
        <Route path={pages.terms.path}>
          <div>
            <Helmet>
              <title>{pages.terms.title} | VisiBO</title>
            </Helmet>
            <Terms />
          </div>
        </Route>
        <Route path={pages.policy.path}>
          <div>
            <Helmet>
              <title>{pages.policy.title} | VisiBO</title>
            </Helmet>
            <Policy />
          </div>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
