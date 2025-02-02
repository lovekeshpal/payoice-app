import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex justify-center items-center">
      <Text className="font-gblack">Payoice</Text>
      <Link href="/home">Go to Home</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
