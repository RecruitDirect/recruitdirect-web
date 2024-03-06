import { defineStore } from 'pinia';
import axios from 'axios';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const useJobsStore = defineStore({
    id: 'jobs',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        jobs: [],
        jobType: new Map<string, string>([
            ['FULLTIME', 'Full-time'], 
            ['PARTTIME', 'Part-time'],
            ['CONTRACT', 'contract'],
            ['OTHER', 'Other']]),
        remoteType: new Map<string, string>([
            ['ON_SITE', 'On-site'], 
            ['HYBRID', 'Hybrid'], 
            ['REMOTE', 'Remote']])
    }),
    actions: {
        async loadJobs() {
            return await axios.get('http://localhost:5001/job/list/recruitingjobs')
                .then((res => {
                    this.jobs = res.data;
                    console.log(this.jobs.length);
                }))
                .catch((error) => {
                    console.log(error);
                });
        }
    }
});
