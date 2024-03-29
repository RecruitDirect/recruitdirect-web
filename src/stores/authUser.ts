import { defineStore } from 'pinia';
import axios from 'axios';
import { userAuthStore } from './auth';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUsersStore = defineStore({
    id: 'userData',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        userEmail: JSON.parse(localStorage.getItem('user'))?.email || null,
        // @ts-ignore
        userData: JSON.parse(localStorage.getItem('userData')) || null,
        recruiterType: new Map<string, string>([
            ['RECRUITER', 'Recruiter'],
            ['REFERRAL', 'Referral'],
            ['ACCOUNT_MANAGER', 'Account manager'],
            ['RECRUITER_ACCOUNT_MANAGER', 'Recruiter and Account manager'],
            ['REFERRAL_ACCOUNT_MANAGER', 'Referral and Account manager']
        ])
    }),
    actions: {
        async loadUser() {
            const userRole = userAuthStore().role;
            if (userRole == 'recruiter') {
                return await axios.get('http://localhost:5001/recruiter/info/email?email=' + this.userEmail)
                .then((res => {
                    this.userData = res.data;
                    localStorage.setItem('userData', JSON.stringify(this.userData));
                    console.log(this.userData);
                }))
                .catch((error) => {
                    console.log(error);
                });
            }
            else {
                return await axios.get('http://localhost:5001/hiringclient/info/email?email=' + this.userEmail)
                .then((res => {
                    this.userData = res.data;
                    localStorage.setItem('userData', JSON.stringify(this.userData));
                    console.log(this.userData);
                }))
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
});
