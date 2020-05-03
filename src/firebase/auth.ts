import { authentication } from "./index";
import { Provider } from "../interfaces";
import { getProviderForProviderId } from "../utils/utils";
import { getConfigs } from "../configs";

const promptUserForPassword = () => "password";
const { actionCodeSettings } = getConfigs();

export const signUp = async (email: string, password: string) => {
  await authentication()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
    });
  window.localStorage.setItem("emailForSignIn", email);
  window.localStorage.setItem("passwordForSignIn", password);
};

export const createUser = async () => {
  const email = window.localStorage.getItem("emailForSignIn");
  const password = window.localStorage.getItem("passwordForSignIn");

  if (email && password) {
    authentication()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        window.localStorage.removeItem("emailForSignIn");
        window.localStorage.removeItem("passwordForSignIn");
        if (user) {
          user.sendEmailVerification(actionCodeSettings).then(() => {
            // sent an email
          });
        }
      })
      .catch((error) => {
        // Handle errors here.
      });
  }
};

export const login = async (email: string, password: string) => {
  await authentication()
    .signInWithEmailAndPassword(email, password)
    .catch(({ code: errorCode, message: errorMessage }) => {
      // Handle Errors here.
      // ...
    });
};

export const logout = async () => {
  await authentication().signOut();
};

export const loginWithSocialAccount = async (provider: Provider) => {
  // provider.addScope("email");

  await authentication()
    .signInWithPopup(provider)
    .catch((error) => {
      if (error.code === "auth/account-exists-with-different-credential") {
        const pendingCred = error.credential;
        const { email } = error;

        authentication()
          .fetchSignInMethodsForEmail(email)
          .then((methods) => {
            if (methods[0] === "password") {
              // TODO: implement promptUserForPassword.
              const password = promptUserForPassword();
              authentication()
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
              authentication()
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
