import React, { useRef, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider } from "react-native-appearance";
import { NotifierWrapper } from "react-native-notifier";
import AsyncStorage from "@callstack/async-storage";
import { SplashScreen as ExpoSplash } from "expo";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Provider } from "react-native-paper";
import { StatusBar } from "react-native";
import * as Font from "expo-font";

import { Col } from "@/components";
import { SplashScreen } from "@/screens";
import { useLinking, useTheme, useDimensions } from "@/hooks";
import { useFonts, FONTS } from "@/theme";
import {
  AuthProvider,
  ThemeManager,
  SidebarManager,
  authActions,
} from "@/contexts";
import Router from "@/router";
import { delay, isWeb } from "@/utils";

if (process.env.NODE_ENV === "development" && process.env.MOCK_API === "true") {
  require("./mock/miragejs").makeServer({ environment: process.env.NODE_ENV });
}

const getActiveRouteName = (state) => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
};

const Wrapper = (props) => {
  const routeNameRef = useRef();
  const { theme, scheme } = useTheme(props.defaultTheme);
  const { window } = useDimensions();

  const logout = () => {
    dispatch(authActions.logOut);
  };

  useEffect(() => {
    // const state = props.containerRef.current.getRootState();
    //
    // // Save the initial route name
    // routeNameRef.current = getActiveRouteName(state);
  }, []);

  return (
    <Provider theme={theme}>
      {props.showSplash ? (
        <SplashScreen />
      ) : (
        <Col flex={1}>
          <StatusBar
            barStyle={scheme === "light" ? "default" : "light-content"}
          />
          <NavigationContainer
            theme={theme}
            ref={props.containerRef}
            initialState={props.initialNavigationState}
            onStateChange={(state) => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName = getActiveRouteName(state);

              if (previousRouteName !== currentRouteName) {
                // TODO: track analytics
              }

              // Save the current route name for later comparision
              routeNameRef.current = currentRouteName;
            }}
          >
            <Router
              theme={theme}
              scheme={scheme}
              logout={logout}
              isLoggedIn={props.isLoggedIn}
              isLargeScreen={window.width >= 1024}
            />
          </NavigationContainer>
        </Col>
      )}
    </Provider>
  );
};

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const [sidebarInitialState, setSidebarInitialState] = useState(false);
  const [defaultTheme, setDefaultTheme] = useState(
    isWeb() ? localStorage.getItem("theme") || "light" : "light" // TODO: Fix, this wont work in native
  );
  const [user, setUser] = useState(null);
  const containerRef = useRef();
  const { getInitialState } = useLinking(containerRef);
  const [fontsLoaded] = useFonts(FONTS);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        ExpoSplash.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        setDefaultTheme((await AsyncStorage.getItem("theme")) || null);
        setSidebarInitialState(
          (await AsyncStorage.getItem("sidebar")) === "true" || null
        );

        const savedUser = await AsyncStorage.getItem("user");
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...MaterialCommunityIcons.font,
          ...MaterialIcons.font,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        await delay(1000);
        setLoadingComplete(true);
        ExpoSplash.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <AppearanceProvider>
      <SidebarManager initialState={sidebarInitialState}>
        <ThemeManager defaultTheme={defaultTheme}>
          <NotifierWrapper>
            <AuthProvider user={user}>
              <Wrapper
                containerRef={containerRef}
                initialNavigationState={initialNavigationState}
                showSplash={
                  !isLoadingComplete && !props.skipLoadingScreen && !fontsLoaded
                }
                isLoggedIn={user?.isLoggedIn}
              />
            </AuthProvider>
          </NotifierWrapper>
        </ThemeManager>
      </SidebarManager>
    </AppearanceProvider>
  );
}
