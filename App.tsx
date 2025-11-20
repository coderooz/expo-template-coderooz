import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar hideTransitionAnimation='fade' hidden/>
      <View className="flex-1 items-center justify-center bg-green-800">
      <Text className="text-2xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
    </>
  );
}