import { StatusBar } from 'expo-status-bar';
import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Box } from '@/components/ui/box';
import { ImageBackground } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <GluestackUIProvider mode="light">
      <VStack className="flex-1 bg-white">
        <Box className="h-[30%] w-full bg-blue-500">
          <ImageBackground
            source={require('../../../assets/logo.png')}
            resizeMode="cover"
            className="h-full w-full"
          >
            {/* Conteúdo opcional aqui */}
          </ImageBackground>
        </Box>
        <Box className="h-[60%] w-full bg-green-500 flex-row">
          <Box className="flex-1 items-center justify-center bg-indigo-200 px-2">
            <ImageBackground
              source={require('../../../assets/food.png')}
              resizeMode="cover"
              className="h-[33%] w-full"
            >
              {/* Conteúdo opcional aqui */}
            </ImageBackground>

            <Button
              className="bg-blue-800 mt-8 h-16 w-48 rounded-full"
              onPress={handleLogin}
            >
              <ButtonText className="text-white text-xl font-medium">
                refeição
              </ButtonText>
            </Button>

            <Button
              className="bg-blue-800 my-8 h-16 w-48 rounded-full"
              onPress={handleLogin}
            >
              <ButtonText className="text-white text-xl font-medium">
                lanche
              </ButtonText>
            </Button>
          </Box>
          <Box className="flex-1 items-center justify-center bg-blue-500 px-2">
            <ImageBackground
              source={require('../../../assets/garcom.png')}
              resizeMode="cover"
              className="h-[33%] w-full"
            >
              {/* Conteúdo opcional aqui */}
            </ImageBackground>

            <Button
              className="bg-blue-800 mt-8 h-16 w-48 rounded-full"
              onPress={handleLogin}
            >
              <ButtonText className="text-white text-xl font-medium">
                bebidas
              </ButtonText>
            </Button>

            <Button
              className="bg-blue-800 my-8 h-16 w-48 rounded-full"
              onPress={handleLogin}
            >
              <ButtonText className="text-white text-xl font-medium">
                drinks
              </ButtonText>
            </Button>
          </Box>
        </Box>
        <Box className="flex-1 items-center justify-center h-[10%] w-full bg-red-500">
          <Text className="text-white  text-xl">
            @Todos os direitos reservados
          </Text>
        </Box>
      </VStack>
      <StatusBar style="dark" />
    </GluestackUIProvider>
  );
}
