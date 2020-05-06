import React, { FC, useState } from "react";
import { authentication } from "./firebase/index";
import { Home } from "./components/home";
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
        <Home />
      </>
    );
  }

  return <LoginForm />;
};

export default App;
