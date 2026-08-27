const APP_ID = import.meta.env.VITE_ADZUNA_APP_ID;
const APP_KEY = import.meta.env.VITE_ADZUNA_APP_KEY;

export const searchJobs = async (keyword, location) => {
  try {
    const url = `https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&what=${encodeURIComponent(
      keyword
    )}&where=${encodeURIComponent(location)}&results_per_page=20`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Job search error:", error);
    throw error;
  }
};