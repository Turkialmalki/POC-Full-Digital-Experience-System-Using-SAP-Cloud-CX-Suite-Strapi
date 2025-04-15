import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { login } from './src/authService';
import { fetchSAPData } from './src/apiService';

export default function App() {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await login('demo-user', 'demo-pass');
      setToken(result.access_token);
    } catch (e) {
      console.error('Login error:', e);
    }
  };

  const getData = async () => {
    try {
      const sapData = await fetchSAPData();
      setData(sapData);
    } catch (e) {
      console.error('Data fetch error:', e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>SAP Mobile Services Demo</Text>
        <Button title="Login to SAP" onPress={handleLogin} />
        {token && <Button title="Fetch SAP Data" onPress={getData} />}
        {data && <Text style={styles.data}>{JSON.stringify(data, null, 2)}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, marginBottom: 20 },
  data: { marginTop: 20, fontSize: 12 }
});