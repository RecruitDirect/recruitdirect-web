import { defineStore } from 'pinia';
import axios from 'axios';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';
import { string } from 'yup';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useRecruiterStore = defineStore({
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
            // this.userData = {
            //     id: 12,
            //     name: "Jian Hou",
            //     email: "houjian.max@gmail.com",
            //     type: "RECRUITER",
            //     workYears: 5,
            //     url: "linkedin/jihou",
            //     company: {
            //         id: 1,
            //         name: "Infox",
            //         url: "test.com",
            //         size: 34,
            //         location: "Seattle"
            //     },
            //     active: true,
            //     industries: ['Internet', 'Retail'],
            //     phoneNum: '2343456789',
            //     intro: ''
            // };
            // localStorage.setItem('userData', JSON.stringify(this.userData));
            // return Promise.resolve(this.userData);
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
    }
});
