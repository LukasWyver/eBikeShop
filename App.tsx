import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import Home from './src/screens/Home';
import { theme } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="auto" backgroundColor="transparent"/>
      <Box flex="1" bg={theme.colors.primary[100]}>
        <Home  />
      </Box>
    </NativeBaseProvider>
  );
}