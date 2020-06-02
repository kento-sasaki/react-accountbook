export const getConfigs = () => {
  if (process.env.REACT_APP_FIREBASE_CONTINUE_URL) {
    return {
      actionCodeSettings: {
        url: process.env.REACT_APP_FIREBASE_CONTINUE_URL,
        handleCodeInApp: true,
      },
    };
  }

  return {
    actionCodeSettings: {
      url: 'http://localhost:3000/',
      handleCodeInApp: true,
    },
  };
};
