import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LabDPMLayout = () => {
  return (
    <View style={styles.container}> 
    {/* Komponen dengan tampilan sebuah teks di tengah layar */} 
      <Text style={styles.text}>NUR ASYIFAH-223510250-Class 5B</Text>
	  {/* Menambahkan dua kotak */}
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Latar belakang layar berwarna abu-abu terang
    justifyContent: 'center', // Menempatkan isi di tengah secara vertikal
    alignItems: 'center', // Menempatkan isi di tengah secara horizontal
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal (bold)
    marginBottom: 20, // Memberikan jarak ke bawah
  },
  row: {
    flexDirection: 'row', // Mengatur elemen secara horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Lebar row 80% dari layar
  },
  box1: {
    width: 100,  // Kotak 1, Ukuran: 100x100
    height: 100, // Berada di sisi kiri layar
    backgroundColor: '#87CEEB', // Warna: (BEBAS) cipa pilih color skyblue
  },
  box2: {
    width: 100,  // Kotak 2, Ukuran: 100x100
    height: 100, // Berada di sisi kanan layar
    backgroundColor: '#FFB6C1', // Warna: (BEBAS) cipa pilih color lightpink
  },
});

export default LabDPMLayout;