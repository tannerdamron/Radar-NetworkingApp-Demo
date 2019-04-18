import firebase from "nativescript-plugin-firebase";
import BackendService from "./BackendService";
import { backendService } from "../main";

export default class AuthService extends BackendService {
  async register(user) {
    return await firebase.createUser({
      email: user.email,
      password: user.password
    });    
  }

  async login(user) {
    await firebase
      .login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: user.email,
          password: user.password
        }
      })
      .then(async firebaseUser => {
        backendService.token = firebaseUser.uid;
        return firebaseUser                
      })
  }

  async resetPassword(email) {
    return await firebase.resetPassword({
      email: email
    })
  }

  async logout() {
    backendService.token = "";
    return await firebase.logout();
  }
}