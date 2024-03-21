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

        },
        async addCompany(name: string, url: string, location: string, size: number, logoUrl: string, description: string, id: number){
            try{
                let addUrl = 'http://localhost:5001/company/add';
                let form = new FormData();
                form.append('name', name);
                form.append('url', url);
                form.append('location', location);
                form.append('size', size.toString());
                form.append('logoUrl', logoUrl);
                form.append('description', description);
                const response = await axios.post(addUrl, form, 
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    });
                const companyId = response.data.id;
                const updateUrl = `http://localhost:5001/hiringclient/updateCompany?id=${id}&companyId=${companyId}`;
                await axios.patch(updateUrl);
            }catch(error){
                console.error(error.message);
            }
            
        }
    }
});
