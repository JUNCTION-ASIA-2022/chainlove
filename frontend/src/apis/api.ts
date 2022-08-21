import axios from 'axios';

export const postAPI = async <T>(data): Promise<T | undefined> => {
  try {
    const response = await axios.post(`http://13.124.52.202:8080/wallets`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getAPI = async <T>(id: number): Promise<T | undefined> => {
  try {
    const response = await axios.get(`http://13.124.52.202:8080/wallets/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
