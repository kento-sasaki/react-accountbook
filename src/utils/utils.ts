import { auth } from "../firebase/index";

export const getProviderForProviderId = (method: string) => {
  switch (method) {
    case "google.com":
      return new auth.GoogleAuthProvider();

    case "facebook.com":
      return new auth.FacebookAuthProvider();

    case "twitter.com":
      return new auth.TwitterAuthProvider();

    default:
      return null;
  }
};
