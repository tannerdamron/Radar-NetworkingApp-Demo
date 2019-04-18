import Vue from 'nativescript-vue'
import firebase from "nativescript-plugin-firebase"  
import BackendService from './services/BackendService' 
import AuthService from './services/AuthService'
import App from './components/App'
import store from './store';
import LoginPage from './components/LoginPage'

export const backendService = new BackendService()
export const authService = new AuthService()

Vue.prototype.$authService = authService
Vue.prototype.$backendService = backendService

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

// firebase
//   .init({
//     onAuthStateChanged: data => { 
//     console.log((data.loggedIn ? "Logged in to firebase" : "Logged out from firebase") + " (firebase.init() onAuthStateChanged callback)");
//     if (data.loggedIn) {
//       backendService.token = data.user.uid
//       console.log("uID: " + data.user.uid)
//     }
//     else {      
//     }
//   }
//   })
//   .then(
//     function(instance) {
//       console.log("firebase.init done");
//     },
//     function(error) {
//       console.log("firebase.init error: " + error);
//     }
//   );

new Vue({
  store,
  render: h => h('frame', [h(LoginPage)])
}).$start()
