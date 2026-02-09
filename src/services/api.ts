

const BASE_DELAY = 300; 
export const mockApi = {
  fetchData: async (endpoint: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        const isError = Math.random() < 0.05;

        if (isError) {
          reject(new Error(`Failed to fetch ${endpoint}. Server is unreachable.`));
        }

       
        const responses: Record<string, any> = {
          stats: { revenue: "$54,230", users: "1,245", orders: "342", rate: "4.3%" },
          revenue: [
            { name: 'Jan', value: 4000 }, { name: 'Feb', value: 5200 },
            { name: 'Mar', value: 4800 }, { name: 'Apr', value: 6100 },
            { name: 'May', value: 5900 }, { name: 'Jun', value: 7200 }
          ],
          traffic: [
            { name: 'Direct', value: 4500 }, { name: 'Organic', value: 3200 },
            { name: 'Social', value: 2100 }, { name: 'Referral', value: 1200 }
          ],
        };

        resolve(responses[endpoint] || { data: [] });
      }, BASE_DELAY);
    });
  }
};