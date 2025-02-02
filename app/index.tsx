import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-mblack color-primary text-4xl">Payoice</Text>
      <Link href="/home">Go to Home</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
