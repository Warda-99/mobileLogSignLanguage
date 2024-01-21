import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const data = [
    {
      "id": 1,
      "date": "2024-01-03T12:30:00Z",
      "descriptionPolish": "Przykładowy opis po polsku 1",
      "descriptionEnglish": "Sample description in English 1",
      "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand1.png?alt=media&token=b797be70-531f-44dc-a322-5e3babef7e7e"
    },
    {
      "id": 2,
      "date": "2024-01-04T14:45:00Z",
      "descriptionPolish": "Przykładowy opis po polsku 2",
      "descriptionEnglish": "Sample description in English 2",
      "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand2.png?alt=media&token=3894bd63-6364-4308-aa3e-70dc59f3bdb3"
    },
    {
      "id": 3,
      "date": "2024-01-04T14:55:00Z",
      "descriptionPolish": "Przykładowy opis po polsku 3",
      "descriptionEnglish": "Sample description in English 3",
      "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand3.png?alt=media&token=adc2288d-bd71-455a-a76a-fecd1248ac5f"
    },
    {
      "id": 4,
      "date": "2024-01-04T14:55:00Z",
      "descriptionPolish": "Przykładowy opis po polsku 4",
      "descriptionEnglish": "Sample description in English 4",
      "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand4.png?alt=media&token=fe09df0e-62d6-47b3-a839-c25f4f3a17a6"
    },
    {
      "id": 5,
      "date": "2024-01-04T14:55:00Z",
      "descriptionPolish": "Przykładowy opis po polsku 5",
      "descriptionEnglish": "Sample description in English 5",
      "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand5.png?alt=media&token=b9ed4a65-e030-41ee-8ede-c8f4aae957bb"
    },
    {
      "id": 6,
      "date": "2024-01-04T14:55:00Z",
      "descriptionPolish": "Przykładowy opis po polsku 6",
      "descriptionEnglish": "Sample description in English 6",
      "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand2.png?alt=media&token=3894bd63-6364-4308-aa3e-70dc59f3bdb3"
    },
    {
      "id": 7,
      "date": "2024-01-04T14:55:00Z",
      "descriptionPolish": "Przykładowy opis po polsku 7",
      "descriptionEnglish": "Sample description in English 7",
      "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand4.png?alt=media&token=fe09df0e-62d6-47b3-a839-c25f4f3a17a6"
    },
    {
        "id": 8,
        "date": "2024-01-04T14:45:00Z",
        "descriptionPolish": "Przykładowy opis po polsku 8",
        "descriptionEnglish": "Sample description in English 8",
        "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand2.png?alt=media&token=3894bd63-6364-4308-aa3e-70dc59f3bdb3"
    },
    {
        "id": 9,
        "date": "2024-01-04T14:55:00Z",
        "descriptionPolish": "Przykładowy opis po polsku 9",
        "descriptionEnglish": "Sample description in English 9",
        "img": "https://firebasestorage.googleapis.com/v0/b/sign-language-logs.appspot.com/o/hand5.png?alt=media&token=b9ed4a65-e030-41ee-8ede-c8f4aae957bb"
    },
  ];

const LogList = () => {

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    setLogs(data);
  }, []);

  return (
    <ScrollView style={styles.logsBody}>
      <Text style={styles.header}>Logs</Text>
      {logs.map(log => (
        <View key={log.id} style={styles.logContainer}>
          <View style={styles.dateContainer}><Text>{new Date(log.date).toLocaleString()}</Text></View>
          <View style={styles.log2}>
            <Image source={{ uri: log.img }} style={styles.logImg} />
            <View style={styles.textLog}>
              <Text>Polski: {log.descriptionPolish}</Text>
              <Text>English: {log.descriptionEnglish}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logsBody: {
    padding: 5
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  logContainer: {
    marginBottom: 8,
  },
  dateContainer: {
    backgroundColor: '#a6e4e7',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingLeft: 5,
    width: '50%'
  },
  log2: {
    flexDirection: 'row',
    backgroundColor: '#fafae7',
    width: '90%',
    borderRadius: 8,
    borderTopStartRadius: 0,
  },
  textLog: {
    padding: 10, // Opcjonalnie, aby oddzielić tekst od krawędzi kontenera
    justifyContent: 'center',
  },
  logImg: {
    height: 50,
    width: 50,
    margin: 5
  },
});

export default LogList;
