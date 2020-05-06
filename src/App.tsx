import React, { FC, useState } from "react";
import { authentication } from "./firebase/index";
import { Counter } from "./components/counter";
import { LoginForm } from "./components/loginForm";
import { User } from "./interfaces";

const App: FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  authentication().onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  if (currentUser) {
    return (
      <>
        <Counter />
      </>
    );
  }

  return <LoginForm />;
};

export default App;
