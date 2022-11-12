import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./../../assets/images/HomeImage.png")}
        style={styles.image}
      />
      <Text style={styles.welcome}>Welcome</Text>
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
  },
  welcome: {
    fontSize: 40,
    textAlign: "center",
    margin: 100,
    color: "#3338c7",
    fontWeight: "bold",
  },
});