import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/search';
const key: string = 'BBfUDZ9_xs1Fql0aSk2TLayxKF_kokkB-DtnsDQxJ-E';

export const getImagesByTopic = async (topic: string, page: number) => {
  const response = await axios.get(`/photos?query=${topic}&page=${page}&per_page=15&orientation=landscape&client_id=${key}`);
  return response;
};
