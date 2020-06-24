import { auth } from './index';
import { Provider } from '../interfaces';
import { getProviderForProviderId } from '../utils/utils';
import { getConfigs } from '../configs';

const promptUserForPassword = () => 'password';
const { actionCodeSettings } = getConfigs();

export const signUp = async (email: string, password: string) => {
  await auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      console.log(error);
    });
  window.localStorage.setItem('emailForSignIn', email);
  window.localStorage.setItem('passwordForSignIn', password);
};

export const createUser = async () => {
  const email = window.localStorage.getItem('emailForSignIn');
  const password = window.localStorage.getItem('passwordForSignIn');

  if (email && password) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        window.localStorage.removeItem('emailForSignIn');
        window.localStorage.removeItem('passwordForSignIn');
        if (user) {
          user.sendEmailVerification(actionCodeSettings).then(() => {
            // sent an email
          });
        }
      })
      .catch((error) => {
        // Handle errors here.
        console.log(error);
      });
  }
};

export const login = async (email: string, password: string) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .catch(({ code: errorCode, message: errorMessage }) => {
      // Handle Errors here.
      // ...
      console.log(errorCode, errorMessage);
    });
};

export const logout = async () => {
  await auth().signOut();
};

export const loginWithSocialAccount = async (provider: Provider) => {
  // provider.addScope("email");

  await auth()
    .signInWithPopup(provider)
    .catch((error) => {
      if (error.code === 'auth/account-exists-with-different-credential') {
        const pendingCred = error.credential;
        const { email } = error;

        auth()
          .fetchSignInMethodsForEmail(email)
          .then((methods) => {
            if (methods[0] === 'password') {
              // TODO: implement promptUserForPassword.
              const password = promptUserForPassword();
              auth()
                .signInWithEmailAndPassword(email, password)
                .then(({ user }) => {
                  if (user) {
                    user.linkWithCredential(pendingCred);
                  }
                })
                .then(() => {
                  // Google account successfully linked to the existing Firebase user.
                });

              return;
            }
            const anotherProvider = getProviderForProviderId(methods[0]);
            if (anotherProvider) {
              auth()
                .signInWithPopup(anotherProvider)
                .then(({ user }) => {
                  if (user) {
                    user.linkAndRetrieveDataWithCredential(pendingCred);
                  }
                });
            }
          });
      }
    });
};

export const loginAnonymously = () => {
  auth().signInAnonymously();
};
