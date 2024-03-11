import { StatusBar } from 'expo-status-bar';
import { Appearance, ScrollView, StyleSheet, Switch, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import Box from './components/Box';
import themes, { Theme } from './themes'
import { PropsWithChildren, useState } from 'react';
import Text from './components/Text';
import Button from './components/Button/Button';
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

/**
 * Detect the what theme to use and return
 * @returns shopify theme
 */
const getTheme = (darkMode: boolean): Theme => {

  // is dark mode or manual override st
  const isDarkThmeme = darkMode || Appearance.getColorScheme() ? themes.dark : themes.light;
  return isDarkThmeme ? themes.dark : themes.light;
};


type AppWrapperProps = {
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
    <Box px="lg" backgroundColor="background"
      style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>       
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <ScrollView style={{width: '100%'}}>
        {children}
      </ScrollView>
    </Box>);
}

const Row = ({ children }) => (
  <View
    style={{
      width: "100%",
      flexDirection: "row",
      gap: 10,
      marginBottom: 20
    }}>
    {children}
  </View>
);

const Cell = ({ children, first = false, last = false }) => (
  <View
    style={{
      flex: 1,
      alignContent: "center"
    }}>
    {children}
  </View>
);


const Line = () => {
  return <Box style={{ width: "100%", borderTopWidth: 0.5 }} my="md" borderTopColor={"line"}></Box>
}


export default function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  //const theme = getTheme(darkMode);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={darkMode ? themes.dark : themes.light}>
        <AppWrapper isDarkMode={darkMode}>

          <Text variant={"h1"}>Demo Restyle project</Text>
          <Text variant={"body"}>A basic starter project to demonstate themed and stateful buttons, as well as having different size and shape variations.</Text>

          <Line />

          <Text variant="h3">Controls</Text>
          <Row>
            <Cell>
              <Text variant={"body"}>Switch to {darkMode ? "light" : "dark"}</Text>
              <Switch
                value={darkMode}
                onValueChange={(value: boolean) => setDarkMode(value)}
              />
            </Cell>
            <Cell>
              <Text variant="body">Set as loading</Text>
              <Switch
                value={isLoading}
                onValueChange={(value: boolean) => setIsLoading(value)}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Text variant="body">Set as disabled</Text>
              <Switch
                value={isDisabled}
                onValueChange={(value: boolean) => setIsDisabled(value)}
              />
            </Cell>
            <Cell>
              <Text variant="body">Set as active</Text>
              <Switch
                value={isActive}
                onValueChange={(value: boolean) => setIsActive(value)}
              />
            </Cell>
          </Row>

          <Line />

          <Text variant="h3">Stateful variants</Text>
          <Text variant="body" mb="sm">Sets up different states for variants</Text>
          <Button variant="primary" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive} iconRight='arrow-up-right'>Primary button</Button>
          <Button variant="secondary" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Secondary button</Button>

          <Line />

          <Text variant="h3">Size variants</Text>
          <Text variant="body" mb="sm">Extends the stateful variants</Text>
          <Button variant="primary-small" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Primary button</Button>
          <Button variant="secondary-small" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Secondary button</Button>

          <Line />

          <Text variant="h3">Shape variants</Text>
          <Text variant="body" mb="sm">Extends stateful and/or size variants</Text>
          <Button variant="primary-pill" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Primary button</Button>
          <Button variant="secondary-pill" mb="sm" loading={isLoading} disabled={isDisabled} active={isActive}>Secondary button</Button>

        </AppWrapper>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
    //height: 300,
  },
});
