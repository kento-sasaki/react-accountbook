import React, { FC, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { auth } from "./firebase/index";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Counter } from "./components/counter";
import { LoginForm } from "./containers/loginForm";
import { User } from "./interfaces";
import { pages } from "./pages";
import { Layout } from "./components/layout/layout";

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  auth().onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

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
        <Route path={pages.counter.path}>
          <div>
            <Helmet>
              <title>{pages.counter.title}</title>
            </Helmet>
            <Counter />
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
