import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://<your-xsuaa-domain>';
const CLIENT_ID = '<your-client-id>';
const CLIENT_SECRET = '<your-client-secret>';

export const login = async (username, password) => {
  const data = new URLSearchParams();
  data.append('grant_type', 'password');
  data.append('username', username);
  data.append('password', password);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
  };

  const res = await axios.post(`${BASE_URL}/oauth/token`, data, { headers });
  await AsyncStorage.setItem('token', res.data.access_token);
  return res.data;
};