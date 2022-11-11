import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
          <Image source={require('./../../assets/images/HomeImage.png')} />
          <Text>Welcome</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})