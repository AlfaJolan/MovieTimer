function findUniqueJobTypes(data) {
    if (!data || !Array.isArray(data)) {
        console.error('Invalid input. Please provide an array of objects.');
        return [];
    }

    const jobTypes = [];

    data.forEach((item) => {
        if (item && typeof item === 'object' && 'job' in item) {
            const jobType = item.job;
            if (!jobTypes.includes(jobType)) {
                jobTypes.push(jobType);
            }
        }
    });

    return jobTypes;
}