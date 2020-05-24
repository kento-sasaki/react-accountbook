import React, { FC, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authentication } from "./firebase/index";
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

  authentication().onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  return (
    <Layout currentUser={currentUser}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={pages.counter.path} component={Counter} />
        <Route path={pages.login.path} component={LoginForm} />
        <Route path={pages.about.path} component={About} />
        <Route path={pages.contact.path} component={Contact} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
