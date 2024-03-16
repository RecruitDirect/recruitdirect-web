import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useCompaniesStore = defineStore({
    id: 'companies',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        companies: JSON.parse(localStorage.getItem('companies')) || [],
        industries: [
            'Internet', 'Retail', 'Hostpitals and Health Care',
            'Staffing and Recruiting', 'IT Services and IT Consulting',
            'Software Development', 'Restaurants', 'Financial Services',
            'Hospitality', 'Technology, Information and Internet',
            'Business Consulting and Services', 'Accounting', 'Construction',
            'Retail Apparel and Fashion'
        ]
    }),
    actions: {
        async loadCompanies() {
            this.companies = [{
                    id: 1,
                    name: "Self",
                    url: "test.com",
                    size: 1,
                    location: "Remote"
                },
                {
                    id: 2,
                    name: "Infox",
                    url: "test.com",
                    size: 34,
                    location: "Seattle"
                },
                {
                    id: 3,
                    name: "TestCom",
                    url: "test.com",
                    size: 12,
                    location: "Vancouver"
                }
            ];
            localStorage.setItem('companies', JSON.stringify(this.companies));
            return Promise.resolve(this.companies);
            // return await axios.get('http://localhost:5001/recruiter/info/email?email=' + this.userEmail)
            //     .then((res => {
            //         this.userData = res.data;
            //         localStorage.setItem('companies', JSON.stringify(this.companies));
            //         console.log(this.userData);
            //     }))
            //     .catch((error) => {
            //         console.log(error);
            //     });
        }
    }
});
