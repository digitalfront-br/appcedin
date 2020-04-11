import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyProvider, { useIslogin } from "./src/services/providers/AppProvider"; 
import MainComponent from './src/screen/Main/index'

const Env = createStackNavigator()

export default function App() {
  const [ islogin, setIslogin ]  = React.useState(true);
  return (
    <MyProvider>
      <NavigationContainer>
        <Env.Navigator headerMode="none">
          { islogin ? (
            <>
              <Env.Screen name="Main page" component={MainComponent} />
            </>
          ) : (
            <>
              <Env.Screen name="Login page" component={LoginComponent} />
            </>
          ) }
        </Env.Navigator>
      </NavigationContainer>
    </MyProvider>
  );
}

import { Text, View } from 'react-native';

const LoginComponent = () => (
    <View>
        <Text>componentName</Text>
    </View>
);




