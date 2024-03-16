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
            
            await axios.get('http://localhost:5001/company/getAll')
                .then((res => {
                    this.companies = res.data;
                    localStorage.setItem('companies', JSON.stringify(this.companies));
                    console.log(this.companies);
                }))
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});
