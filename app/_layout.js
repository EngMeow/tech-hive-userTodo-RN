import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastProvider } from 'react-native-toast-message'; 

export const unstable_settings = {
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack initialRouteName="home">
        <ToastProvider>
              <Stack.Screen name="home" />
        </ToastProvider>
      </Stack>
    </Provider>
  )
};

export default Layout;
