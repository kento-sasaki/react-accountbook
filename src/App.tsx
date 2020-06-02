import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { auth } from './firebase/index';
import { Home } from './components/home';
import { About } from './components/about';
import { Contact } from './components/contact';
import { LoginForm } from './containers/loginForm';
import { User } from './interfaces';
import { pages } from './pages';
import { Layout } from './components/layout/layout';
import { fetchExpense, resetExpense } from './stores/expense';

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const dispatch = useDispatch();

  auth().onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchExpense());
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
              <title>{pages.home.title}</title>
            </Helmet>
            <Home />
          </div>
        </Route>
        <Route path={pages.login.path}>
          <div>
            <Helmet>
              <title>{pages.login.title}</title>
            </Helmet>
            <LoginForm />
          </div>
        </Route>
        <Route path={pages.about.path}>
          <div>
            <Helmet>
              <title>{pages.about.title}</title>
            </Helmet>
            <About />
          </div>
        </Route>
        <Route path={pages.contact.path}>
          <div>
            <Helmet>
              <title>{pages.contact.title}</title>
            </Helmet>
            <Contact />
          </div>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
