import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth, firestore } from './firebase/index';
import { LoginedHome } from './containers/loginedHome';
import { LogoutedHome } from './components/home/logoutedHome';
import { Contact } from './containers/contact';
import { VisibilityContainer } from './containers/visibilityContainer';
import { Terms } from './terms';
import { Policy } from './policy';
import { User } from './interfaces';
import { pages } from './pages';
import { Layout } from './containers/layout';
import { fetchExpense, resetExpense } from './stores/expense';
import { loading, loaded } from './stores/loading';

const App: FC = () => {
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

  return (
    <VisibilityContainer>
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
    </VisibilityContainer>
  );
};

export default App;
