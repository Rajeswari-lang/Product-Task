import axios from 'axios';

const fetchProducts = async () => {
  const response = await axios.get('/mock/products.json');
  return response.data;
};

export { fetchProducts };
