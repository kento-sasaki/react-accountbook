import { authentication } from "../firebase/index";

export const getProviderForProviderId = (method: string) => {
  switch (method) {
    case "google.com":
      return new authentication.GoogleAuthProvider();

    case "facebook.com":
      return new authentication.FacebookAuthProvider();

    case "twitter.com":
      return new authentication.TwitterAuthProvider();

    default:
      return null;
  }
};
