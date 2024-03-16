import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./screens/SplashScreen"

const App = () => {

    return (
        <SafeAreaProvider>
            <SplashScreen />
        </SafeAreaProvider>
    );
}

export default App;