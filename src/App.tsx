import React, { FC, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authentication } from "./firebase/index";
import { Counter } from "./components/counter";
import { LoginForm } from "./containers/loginForm";
import { User } from "./interfaces";
import { pages } from "./pages";

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  authentication().onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  return (
    <Switch>
      <Route path="/" component={currentUser ? Counter : LoginForm} exact />
      <Route path={pages.counter.path} component={Counter} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
