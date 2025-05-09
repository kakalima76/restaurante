import { StatusBar } from 'expo-status-bar';
import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Box } from '@/components/ui/box';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <GluestackUIProvider mode="light">
      <ImageBackground
        source={require('../../../assets/logo.png')}
        resizeMode="repeat"
        className="h-full w-full"
      >
        <Box className="flex items-center justify-center h-screen">
          <Box className="flex items-center justify-center bg-black p-5 m-4 rounded-3xl">
            <Input className="border border-outline-300  px-3 w-full rounded-lg placeholder:text-white">
              <InputField
                placeholder="usuário"
                className="text-white text-xl placeholder:text-neutral-500"
              />
            </Input>

            <Input className="border border-outline-300  px-3 w-full rounded-lg mt-2">
              <InputField
                placeholder="senha"
                className="text-white text-xl placeholder:text-neutral-500"
              />
            </Input>

            <Button
              className="bg-blue-800 my-4 h-24 w-24 rounded-full"
              onPress={handleLogin}
            >
              <ButtonText className="text-white text-xl font-medium">
                entrar
              </ButtonText>
            </Button>
          </Box>
        </Box>
      </ImageBackground>

      <StatusBar style="dark" />
    </GluestackUIProvider>
  );
}
