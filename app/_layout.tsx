
import TimerProvider from "@/context/TimerContext";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function  RootLayout  (){
    return(
        <SafeAreaProvider>
        <TimerProvider>
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="meditate/[id]"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="(modal)/adjust-meditation-duration"
                    options={{ headerShown: false, presentation: "modal" }}
                />
            </Stack>
        </TimerProvider>
    </SafeAreaProvider>
    )

}