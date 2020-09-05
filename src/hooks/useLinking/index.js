import * as Linking from 'expo-linking'
import { useLinking as useLinkingHook } from '@react-navigation/native';

export const useLinking = (containerRef) => {
  return useLinkingHook(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Settings: 'settings',
        },
      },
    },
  });
}
