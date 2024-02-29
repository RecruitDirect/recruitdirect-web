import { defineStore } from 'pinia';
import axios from 'axios';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useUsersStore = defineStore({
    id: 'userData',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        userEmail: JSON.parse(localStorage.getItem('user')).email || null,
        userData: null
    }),
    actions: {
        async loadUser() {
            return await axios.get('http://localhost:5001/recruiter/info/email?email=' + this.userEmail)
                .then((res => {
                    this.userData = res.data;
                    console.log(this.userData);
                }))
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});
