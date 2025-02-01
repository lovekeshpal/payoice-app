import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="bg-black">
      <Text>Payoice</Text>
      <Link href="/profile">Go to profile</Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
