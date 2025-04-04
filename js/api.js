import axios from 'axios';

const API_KEY = '49443008-facc5dee4df37595ab3de558c';
const BASE_URL = 'https://pixabay.com/api/';
const DEFAULT_PER_PAGE = 40;

function apiService() {
  const service = {
    searchQuery: '',
    page: 1,
    PER_PAGE: DEFAULT_PER_PAGE,
  };

  const fetchGallery = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          key: API_KEY,
          q: service.searchQuery,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: service.page,
          per_page: service.PER_PAGE,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch data');
    }
  };

  const incrementPage = () => {
    service.page += 1;
  };

  const resetPage = () => {
    service.page = 1;
  };

  const getQuery = () => {
    return service.searchQuery;
  };

  const setQuery = (newQuery) => {
    service.searchQuery = newQuery;
    resetPage();
  };

  const getPage = (currentPage) => {
    service.page = currentPage;
  };

  return {
    fetchGallery,
    incrementPage,
    resetPage,
    getQuery,
    setQuery,
    getPage,
  };
}

export default apiService();