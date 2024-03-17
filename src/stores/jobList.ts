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
            ['REMOTE', 'Remote']]),
        currentJob: undefined
    }),
    actions: {
        async loadJobs() {
            return await axios.get('http://localhost:5001/job/list/recruitingjobs')
                .then((res => {
                    this.jobs = res.data;
                    console.log(this.jobs.length);
                    return res.data;
                }))
                .catch((error) => {
                    console.log(error);
                });
        },
        async fetchJob(jobId: String) {
            return await axios.get('http://localhost:5001/job/details?jobId=' + jobId)
                .then((res => {
                    this.currentJob = res.data;
                    console.log(this.currentJob);
                }))
                .catch((error) => {
                    console.log(error);
                });
        },
        async searchJobs(searchValue: String, jobTypes: Array<String>, remoteTypes: Array<String>, companies: Array<Object>) {
            let url = 'http://localhost:5001/job/list/recruitingjobs?';
            if (searchValue != undefined && searchValue.length > 0) {
                url += ('location=' + searchValue);
            }
            if (jobTypes.length > 0) {
                url += ('jobTypes=' + jobTypes + '&');
            }
            if (remoteTypes.length > 0) {
                url += ('remoteTypes=' + remoteTypes + '&');
            }
            if (companies.length > 0) {
                url += ('companyIds=' + companies.map(c => c.id));
            }
            return await axios.get(url)
                .then((res => {
                    this.jobs = res.data;
                    console.log(this.jobs.length);
                }))
                .catch((error) => {
                    console.log(error);
                });
        },
        async postJob(jobTitle: string, jobType: string, remoteType: string,
            jobCategory: Array<string>, location: string, expirationDate: string, bonus: number,
            bottomSalary: number, topSalary: number, hiringClientId: number, desc: string, skillDesc: string) {
            let url = 'http://localhost:5001/job/add';

            let form = new FormData();

            form.append('name', jobTitle);
            form.append('jobType', jobType);
            form.append('remoteType', remoteType);
            form.append('jobCategories', jobCategory.toString());
            form.append('location', location);
            form.append('expirationTime', expirationDate + ' 23:59:59');
            form.append('totalBonus', bonus.toString());
            form.append('bottomSalary', bottomSalary.toString());
            form.append('topSalary', topSalary.toString());
            // form.append('hiringClientId', hiringClientId.toString());
            form.append('hiringClientId', '2');
            form.append('description', desc);
            form.append('skillDescription', skillDesc);

            return await axios.post(url, form, 
                {
                    headers: {
                    "Content-Type": "multipart/form-data"
              }})
                .then((res => {
                    console.log(res.data);
                }))
                .catch((error) => {
                    console.log(error);
                });
        },
        // async getCandidatesGroup(jobId: String) {
        //     return await axios.get('http://localhost:5001/submission/list/byjobid?jobId=' + jobId)
        //         .then((res => {
        //             this.candidateGroup.resumeReview = res.data;
        //             console.log(this.currentJob);
        //         }))
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // },
        setCurrentJob(job: any) {
            this.currentJob = job;
        }
    }
});
