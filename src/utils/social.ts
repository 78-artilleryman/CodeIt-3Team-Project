import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

interface SocialLoginMapping {
  [index: string]: GoogleAuthProvider | GithubAuthProvider;
}

export const socialLoginMapping: SocialLoginMapping = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
};
