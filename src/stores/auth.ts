import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import axios from 'axios';
const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const userAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        user: JSON.parse(localStorage.getItem('user')),
        role: localStorage.getItem('role'),
        returnUrl: null
    }),
    actions: {
        setRole(role: string) {
            this.role = role;
            localStorage.setItem('role', role);
        },
        async signInGoogle(role: string) {
            var provider = new firebase.auth.GoogleAuthProvider();

            await firebase.auth()
                .signInWithPopup(provider)
                .then((result) => {
                    /** @type {firebase.auth.OAuthCredential} */
                    console.log(result);
                    var credential = result.credential;
                    // The signed-in user info.
                    this.user = result.user;
                    // IdP data available in result.additionalUserInfo.profile.

                    if (result.additionalUserInfo?.isNewUser === true) {
                        if (role == 'recruiter') {
                            axios.post('http://localhost:5001/recruiter/add?name='+ this.user.displayName + '&email=' + this.user.email)
                            .then((res => {
                                this.user.id = res.data.id;
                                localStorage.setItem('user', JSON.stringify(this.user));
                                localStorage.setItem('userData', JSON.stringify(res.data));
                                localStorage.setItem('role', role);

                                // redirect to previous url or default to home page
                                router.push(this.returnUrl || '/dashboards/modern');
                            }))
                            .catch((error) => {
                                console.log(error);
                            });
                        }
                        else {
                            axios.post('http://localhost:5001/hiringclient/add?name='+ this.user.displayName + '&email=' + this.user.email)
                                .then((res => {
                                    this.user.id = res.data.id;
                                    localStorage.setItem('user', JSON.stringify(this.user));
                                    localStorage.setItem('userData', JSON.stringify(res.data));
                                    localStorage.setItem('role', role);
                                    // redirect to previous url or default to home page
                                    router.push(this.returnUrl || '/dashboards/modern');
                                }))
                                .catch((error) => {
                                    console.log(error);
                                });
                        }
                    }
                    else {
                        localStorage.setItem('user', JSON.stringify(this.user));
                        localStorage.setItem('role', role);
                        // redirect to previous url or default to home page
                        router.push(this.returnUrl || '/dashboards/modern');
                    }
                    
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
        async signUp(username: string, email: string, password: string, role: string) {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    this.user = userCredential.user;
                    // ...
                    console.log(userCredential);
                    if (role == 'recruiter') {
                        axios.post('http://localhost:5001/recruiter/add?name='+ this.user.displayName + '&email=' + this.user.email)
                        .then((res => {
                            this.user.id = res.data.id;
                            localStorage.setItem('user', JSON.stringify(this.user));
                            localStorage.setItem('userData', JSON.stringify(res.data));
                            localStorage.setItem('role', role);
                            // redirect to previous url or default to home page
                            router.push(this.returnUrl || '/dashboards/modern');
                        }))
                        .catch((error) => {
                            console.log(error);
                        });
                    }
                    else {
                        axios.post('http://localhost:5001/hiringclient/add?name='+ this.user.displayName + '&email=' + this.user.email)
                        .then((res => {
                            this.user.id = res.data.id;
                            localStorage.setItem('user', JSON.stringify(this.user));
                            localStorage.setItem('userData', JSON.stringify(res.data));
                            localStorage.setItem('role', role);
                            // redirect to previous url or default to home page
                            router.push(this.returnUrl || '/dashboards/modern');
                        }))
                        .catch((error) => {
                            console.log(error);
                        });
                    }
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
        },
        async login(email: string, password: string, role: string) {
            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in 
                    this.user = userCredential.user;
                    // ...
                    console.log(userCredential);
                    
                    localStorage.setItem('user', JSON.stringify(this.user));
                    localStorage.setItem('role', role);

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
                localStorage.removeItem('role');
                router.push('/');
              }).catch((error) => {
                // An error happened.
              });
        }
    }
});
