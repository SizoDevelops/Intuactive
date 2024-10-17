import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Background from './Background'

export default function Health() {
  return (
    <Background>
    <Text style={styles.Text}>This is the health status screen</Text>
  </Background>
  )
}

const styles = StyleSheet.create({
    Text: {
      color: "#fff"
    }
  })