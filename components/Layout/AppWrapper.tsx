import { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Box from "../Box";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import themes from "../../themes";

export type AppWrapperProps = {
    isDarkMode: boolean
} & PropsWithChildren;

/**
 * Simple app wrapper for layout
 * @param param
 * @returns 
 */
const AppWrapper = ({ isDarkMode, children }: AppWrapperProps) => {

    const insets = useSafeAreaInsets();

    return (
        <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
            <Box px="md" backgroundColor="background"
                style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
                <StatusBar style={isDarkMode ? "light" : "dark"} />
                <ScrollView style={{ width: '100%' }}>
                    {children}
                </ScrollView>
            </Box>
        </ThemeProvider>);
}

export default AppWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});