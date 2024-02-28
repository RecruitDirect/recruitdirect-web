import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const userAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async signInGoogle() {
            var provider = new firebase.auth.GoogleAuthProvider();

            await firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    var credential = result.credential;
        
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    var token = credential.accessToken;
                    // The signed-in user info.
                    this.user = result.user;
                    // IdP data available in result.additionalUserInfo.profile.

                    localStorage.setItem('user', JSON.stringify(this.user));
                    // redirect to previous url or default to home page
                    router.push(this.returnUrl || '/dashboards/modern');
                }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                }
            );
        },
        async signUp(username: string, email: string, password: string) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    this.user = userCredential.user;
                    // ...
                    console.log(userCredential);
                    // store user details and jwt in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(this.user));
                    // redirect to previous url or default to home page
                    router.push(this.returnUrl || '/dashboards/modern');
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
        },
        async login(email: string, password: string) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    this.user = userCredential.user;
                    // ...
                    console.log(userCredential);
                    // store user details and jwt in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(this.user));
                    // redirect to previous url or default to home page
                    router.push(this.returnUrl || '/dashboards/modern');
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
        },
        logout() {
            firebase.auth().signOut().then(() => {
                // Sign-out successful.
                this.user = null;
                localStorage.removeItem('user');
                router.push('/');
              }).catch((error) => {
                // An error happened.
              });
        }
    }
});
