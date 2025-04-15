import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchSAPData = async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await axios.get(
    'https://<your-app-url>/destination/MyBackend/endpoint',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};